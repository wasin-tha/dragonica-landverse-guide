/* ============================================================================
   Dragonica Landverse Guide — ตัวเรนเดอร์ + Visual Skill Tree Simulator
   ใช้ data.js (เนื้อหาเรียบเรียง) + skills-data.js (SKILLS = skill tree จริง)
   ========================================================================== */

const ICONS = {
  sword:'<path d="M14.5 3.5l6 6L9 21l-3 .5.5-3L18 6.5l-3.5-3z"/><path d="M3 21l4-4M14.5 9.5l-2-2"/>',
  wand:'<path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8l1.4 1.4M17.8 6.2l1.4-1.4M5 21l9-9"/><circle cx="15" cy="9" r="3"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  dagger:'<path d="M14 3l4 4-7 7-4 1 1-4 6-8zM4 20l4-4M11 11l2 2"/>',
  store:'<path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M9 13h6"/><path d="M3 9a2.4 2.4 0 004.5 0 2.4 2.4 0 004.5 0 2.4 2.4 0 004.5 0 2.4 2.4 0 004.5 0"/>',
  battery:'<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
  swords:'<path d="M14.5 3.5l6 6L9 21l-3 .5.5-3L18 6.5zM3 21l4-4M9.5 3.5l-6 6L15 21l3 .5-.5-3L6 6.5z"/>',
  shirt:'<path d="M16 3l4 2-2 4-2-1v11H8V8L6 9 4 5l4-2 2 2h4l2-2z"/>',
  gift:'<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M3 12h18M12 8v13M12 8S10 3 7.5 4 9 8 12 8zM12 8s2-5 4.5-4S15 8 12 8z"/>',
  forward:'<path d="M13 5l7 7-7 7M5 5l7 7-7 7"/>',
};
function svg(name,cls){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${ICONS[name]||''}</svg>`}
const $=s=>document.querySelector(s);
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}

/* ---------- HERO STATS ---------- */
$('#heroStats').innerHTML = [
  ['4','อาชีพหลัก'],['8','สายอาชีพเต็ม'],['300+','สกิลพร้อมไอคอน'],['2.5D','แอ็กชันคอมโบ']
].map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('');

/* ---------- OVERVIEW ---------- */
$('#overviewCards').innerHTML = [
  ['ประเภทเกม', GAME.genre],
  ['ผู้ให้บริการ', GAME.publisher],
  ['สไตล์การเล่น', 'ตะลุยด่านมุมมองข้าง เน้นต่อคอมโบลอยศัตรู (Juggle) เล่นเดี่ยวหรือปาร์ตี้ก็ได้'],
].map(([h,p])=>`<div class="card"><h3>${h}</h3><p>${p}</p></div>`).join('');

/* ---------- NEWS ---------- */
$('#newsGrid').innerHTML = NEWS.map(n=>`
  <article class="news-item">
    <div class="pic"><span class="tg">${n.tag}</span>
      <img src="${n.img}" alt="${esc(n.title)}" loading="lazy"></div>
    <div class="body">
      <div class="dt">${n.date}</div>
      <h3>${n.title}</h3>
      <p class="intro">${n.intro}</p>
      <div class="nblocks">
        ${n.blocks.map(b=>`<div class="nblock"><b>${b.h}</b>${b.p?`<p>${b.p}</p>`:''}${
          b.list?`<div class="nlist">${b.list.map(it=>`<div class="nrow"><span>${it.k}</span><span class="v">${it.v}${b.unit?` <small>${b.unit}</small>`:''}</span></div>`).join('')}</div>`:''
        }</div>`).join('')}
      </div>
      <a class="more" href="${n.url}" target="_blank" rel="noopener">อ่านต้นฉบับ ↗</a>
    </div>
  </article>`).join('');

/* ---------- FEATURES ---------- */
$('#featureGrid').innerHTML = FEATURES.map(f=>`
  <div class="card"><div class="ic">${svg(f.icon)}</div><h3>${f.title}</h3><p>${f.desc}</p></div>`).join('');

/* ---------- STATS ---------- */
$('#statGrid').innerHTML = STATS.map(s=>`
  <div class="stat-row"><span class="tag">${s.key}</span>
    <div><b>${s.name}</b><p style="color:var(--muted);font-size:.88rem;margin-top:2px">${s.desc}</p></div>
  </div>`).join('');

/* ---------- TIPS ---------- */
$('#tipGrid').innerHTML = TIPS.map((t,i)=>`
  <div class="tip"><span class="num">${String(i+1).padStart(2,'0')}</span>
    <div><b>${t.t}</b><p>${t.d}</p></div></div>`).join('');

/* ---------- SOURCES ---------- */
$('#srcList').innerHTML = SOURCES.map(s=>`<a href="${s.u}" target="_blank" rel="noopener">${s.t} ↗</a>`).join('');

/* ============================================================================
   หาไอคอนจริงให้สกิลในบิลด์แนะนำ (จับคู่จากชื่อ -> SKILLS)
   ========================================================================== */
function findIcon(baseId, skillName){
  const lines = SKILLS.filter(l=>l.base===baseId);
  const key = skillName.toLowerCase().replace(/\(.*?\)/g,'').replace(/[^a-z ]/g,'').trim();
  const words = key.split(/\s+/).filter(w=>w.length>2);
  let best=null, bestScore=0;
  for(const l of lines) for(const t of l.tiers) for(const s of t.skills){
    const sn=s.name.toLowerCase();
    let score=0;
    if(sn===key) score=100;
    else words.forEach(w=>{ if(sn.includes(w)) score+=w.length; });
    if(score>bestScore){bestScore=score;best=s.icon;}
  }
  return bestScore>=3?('assets/'+best):null;
}

/* ============================================================================
   CLASS PANEL (การ์ดอาชีพ + แผนผัง + บิลด์แนะนำ พร้อมไอคอนจริง)
   ========================================================================== */
const classOrder=['warrior','magician','archer','thief'];
let activeClass='warrior';

function renderTabs(){
  $('#classTabs').innerHTML = classOrder.map(id=>{
    const c=CLASSES[id];
    const em=CLASS_EMBLEM[id];
    return `<div class="ctab ${id===activeClass?'active':''}" data-c="${id}" style="--cc:${c.color}" role="button" tabindex="0">
      <div class="cic">${em?`<img class="emblem" style="width:42px;height:42px" src="${em}" alt="">`:svg(c.icon)}</div><b>${c.name}</b><span>${c.nameTh} · ${c.role.split(' ')[0]}</span>
    </div>`;
  }).join('');
  document.querySelectorAll('.ctab').forEach(el=>{
    const go=()=>{activeClass=el.dataset.c;renderTabs();renderClassPanel();};
    el.onclick=go; el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}};
  });
}

function renderClassPanel(){
  const c=CLASSES[activeClass];
  const emblem=CLASS_EMBLEM[activeClass];
  const tree = c.tree.map(t=>`
    <div class="tier"><div class="lvl">Lv.${t.lv}</div>
      ${t.jobs.map(j=>{const ji=jobIcon(j.name);
        return `<div class="job">${ji?`<img class="jicon" src="${ji}" alt="" loading="lazy">`:''}
          <div><b>${j.name}</b><span>${j.note}</span></div></div>`;}).join('')}
    </div>`).join('');

  const builds = c.builds.map(b=>`
    <div class="build"><h4>${b.path}</h4><p class="sm">${b.summary}</p>
      <div class="skill-list">
        ${b.skills.map(s=>{
          const ic=findIcon(activeClass,s.name)||CLASS_EMBLEM[activeClass];
          return `<div class="skill-line">
            <img class="emblem" src="${ic}" alt="" loading="lazy">
            <div><b>${s.name}</b> <span class="lv" style="font-size:.66rem">แนะนำ ${s.rec}/${s.max}</span><p>${s.desc}</p></div>
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');

  $('#classPanel').innerHTML = `
    <div class="class-panel" style="--cc:${c.color}">
      <div class="class-head">
        <div class="big">${emblem?`<img class="emblem" style="width:46px;height:46px" src="${emblem}" alt="">`:svg(c.icon)}</div>
        <div><h3>${c.name} <span style="color:var(--dim);font-weight:500;font-size:1rem">/ ${c.nameTh}</span></h3>
          <p style="color:var(--muted);font-size:.9rem">${c.tagline}</p></div>
      </div>
      <div class="chips">
        <span class="chip"><b>อาวุธ:</b> ${c.weapon}</span>
        <span class="chip"><b>บทบาท:</b> ${c.role}</span>
      </div>
      <p style="color:var(--muted);font-size:.92rem;margin-top:6px">${c.desc}</p>
      <div style="margin-top:18px"><span class="eyebrow" style="color:var(--cc)">แผนผังสายอาชีพ</span></div>
      <div class="tree">${tree}</div>
      <div style="margin-top:8px"><span class="eyebrow" style="color:var(--cc)">แนวทางบิลด์ & สกิลเด่น (PVE)</span></div>
      ${builds}
      <p style="font-size:.8rem;color:var(--dim);margin-top:14px">อยากจัดสกิลเอง? เลื่อนไปที่ <a href="#sim" style="color:var(--cc)">ตัวจำลอง Skill Tree ↓</a> เพื่ออัพสกิลทีละจุดแบบในเกม</p>
    </div>`;
}

/* ============================================================================
   VISUAL SKILL TREE SIMULATOR (จาก SKILLS — ข้อมูลจริง)
   ========================================================================== */
const NS=46;            // ขนาดไอคอน node (px)
const GX=78, GY=40;     // ระยะ grid ต่อ 1 หน่วย pos (x=คอลัมน์, y=แถว)
const PAD=34;           // ขอบ canvas
const branchLabel = {   // ป้ายสายให้เข้าใจง่าย (ดัชนีตาม SKILLS)
  0:'Warrior · สาย Knight (โล่/แทงค์)',
  1:'Warrior · สาย Gladiator (ดาบ 2 มือ)',
  2:'Magician · สาย Acolyte (ซัพพอร์ต/ฮีล)',
  3:'Magician · สาย Battlemage (เวท AoE)',
  4:'Archer · สาย Hunter (ธนู/กับดัก)',
  5:'Archer · สาย Ranger (หน้าไม้/DPS)',
  6:'Thief · สาย Jester (กรงเล็บ/อากาศ)',
  7:'Thief · สาย Assassin (กะตาร์/ลอบ)',
};

let simLine=1, simTier=1;
// alloc[lineIndex][tierIndex][skillId] = level
let alloc = {};

function aKey(l,t){return l+'_'+t}
function getLv(l,t,id){return (alloc[aKey(l,t)]||{})[id]||0}
function setLv(l,t,id,v){ if(!alloc[aKey(l,t)])alloc[aKey(l,t)]={}; alloc[aKey(l,t)][id]=v; }
function tierSP(l,t){
  const a=alloc[aKey(l,t)]||{}; const sk=SKILLS[l].tiers[t].skills;
  let sp=0; for(const id in a){const s=sk[id]; for(let i=0;i<a[id];i++){ sp += (s.levels[Math.min(i,s.levels.length-1)].sp)||0; }}
  return sp;
}
function totalSP(l){let s=0;for(let t=0;t<SKILLS[l].tiers.length;t++)s+=tierSP(l,t);return s;}

function prereqMet(l,t,skill){
  return (skill.parent||[]).every(p=>getLv(l,t,p.id) >= (p.lv||1));
}
function dependents(l,t,id){ // สกิลที่ใช้ id นี้เป็น prerequisite
  return SKILLS[l].tiers[t].skills.filter(s=>(s.parent||[]).some(p=>p.id===id));
}

function renderTree(){
  const line=SKILLS[simLine], tier=line.tiers[simTier];
  const cc=line.color;

  // คำนวณขนาด canvas
  let maxX=0,maxY=0;
  tier.skills.forEach(s=>{maxX=Math.max(maxX,s.pos[0]);maxY=Math.max(maxY,s.pos[1]);});
  const W=(maxX)*GX+NS+PAD*2, H=(maxY)*GY+NS+PAD*2+14;

  const nodeXY=s=>({x:PAD+s.pos[0]*GX, y:PAD+s.pos[1]*GY});

  // เส้นเชื่อม prerequisite (parent -> child)
  let links='';
  tier.skills.forEach(s=>{
    const c=nodeXY(s);
    (s.parent||[]).forEach(p=>{
      const par=tier.skills[p.id]; if(!par)return;
      const a=nodeXY(par);
      const x1=a.x+NS/2, y1=a.y+NS, x2=c.x+NS/2, y2=c.y;
      const met=getLv(simLine,simTier,p.id)>=(p.lv||1);
      const col=met?cc:'#33455e';
      const midY=(y1+y2)/2;
      links+=`<path d="M${x1} ${y1} V${midY} H${x2} V${y2}" fill="none" stroke="${col}" stroke-width="2.5" opacity="${met?.9:.5}"/>`;
      links+=`<circle cx="${x2}" cy="${y2-1}" r="3" fill="${col}"/>`;
    });
  });

  // nodes
  const nodes=tier.skills.map(s=>{
    const {x,y}=nodeXY(s);
    const lv=getLv(simLine,simTier,s.id);
    const met=prereqMet(simLine,simTier,s);
    const cls=lv>=s.max?'maxed':(lv>0?'has':(met?'':'locked'));
    return `<div class="node ${cls}" style="left:${x}px;top:${y}px;--ns:${NS}px" data-id="${s.id}">
      <div class="ibox" data-id="${s.id}">
        <img src="assets/${s.icon}" alt="${esc(s.name)}" loading="lazy">
        <span class="lvtag">${lv}/${s.max}</span>
        <button class="pm minus" data-id="${s.id}" data-d="-1" ${lv<=0?'disabled':''} aria-label="ลด">−</button>
        <button class="pm plus" data-id="${s.id}" data-d="1" ${(lv>=s.max||!met)?'disabled':''} aria-label="เพิ่ม">+</button>
      </div>
      <div class="nm">${esc(s.name)}</div>
    </div>`;
  }).join('');

  const used=tierSP(simLine,simTier), all=totalSP(simLine);

  const curBase=line.base;
  const branchLines=SKILLS.map((l,i)=>({l,i})).filter(o=>o.l.base===curBase);
  const branchDesc=i=>{const m=(branchLabel[i]||'').match(/\(([^)]+)\)/);return m?m[1]:'สายที่ '+(i%2+1);};

  $('#tree').innerHTML = `
    <div class="tree-wrap" style="--cc:${cc}">
      <div class="picker">
        <div class="base-row" id="baseSel">
          ${classOrder.map(id=>{const c=CLASSES[id],em=CLASS_EMBLEM[id];
            return `<button class="base-btn ${id===curBase?'on':''}" data-base="${id}" style="--cc:${c.color}">
              <img src="${em}" alt=""><span>${c.name}</span></button>`;}).join('')}
        </div>
        <div class="branch-row" id="branchSel">
          ${branchLines.map(o=>`<button class="branch-btn ${o.i===simLine?'on':''}" data-line="${o.i}" style="--cc:${cc}">
            <img src="${lineIcon(o.i,1)}" alt="">
            <div><b>${esc(SKILLS[o.i].tiers[1].job)}</b><small>${esc(branchDesc(o.i))}</small></div></button>`).join('')}
        </div>
      </div>
      <div class="tree-bar">
        <div class="tier-tabs" id="tierTabs">
          ${line.tiers.map((t,i)=>`<button data-t="${i}" class="${i===simTier?'on':''}"><img src="${lineIcon(simLine,i)}" alt=""><span>${esc(t.job)}<small>Lv.${t.lv}</small></span></button>`).join('')}
        </div>
        <div class="sp-badge"><div><div class="nn">${used}</div><small>SP เทียร์นี้</small></div>
          <div style="width:1px;height:30px;background:var(--border)"></div>
          <div><div class="nn" style="color:var(--text)">${all}</div><small>SP รวมทุกเทียร์</small></div>
        </div>
      </div>
      <div class="canvas-scroll">
        <div class="canvas" style="width:${W}px;height:${H}px">
          <svg class="links" viewBox="0 0 ${W} ${H}">${links}</svg>
          ${nodes}
        </div>
      </div>
      <div class="tree-legend">
        <span><i style="border-color:${cc}"></i> ลงแล้ว</span>
        <span><i style="border-color:var(--gold)"></i> เต็มสกิล</span>
        <span><i style="border-color:#33455e"></i> ล็อก (ต้องปลดสกิลก่อนหน้า)</span>
        <span>· ชี้ที่ไอคอนเพื่อดูรายละเอียด · กด +/− ที่มุมไอคอน</span>
      </div>
      <div class="sim-actions">
        <button class="btn btn-ghost btn-sm" id="resetTier">ล้างเทียร์นี้</button>
        <button class="btn btn-ghost btn-sm" id="resetAll">ล้างทั้งสาย</button>
        <button class="btn btn-primary btn-sm" id="saveTree">บันทึกบิลด์</button>
        <button class="btn btn-ghost btn-sm" id="shareTree">คัดลอกสรุปบิลด์</button>
      </div>
    </div>`;

  // events
  document.querySelectorAll('#baseSel .base-btn').forEach(b=>b.onclick=()=>{
    const first=SKILLS.findIndex(l=>l.base===b.dataset.base);
    if(first>=0){simLine=first;renderTree();}
  });
  document.querySelectorAll('#branchSel .branch-btn').forEach(b=>b.onclick=()=>{simLine=+b.dataset.line;renderTree()});
  document.querySelectorAll('#tierTabs button').forEach(b=>b.onclick=()=>{simTier=+b.dataset.t;renderTree()});
  document.querySelectorAll('.pm').forEach(b=>b.onclick=e=>{e.stopPropagation();changeNode(+b.dataset.id,+b.dataset.d)});
  document.querySelectorAll('.ibox').forEach(b=>{
    b.onmouseenter=e=>showTip(e,+b.dataset.id);
    b.onmousemove=moveTip;
    b.onmouseleave=hideTip;
  });
  $('#resetTier').onclick=()=>{alloc[aKey(simLine,simTier)]={};renderTree()};
  $('#resetAll').onclick=()=>{for(let t=0;t<SKILLS[simLine].tiers.length;t++)alloc[aKey(simLine,t)]={};renderTree()};
  $('#saveTree').onclick=()=>{localStorage.setItem('drlv_tree',JSON.stringify({simLine,simTier,alloc}));toast('บันทึกบิลด์ลงเครื่องแล้ว ✓')};
  $('#shareTree').onclick=shareTree;
}

function changeNode(id,d){
  const tier=SKILLS[simLine].tiers[simTier];
  const s=tier.skills[id];
  const lv=getLv(simLine,simTier,id);
  if(d>0){
    if(lv>=s.max) return;
    if(!prereqMet(simLine,simTier,s)){toast('ต้องปลดล็อกสกิลก่อนหน้าก่อน');return;}
    setLv(simLine,simTier,id,lv+1);
  }else{
    if(lv<=0) return;
    // ถ้าลดแล้วทำให้สกิลที่ต่อยอดอยู่ขาด prerequisite ก็ลดตามไม่ได้ -> เตือน
    const need=lv-1;
    const blockers=dependents(simLine,simTier,id).filter(dep=>{
      const pr=dep.parent.find(p=>p.id===id);
      return getLv(simLine,simTier,dep.id)>0 && need<(pr.lv||1);
    });
    if(blockers.length){toast('ลดไม่ได้: มีสกิล '+blockers[0].name+' ต่อยอดอยู่');return;}
    setLv(simLine,simTier,id,need);
  }
  renderTree();
}

/* ---------- TOOLTIP ---------- */
let tipEl;
function showTip(e,id){
  const line=SKILLS[simLine], tier=line.tiers[simTier], s=tier.skills[id];
  const lv=getLv(simLine,simTier,id);
  const shown=Math.max(0,Math.min(lv>0?lv-1:0,s.levels.length-1));
  const p=s.levels[shown]||{};
  if(!tipEl){tipEl=document.createElement('div');tipEl.className='tip-pop';document.body.appendChild(tipEl);}
  tipEl.style.setProperty('--cc',line.color);
  const reqLv = typeof p.level==='number'?p.level:(s.levels.find(x=>typeof x.level==='number')||{}).level;
  const rows=[
    p.power?['พลัง',p.power]:null,
    p.sp!=null?['SP/เลเวล',p.sp]:null,
    p.mp!=null?['MP',p.mp]:null,
    p.cool!=null?['คูลดาวน์',p.cool+'s']:null,
    p.dur?['ระยะเวลา',p.dur+'s']:null,
    reqLv?['ใช้ได้เลเวล',reqLv]:null,
  ].filter(Boolean).map(([a,b])=>`<div class="row"><span>${a}</span><span>${b}</span></div>`).join('');
  const pre=(s.parent||[]).length?`<div class="pre">ต้องมี: ${s.parent.map(pr=>esc(tier.skills[pr.id].name)+' Lv.'+(pr.lv||1)).join(', ')}</div>`:'';
  tipEl.innerHTML=`<h5>${esc(s.name)} <span style="color:var(--dim);font-size:.8rem">${lv}/${s.max}</span></h5>
    <div class="ty">${s.type}${s.max>1?' · สูงสุด '+s.max:''}</div>${rows}
    <div class="ds">${esc(p.desc||'')}</div>${pre}`;
  tipEl.classList.add('show'); moveTip(e);
}
function moveTip(e){
  if(!tipEl)return;
  const pad=16,w=tipEl.offsetWidth||300,h=tipEl.offsetHeight||160;
  let x=e.clientX+pad, y=e.clientY+pad;
  if(x+w>innerWidth-8)x=e.clientX-w-pad;
  if(y+h>innerHeight-8)y=Math.max(8,innerHeight-h-8);
  tipEl.style.left=x+'px';tipEl.style.top=y+'px';
}
function hideTip(){if(tipEl)tipEl.classList.remove('show')}

function shareTree(){
  const line=SKILLS[simLine];
  let txt=`[Dragonica Landverse] บิลด์ ${line.line}\n`;
  line.tiers.forEach((t,ti)=>{
    const a=alloc[aKey(simLine,ti)]||{};
    const got=t.skills.filter(s=>(a[s.id]||0)>0);
    if(got.length){txt+=`\n— ${t.job} (Lv.${t.lv}) · ${tierSP(simLine,ti)} SP\n`;
      got.forEach(s=>txt+=`  • ${s.name}: ${a[s.id]}/${s.max}\n`);}
  });
  txt+=`\nรวม ${totalSP(simLine)} SP`;
  navigator.clipboard?.writeText(txt).then(()=>toast('คัดลอกสรุปบิลด์แล้ว ✓'),()=>toast('คัดลอกไม่ได้'));
}

/* ---------- TOAST ---------- */
let toastTimer;
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200);}

/* ---------- INIT ---------- */
(function init(){
  try{const s=JSON.parse(localStorage.getItem('drlv_tree'));
    if(s){simLine=s.simLine??1;simTier=s.simTier??1;alloc=s.alloc||{};}
  }catch(e){}
  renderTabs();renderClassPanel();renderTree();

  $('#menuBtn').onclick=()=>$('#navlinks').classList.toggle('open');
  document.querySelectorAll('#navlinks a').forEach(a=>a.onclick=()=>$('#navlinks').classList.remove('open'));

  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();
