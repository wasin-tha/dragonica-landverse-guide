// แกะ Skill.js (Dragon Saga/Dragonica skill data) -> skills.json + รายการไอคอน
const fs = require('fs');
const code = fs.readFileSync('Skill.js', 'utf8');

const collector = `;
  var job = [];
  job[0]=[fighter,knight,paradin,dragoon];
  job[1]=[fighter,gladiator,marcenary,overlord];
  job[2]=[mage,acolyte,priest,invoker];
  job[3]=[mage,wizard,archmage,sorcerer];
  job[4]=[archer,hunter,trapper,sentinel];
  job[5]=[archer,ranger,sniper,destroyer];
  job[6]=[thief,clown,dancer,savage];
  job[7]=[thief,infiltrator,assassin,ninja];
  return {job:job, start_pts:start_pts};
`;
const fn = new Function(code + collector);
const { job, start_pts } = fn();

// ชื่อสายอาชีพ (display) + ป้ายกำกับเทียร์ตามที่ Landverse/Dragonica ใช้
const PATHS = [
  { base:'warrior',  color:'#ef4444', line:'Warrior → Knight → Paladin → Dragoon' },
  { base:'warrior',  color:'#ef4444', line:'Warrior → Gladiator → Myrmidon → Overlord' },
  { base:'magician', color:'#a855f7', line:'Magician → Acolyte → Oracle → Cleric' },
  { base:'magician', color:'#a855f7', line:'Magician → Battlemage → Warmage → Arcanist' },
  { base:'archer',   color:'#22c55e', line:'Archer → Hunter → Trapper → Sentinel' },
  { base:'archer',   color:'#22c55e', line:'Archer → Ranger → Sniper → Destroyer' },
  { base:'thief',    color:'#eab308', line:'Thief → Jester → Harlequin → Savage' },
  { base:'thief',    color:'#eab308', line:'Thief → Assassin → Ninja → Shadow' },
];
const TIER_LV = [1, 20, 40, 60];

function clean(html){
  // ดึงชื่อสกิลจาก <a ...>NAME</a> หรือข้อความล้วน
  const m = html.match(/>([^<]+)<\/a>/);
  return (m ? m[1] : html).trim();
}
function iconFile(url){ return url.replace(/^\.?\//,'').replace(/^img\//,''); } // เก็บ path ใต้ img/

const icons = new Set();
const out = job.map((line, li) => {
  const tiers = line.map((cls, ti) => {
    const skills = (cls.skill || []).map((sk, si) => {
      icons.add(iconFile(sk.imageURL));
      const params = (sk.parameter || []).map(p => ({
        level: p.level, sp: p.sp, mp: p.mp ?? null, power: p.power ?? null,
        cool: p.cooltime ?? null, cast: p.casttime ?? null, dur: p.duration ?? null,
        desc: p.description || ''
      }));
      return {
        id: si,
        name: clean(sk.name),
        type: sk.type,                 // active / passive / toggle / buff
        max: parseInt(sk.maxlevel, 10) || 1,
        pos: sk.pos,                   // [col,row]
        parent: (sk.parent || []).map(pr => ({ id: pr.id, lv: pr.lv })),
        icon: 'icons/' + iconFile(sk.imageURL),
        levels: params
      };
    });
    return { tier: ti, lv: TIER_LV[ti], job: cls.name, skills };
  });
  return {
    id: li,
    base: PATHS[li].base,
    color: PATHS[li].color,
    line: PATHS[li].line,
    startSP: start_pts[line[0].name] ?? 10,
    tiers
  };
});

fs.writeFileSync('skills.json', JSON.stringify(out));
fs.writeFileSync('icons-list.txt', [...icons].join('\n'));
console.log('paths:', out.length, '| icons:', icons.size);
console.log('sample job names:', out.map(o=>o.tiers.map(t=>t.job).join('>')).join('\n  '));
