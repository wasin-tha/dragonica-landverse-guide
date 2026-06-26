/* ============================================================================
   Dragonica Landverse Guide — เรนเดอร์ (official whitepaper data)
   data.js: GAME/FEATURES/STATS/TIPS/NEWS/SOURCES/CLASS_EMBLEM/jobIcon
   classes-data.js: OFFICIAL (classes/bases/paths)  •  systems-data.js: SYSTEMS
   ========================================================================== */

const ICONS = {
  store:'<path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M9 13h6"/><path d="M3 9a2.4 2.4 0 004.5 0 2.4 2.4 0 004.5 0 2.4 2.4 0 004.5 0 2.4 2.4 0 004.5 0"/>',
  battery:'<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
  swords:'<path d="M14.5 3.5l6 6L9 21l-3 .5.5-3L18 6.5zM3 21l4-4M9.5 3.5l-6 6L15 21l3 .5-.5-3L6 6.5z"/>',
  shirt:'<path d="M16 3l4 2-2 4-2-1v11H8V8L6 9 4 5l4-2 2 2h4l2-2z"/>',
  gift:'<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M3 12h18M12 8v13M12 8S10 3 7.5 4 9 8 12 8zM12 8s2-5 4.5-4S15 8 12 8z"/>',
  forward:'<path d="M13 5l7 7-7 7M5 5l7 7-7 7"/>',
  anvil:'<path d="M7 10h11a4 4 0 01-4 4h-1l1 4H7l1-4a4 4 0 01-1-4zM3 8h6v2H4zM9 18h6"/>',
  gem:'<path d="M6 3h12l3 6-9 12L3 9zM3 9h18M9 3l-3 6 6 12 6-12-3-6"/>',
  cards:'<rect x="3" y="6" width="12" height="15" rx="2"/><path d="M8 3h11a2 2 0 012 2v12"/>',
  combo:'<path d="M13 2L4.5 13H11l-1 9 8.5-11H12z"/>',
  map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  heart:'<path d="M12 20s-7-4.5-9.5-9C1 8 2.5 4.5 6 4.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20z"/>',
  wallet:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M17 14h.5"/>',
  monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  warning:'<path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
  danger:'<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
  check:'<path d="M5 12l5 5 9-11"/>',
};
function svg(n,cls){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${ICONS[n]||''}</svg>`}
const $=s=>document.querySelector(s);
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}

/* ---------- HERO / OVERVIEW / FEATURES / STATS / NEWS / SOURCES ---------- */
$('#heroStats').innerHTML=[['20','อาชีพ'],['250+','สกิลทางการ'],['8','ดันเจี้ยน'],['Lv.20/40','เลื่อนอาชีพ']]
  .map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('');

$('#overviewCards').innerHTML=[
  ['ประเภทเกม', GAME.genre],
  ['ผู้ให้บริการ', GAME.publisher],
  ['สไตล์การเล่น','ตะลุยด่านมุมมองข้าง เน้นคอมโบกลางอากาศ เล่นเดี่ยว/ปาร์ตี้'],
].map(([h,p])=>`<div class="card"><h3>${h}</h3><p>${p}</p></div>`).join('');

$('#featureGrid').innerHTML=FEATURES.map(f=>`<div class="card"><div class="ic">${svg(f.icon)}</div><h3>${f.title}</h3><p>${f.desc}</p></div>`).join('');
$('#statGrid').innerHTML=STATS.map(s=>`<div class="stat-row"><span class="tag">${s.key}</span><div><b>${s.name}</b><p style="color:var(--muted);font-size:.88rem;margin-top:2px">${s.desc}</p></div></div>`).join('');

$('#newsGrid').innerHTML=NEWS.map(n=>`
  <article class="news-item"><div class="pic"><span class="tg">${n.tag}</span><img src="${n.img}" alt="${esc(n.title)}" loading="lazy"></div>
    <div class="body"><div class="dt">${n.date}</div><h3>${n.title}</h3><p class="intro">${n.intro}</p>
      <div class="nblocks">${n.blocks.map(b=>`<div class="nblock"><b>${b.h}</b>${b.p?`<p>${b.p}</p>`:''}${
        b.list?`<div class="nlist">${b.list.map(it=>`<div class="nrow"><span>${it.k}</span><span class="v">${it.v}${b.unit?` <small>${b.unit}</small>`:''}</span></div>`).join('')}</div>`:''}</div>`).join('')}</div>
      <a class="more" href="${n.url}" target="_blank" rel="noopener">อ่านต้นฉบับ ↗</a></div></article>`).join('');

$('#srcList').innerHTML=SOURCES.map(s=>`<a href="${s.u}" target="_blank" rel="noopener">${s.t} ↗</a>`).join('');

/* ============================================================================
   CLASS PANEL (official)
   ========================================================================== */
let activeBase='warrior';

function renderTabs(){
  $('#classTabs').innerHTML=OFFICIAL.order.map(id=>{
    const b=OFFICIAL.bases[id], em=CLASS_EMBLEM[id];
    return `<div class="ctab ${id===activeBase?'active':''}" data-b="${id}" style="--cc:${b.color}" role="button" tabindex="0">
      <div class="cic">${em?`<img src="${em}" alt="">`:''}</div><b>${b.name}</b><span>${b.th} · ${b.role.split(' ')[0]}</span></div>`;
  }).join('');
  document.querySelectorAll('.ctab').forEach(el=>{
    const go=()=>{activeBase=el.dataset.b;renderTabs();renderClassPanel();};
    el.onclick=go; el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}};
  });
}

function renderClassPanel(){
  const b=OFFICIAL.bases[activeBase];
  const baseCls=OFFICIAL.classes[b.name];
  const tree=b.tree.map(t=>`<div class="tier"><div class="lvl">Lv.${t.lv} · อาชีพ ${t.tier}</div>
    ${t.jobs.map(j=>{const ji=jobIcon(j);return `<div class="job">${ji?`<img class="jicon" src="${ji}" alt="">`:''}<div><b>${j}</b></div></div>`;}).join('')}</div>`).join('');

  $('#classPanel').innerHTML=`
    <div class="class-panel" style="--cc:${b.color}">
      <div class="class-head">
        ${baseCls.portrait?`<img class="portrait" src="${baseCls.portrait}" alt="${esc(b.name)}">`:''}
        <div><h3>${b.name} <span style="color:var(--dim);font-weight:500;font-size:1rem">/ ${b.th}</span></h3>
          <div class="chips"><span class="chip"><b>อาวุธ:</b> ${b.weapon}</span><span class="chip"><b>บทบาท:</b> ${b.role}</span></div>
          <div class="hlist">${(baseCls.highlights||[]).map(h=>`<div>${svg('check')}<span>${esc(h)}</span></div>`).join('')}</div>
        </div>
      </div>
      <p style="color:var(--muted);font-size:.92rem;margin-top:6px">${esc(baseCls.intro)}</p>
      <div style="margin-top:18px"><span class="eyebrow" style="color:var(--cc)">แผนผังสายอาชีพ (3 เทียร์)</span></div>
      <div class="tree">${tree}</div>
      <p style="font-size:.82rem;color:var(--dim);margin-top:6px">ดูสกิลแต่ละอาชีพแบบละเอียด + ลองจัดบิลด์ได้ที่ <a href="#sim" style="color:var(--cc)" onclick="simToBase('${activeBase}')">ตัวจำลอง Skill Tree ↓</a></p>
    </div>`;
}

/* ============================================================================
   SKILL TREE SIMULATOR (official, auto-layout จาก prerequisite)
   ========================================================================== */
const NS=40, GX=64, GY=80, PAD=24;
let simPath=0, simTier=0, alloc={};

function tierClass(p,t){const pp=(typeof p==='number')?OFFICIAL.paths[p]:p;return OFFICIAL.classes[pp.tiers[t]]}
function aKey(p,t){return p+'_'+t}
function getLv(p,t,i){return (alloc[aKey(p,t)]||{})[i]||0}
function setLv(p,t,i,v){if(!alloc[aKey(p,t)])alloc[aKey(p,t)]={};alloc[aKey(p,t)][i]=v}

function skillMax(s){const parts=String(s.reqlv).split('/').filter(x=>/\d/.test(x));return Math.max(1,parts.length)}
function skillSP(s){const n=parseInt(s.sp,10);return isNaN(n)?0:n}
function pickLv(str,lv){if(str==null)return '-';const a=String(str).split('/');if(a.length<=1)return str;return a[Math.min(Math.max(lv-1,0),a.length-1)]}

// resolve prerequisite -> {idx, lv}
function prereqOf(skills,s){
  if(!s.prereq||s.prereq==='-')return null;
  const m=String(s.prereq).match(/^(.*?)\s*Lv\.?\s*(\d+)/i)||[null,s.prereq,1];
  const nm=(m[1]||'').trim().toLowerCase();
  const idx=skills.findIndex(x=>x.name.toLowerCase()===nm);
  return idx>=0?{idx,lv:parseInt(m[2],10)||1}:null;
}
// in-game style: prereq chains flow top->bottom (depth=row),
// sibling branches spread across columns (tidy-tree, parents centered over children)
function computeLayout(skills){
  const pr=skills.map(s=>prereqOf(skills,s));
  const depth=new Array(skills.length).fill(-1);
  function d(i,seen){if(depth[i]>=0)return depth[i];if(seen.has(i))return 0;seen.add(i);
    depth[i]=pr[i]?d(pr[i].idx,seen)+1:0;return depth[i];}
  skills.forEach((_,i)=>d(i,new Set()));
  const kids=skills.map(()=>[]), roots=[];
  pr.forEach((r,i)=>{if(r)kids[r.idx].push(i);else roots.push(i);});
  // integer lanes: main line goes straight down (parent over its first child),
  // extra branches peel off into new columns to the right — แบบเกม
  const col=new Array(skills.length).fill(0); let nextCol=0;
  function place(i){
    if(!kids[i].length){col[i]=nextCol++;return;}
    kids[i].forEach(place);
    col[i]=col[kids[i][0]];
  }
  roots.forEach(place);
  const pos=skills.map((_,i)=>({col:col[i],row:depth[i]}));
  return {pr,pos};
}
function prereqMet(p,t,skills,i,layout){const r=layout.pr[i];return !r || getLv(p,t,r.idx)>=r.lv}
function tierSP(p,t){const a=alloc[aKey(p,t)]||{};const sk=tierClass(p,t).skills;let sp=0;for(const i in a)sp+=skillSP(sk[i])*a[i];return sp}
function totalSP(p){let s=0;for(let t=0;t<OFFICIAL.paths[p].tiers.length;t++)s+=tierSP(p,t);return s}

function branchDescOf(pi){
  const p=OFFICIAL.paths[pi];const b=OFFICIAL.bases[p.base];
  // หา weapon/role hint จากชื่อสาย
  return tierClass(p,1).intro.split(' ').slice(0,0).join('')||'';
}

function renderTree(){
  const p=OFFICIAL.paths[simPath], cc=p.color;
  const tier=tierClass(p,simTier);
  const skills=tier.skills;
  const layout=computeLayout(skills);

  let maxCol=0,maxRow=0;
  layout.pos.forEach(o=>{maxCol=Math.max(maxCol,o.col);maxRow=Math.max(maxRow,o.row);});
  const W=maxCol*GX+NS+PAD*2, H=maxRow*GY+NS+PAD*2+14;
  const xy=i=>({x:PAD+layout.pos[i].col*GX, y:PAD+layout.pos[i].row*GY});

  let links='';
  skills.forEach((s,i)=>{const r=layout.pr[i];if(!r)return;
    const a=xy(r.idx), c=xy(i);
    const x1=a.x+NS/2, y1=a.y+NS, x2=c.x+NS/2, y2=c.y;
    const met=getLv(simPath,simTier,r.idx)>=r.lv, col=met?cc:'#33455e';
    const midY=(y1+y2)/2;
    links+=`<path d="M${x1} ${y1} V${midY} H${x2} V${y2}" fill="none" stroke="${col}" stroke-width="2.5" opacity="${met?.9:.5}"/><circle cx="${x2}" cy="${y2}" r="3" fill="${col}"/>`;
  });

  const nodes=skills.map((s,i)=>{const {x,y}=xy(i);const lv=getLv(simPath,simTier,i);const mx=skillMax(s);
    const met=prereqMet(simPath,simTier,skills,i,layout);
    const cls=lv>=mx?'maxed':(lv>0?'has':(met?'':'locked'));
    return `<div class="node ${cls}" style="left:${x}px;top:${y}px;--ns:${NS}px;--lw:${GX-6}px">
      <div class="ibox" data-i="${i}"><img src="${s.icon}" alt="${esc(s.name)}" loading="lazy">
        <span class="lvtag">${lv}/${mx}</span>
        <button class="pm minus" data-i="${i}" data-d="-1" ${lv<=0?'disabled':''}>−</button>
        <button class="pm plus" data-i="${i}" data-d="1" ${(lv>=mx||!met)?'disabled':''}>+</button></div>
      <div class="nm">${esc(s.name)}</div></div>`;}).join('');

  const used=tierSP(simPath,simTier), all=totalSP(simPath);
  const curBase=p.base;
  const branchLines=OFFICIAL.paths.map((pp,i)=>({pp,i})).filter(o=>o.pp.base===curBase);
  $('#tree').innerHTML=`
    <div class="tree-wrap" style="--cc:${cc}">
      <div class="picker">
        <div class="base-row" id="baseSel">
          ${OFFICIAL.order.map(id=>{const bb=OFFICIAL.bases[id],em=CLASS_EMBLEM[id];
            return `<button class="base-btn ${id===curBase?'on':''}" data-base="${id}" style="--cc:${bb.color}"><img src="${em}" alt=""><span>${bb.name}</span></button>`;}).join('')}
        </div>
        <div class="branch-row" id="branchSel">
          ${branchLines.map(o=>{const t2=o.pp.tiers[1],t3=o.pp.tiers[2];
            return `<button class="branch-btn ${o.i===simPath?'on':''}" data-p="${o.i}" style="--cc:${cc}">
              <img src="${jobIcon(t2)}" alt=""><div><b>${esc(t2)}</b><small>→ ${esc(t3)}</small></div></button>`;}).join('')}
        </div>
      </div>
      <div class="tree-bar">
        <div class="tier-tabs" id="tierTabs">
          ${p.tiers.map((jn,i)=>`<button data-t="${i}" class="${i===simTier?'on':''}"><img src="${jobIcon(jn)}" alt=""><span>${esc(jn)}<small>${['Lv.1','Lv.20','Lv.40'][i]}</small></span></button>`).join('')}
        </div>
        <div class="sp-badge"><div><div class="nn">${used}</div><small>SP เทียร์นี้</small></div>
          <div style="width:1px;height:30px;background:var(--border)"></div>
          <div><div class="nn" style="color:var(--text)">${all}</div><small>SP รวมทั้งสาย</small></div></div>
      </div>
      <div class="canvas-scroll"><div class="canvas" style="width:${W}px;height:${H}px">
        <svg class="links" viewBox="0 0 ${W} ${H}">${links}</svg>${nodes}</div></div>
      <div class="tree-legend">
        <span><i style="border-color:${cc}"></i> ลงแล้ว</span><span><i style="border-color:var(--gold)"></i> เต็ม</span>
        <span><i style="border-color:#33455e"></i> ล็อก (ปลดสกิลก่อนหน้าก่อน)</span><span>· ชี้/แตะไอคอนดูรายละเอียด</span>
      </div>
      <div class="sim-actions">
        <button class="btn btn-ghost btn-sm" id="resetTier">ล้างเทียร์นี้</button>
        <button class="btn btn-ghost btn-sm" id="resetAll">ล้างทั้งสาย</button>
        <button class="btn btn-primary btn-sm" id="saveTree">บันทึกบิลด์</button>
        <button class="btn btn-ghost btn-sm" id="shareTree">คัดลอกสรุปบิลด์</button>
      </div>
    </div>`;

  document.querySelectorAll('#baseSel .base-btn').forEach(b=>b.onclick=()=>{const fp=OFFICIAL.paths.findIndex(x=>x.base===b.dataset.base);if(fp>=0){simPath=fp;simTier=0;renderTree();}});
  document.querySelectorAll('#branchSel .branch-btn').forEach(b=>b.onclick=()=>{simPath=+b.dataset.p;renderTree()});
  document.querySelectorAll('#tierTabs button').forEach(b=>b.onclick=()=>{simTier=+b.dataset.t;renderTree()});
  document.querySelectorAll('.pm').forEach(b=>b.onclick=e=>{e.stopPropagation();changeNode(+b.dataset.i,+b.dataset.d)});
  document.querySelectorAll('.ibox').forEach(b=>{b.onmouseenter=e=>showTip(e,+b.dataset.i);b.onmousemove=moveTip;b.onmouseleave=hideTip;
    b.onclick=e=>{showTip(e,+b.dataset.i);};});
  $('#resetTier').onclick=()=>{alloc[aKey(simPath,simTier)]={};renderTree()};
  $('#resetAll').onclick=()=>{for(let t=0;t<OFFICIAL.paths[simPath].tiers.length;t++)alloc[aKey(simPath,t)]={};renderTree()};
  $('#saveTree').onclick=()=>{localStorage.setItem('drlv_o',JSON.stringify({simPath,simTier,alloc}));toast('บันทึกบิลด์แล้ว ✓')};
  $('#shareTree').onclick=shareTree;
}

function changeNode(i,d){
  const p=OFFICIAL.paths[simPath], skills=tierClass(p,simTier).skills, s=skills[i];
  const layout=computeLayout(skills);
  const lv=getLv(simPath,simTier,i), mx=skillMax(s);
  if(d>0){
    if(lv>=mx)return;
    if(!prereqMet(simPath,simTier,skills,i,layout)){toast('ต้องปลดล็อกสกิลก่อนหน้าก่อน');return;}
    setLv(simPath,simTier,i,lv+1);
  }else{
    if(lv<=0)return;
    const need=lv-1;
    const blocked=skills.some((x,j)=>{const r=prereqOf(skills,x);return r&&r.idx===i&&getLv(simPath,simTier,j)>0&&need<r.lv;});
    if(blocked){toast('ลดไม่ได้: มีสกิลต่อยอดอยู่');return;}
    setLv(simPath,simTier,i,need);
  }
  renderTree();
}

let tipEl;
function showTip(e,i){
  const p=OFFICIAL.paths[simPath], skills=tierClass(p,simTier).skills, s=skills[i];
  const lv=Math.max(1,getLv(simPath,simTier,i)), mx=skillMax(s);
  if(!tipEl){tipEl=document.createElement('div');tipEl.className='tip-pop';document.body.appendChild(tipEl);}
  tipEl.style.setProperty('--cc',p.color);
  const rows=[
    ['ประเภท',s.type],
    s.atk&&s.atk!=='-'?['พลัง ATK',pickLv(s.atk,lv)]:null,
    ['SP',s.sp],
    s.mp&&s.mp!=='-'?['MP',pickLv(s.mp,lv)]:null,
    s.cool&&s.cool!=='-'?['คูลดาวน์',s.cool]:null,
    s.dur&&s.dur!=='-'?['ระยะเวลา',s.dur]:null,
    s.weapon&&s.weapon!=='-'?['อาวุธ',s.weapon]:null,
    s.reqlv&&s.reqlv!=='-'?['เลเวลที่ใช้',pickLv(s.reqlv,lv)]:null,
  ].filter(Boolean).map(([a,b])=>`<div class="row"><span>${a}</span><span>${esc(b)}</span></div>`).join('');
  const pre=(s.prereq&&s.prereq!=='-')?`<div class="pre">ต้องมี: ${esc(s.prereq)}</div>`:'';
  tipEl.innerHTML=`<h5>${esc(s.name)} <span style="color:var(--dim);font-size:.8rem">เต็ม ${mx}</span></h5><div class="ty">${esc(s.type)}</div>${rows}<div class="ds">${esc(s.desc)}</div>${pre}`;
  tipEl.classList.add('show');moveTip(e);
}
function moveTip(e){if(!tipEl)return;const w=tipEl.offsetWidth||300,h=tipEl.offsetHeight||160;let x=e.clientX+16,y=e.clientY+16;
  if(x+w>innerWidth-8)x=Math.max(8,e.clientX-w-16);if(y+h>innerHeight-8)y=Math.max(8,innerHeight-h-8);tipEl.style.left=x+'px';tipEl.style.top=y+'px';}
function hideTip(){if(tipEl)tipEl.classList.remove('show')}

function shareTree(){
  const p=OFFICIAL.paths[simPath];
  let txt=`[Dragonica Landverse] บิลด์ ${p.tiers.join(' → ')}\n`;
  p.tiers.forEach((jn,t)=>{const a=alloc[aKey(simPath,t)]||{};const sk=tierClass(p,t).skills;
    const got=Object.keys(a).filter(i=>a[i]>0);
    if(got.length){txt+=`\n— ${jn} · ${tierSP(simPath,t)} SP\n`;got.forEach(i=>txt+=`  • ${sk[i].name}: ${a[i]}/${skillMax(sk[i])}\n`);}});
  txt+=`\nรวม ${totalSP(simPath)} SP`;
  navigator.clipboard?.writeText(txt).then(()=>toast('คัดลอกสรุปบิลด์แล้ว ✓'),()=>toast('คัดลอกไม่ได้'));
}
function simToBase(base){const fp=OFFICIAL.paths.findIndex(x=>x.base===base);if(fp>=0){simPath=fp;simTier=0;renderTree();}}

/* ============================================================================
   SYSTEMS (generic block renderer)
   ========================================================================== */
function renderBlocks(blocks){
  return blocks.map(b=>{
    if(b.h)return `<div class="blk-h">${esc(b.h)}</div>`;
    if(b.p)return `<div class="blk"><p>${b.p}</p></div>`;
    if(b.list)return `<div class="blk"><ul>${b.list.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;
    if(b.steps)return `<ol class="steps">${b.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;
    if(b.table)return `<div class="tbl"><table class="dt"><thead><tr>${b.table.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if(b.hint)return `<div class="hint ${b.hint.type}">${svg(b.hint.type)}<div>${b.hint.text}</div></div>`;
    if(b.cards)return `<div class="scards">${b.cards.map(c=>`<div class="scard"><b>${esc(c.t)}</b><ul>${c.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
    if(b.faq)return `<div class="faq">${b.faq.map(f=>`<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</div>`;
    return '';
  }).join('');
}
function renderSystems(){
  $('#sysChips').innerHTML=SYSTEMS.map(s=>`<button data-id="${s.id}">${svg(s.icon)}${esc(s.title.split('(')[0].trim())}</button>`).join('');
  $('#systemsWrap').innerHTML=SYSTEMS.map(s=>`
    <div class="sys-panel" id="sys-${s.id}">
      <div class="sh"><div class="si">${svg(s.icon)}</div><h3>${esc(s.title)}</h3><span class="tg">${esc(s.tag)}</span></div>
      <p class="sintro">${s.intro}</p>${renderBlocks(s.blocks)}</div>`).join('');
  document.querySelectorAll('#sysChips button').forEach(b=>b.onclick=()=>{
    document.getElementById('sys-'+b.dataset.id)?.scrollIntoView({behavior:'smooth',block:'start'});
    document.querySelectorAll('#sysChips button').forEach(x=>x.classList.remove('on'));b.classList.add('on');});
}

/* ---------- TOAST + INIT ---------- */
let toastTimer;
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200);}

(function init(){
  try{const s=JSON.parse(localStorage.getItem('drlv_o'));if(s){simPath=s.simPath||0;simTier=s.simTier||0;alloc=s.alloc||{};}}catch(e){}
  renderTabs();renderClassPanel();renderTree();renderSystems();
  $('#menuBtn').onclick=()=>$('#navlinks').classList.toggle('open');
  document.querySelectorAll('#navlinks a').forEach(a=>a.onclick=()=>$('#navlinks').classList.remove('open'));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();
window.simToBase=simToBase;
