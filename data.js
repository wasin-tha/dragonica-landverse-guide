/* ============================================================================
   Dragonica Landverse - ฐานข้อมูลคลาส / สกิล / เกมเพลย์
   เรียบเรียงจาก: drlv.maxion.gg, news.drlv.maxion.gg, Dragon Saga / Dragonica
   Wiki (Fandom), Dragonica-TH (dgn-memory), WarpPortal Forums, playdragonsaga.com
   หมายเหตุ: ค่าตัวเลข/ชื่อสกิลบางส่วนอาจต่างจาก client Landverse เล็กน้อย
   ใช้เป็นแนวทางวางบิลด์และทำความเข้าใจเกม
   ========================================================================== */

const GAME = {
  name: "Dragonica Landverse",
  publisher: "Maxion Tech (ลิขสิทธิ์ถูกต้องจาก Gravity Co., Ltd.)",
  genre: "2.5D Side-Scrolling Action MMORPG (เกมตะลุยด่านมุมมองข้าง)",
  url: "https://drlv.maxion.gg/",
  tagline: "ทำลายทุกกฎของความสนุก — เซิร์ฟเวอร์ยุคใหม่ของ Dragonica ที่ผูกระบบ NFT/Marketplace",
};

/* ---- ฟีเจอร์เด่นของเวอร์ชัน Landverse ---- */
const FEATURES = [
  {
    title: "Free NFT Marketplace",
    icon: "store",
    desc: "ตลาดซื้อขายไอเทมแบบอิสระผ่านระบบ NFT ผู้เล่นซื้อ-ขายของได้เสรี เปลี่ยนเวลาเล่นเป็นรายได้จริง ของหายากมีมูลค่าตามตลาด",
  },
  {
    title: "Dragon Core (ระบบ Stamina)",
    icon: "battery",
    desc: "ระบบสตามิน่าที่คุมเศรษฐกิจในเกม การฟาร์มไอเทมมีค่าจะกินสตามิน่า ทำให้ของยังคงมูลค่าเทียบกับความพยายามของผู้เล่น (กันบอท/ฟาร์มไม่จำกัด)",
  },
  {
    title: "PvP Tournament ตลอดปี",
    icon: "swords",
    desc: "ทัวร์นาเมนต์ PvP ระดับตำนานจัดต่อเนื่องทั้งปี เวทีพิสูจน์ฝีมือของผู้เล่นสายแข่งขัน",
  },
  {
    title: "Exclusive Costume",
    icon: "shirt",
    desc: "ชุดแฟชั่น/คอสตูมพิเศษที่มีเฉพาะเซิร์ฟเวอร์นี้ ใช้แต่งตัวและโชว์เอกลักษณ์",
  },
  {
    title: "Pre-Registration Rewards",
    icon: "gift",
    desc: "ปลดล็อกไอเทมฟรีตามจำนวนผู้ลงทะเบียน (หลัก 20k / 40k / 60k / 80k คน) ยิ่งคนเยอะยิ่งได้ของ",
  },
  {
    title: "CBT Carry-Forward",
    icon: "forward",
    desc: "กิจกรรมช่วง Closed Beta (CBT) มีรางวัลพิเศษหลายอย่าง และของบางส่วนยกยอดไปเล่นตอนเปิดจริงได้",
  },
];

/* ---- ค่าสเตตัสพื้นฐาน (4 stat หลักของ Dragonica) ---- */
const STATS = [
  { key: "STR", name: "STR (พลัง)", desc: "เพิ่มพลังโจมตีกายภาพ (Physical ATK) — สายตีระยะประชิด Warrior/Thief เน้นตัวนี้" },
  { key: "INT", name: "INT (เวท)", desc: "เพิ่มพลังโจมตีเวทมนตร์ (Magic ATK) และ MP — สาย Magician เน้นตัวนี้" },
  { key: "AGI", name: "AGI (ความคล่อง)", desc: "เพิ่มโอกาสคริติคอล, ความเร็วโจมตี และการหลบ — สาย Archer/Thief นิยม" },
  { key: "VIT", name: "VIT (พลังกาย)", desc: "เพิ่ม HP และพลังป้องกัน — สายถึก/แทงค์อย่าง Knight เน้นตัวนี้" },
];

/* ---- เกร็ดเริ่มเล่น ---- */
const TIPS = [
  { t: "เลื่อนอาชีพครั้งแรกที่ Lv.20", d: "ถึงเลเวล 20 จะรับเควสเปลี่ยนอาชีพ (Job Advancement) ได้ เลือกสายให้ตรงสไตล์การเล่น เพราะสายมีผลกับอาวุธและสกิล" },
  { t: "เลื่อนอาชีพ 2 ที่ Lv.40, อาชีพ 3 ที่ Lv.60", d: "ทุก ๆ ช่วงจะปลดล็อกสกิลทรงพลังเพิ่ม วางแผนสาย (Tree) ตั้งแต่ต้นจะคุ้มที่สุด" },
  { t: "คอมโบคือหัวใจ", d: "Dragonica เป็นเกมตะลุยด่านเน้นต่อคอมโบลอยศัตรู (Juggle) ฝึกต่อสกิลให้ศัตรูลอยค้างเพื่อรัวดาเมจ" },
  { t: "ใช้ Skill Reset วางบิลด์ใหม่ได้", d: "ก่อนเลื่อนอาชีพถัดไปสามารถรีเซ็ตสกิลเพื่อจัดบิลด์ใหม่ (เช่นเก็บ Storm Blade ไว้ Lv.1 ตอนเป็น Paladin)" },
  { t: "เลือกอาวุธตามสาย", d: "เช่น Knight = ดาบมือเดียว+โล่ (ถึก), Gladiator = ดาบสองมือ (แรง), Ranger = หน้าไม้, Hunter = ธนู" },
  { t: "ระวัง Stamina (Dragon Core)", d: "การฟาร์มของมีค่าจะกินสตามิน่า วางแผนเวลาเล่นและเลือกฟาร์มสิ่งที่คุ้มที่สุดต่อสตามิน่า" },
];

/* ============================================================================
   CLASSES — สายอาชีพเต็ม + สกิลเด่น/แนวทางบิลด์
   job tree: tier1(Lv1) → tier2(Lv20) → tier3(Lv40) → tier4(Lv60)
   skills: ใช้ในตัว Simulator (max = เลเวลสูงสุดของสกิล, rec = เลเวลแนะนำ PVE)
   ========================================================================== */

const CLASSES = {
  warrior: {
    id: "warrior",
    name: "Warrior",
    nameTh: "นักรบ",
    color: "#ef4444",
    icon: "sword",
    weapon: "ดาบ / ขวาน (มือเดียว & สองมือ)",
    role: "ตะลุยประชิด ตีแรง ทนทาน",
    tagline: "ไล่ล่าพลังดิบ บุกประชิดทุบศัตรูด้วยกำลังล้วน",
    desc: "อาชีพสายประชิดพื้นฐานที่แข็งแกร่งและเล่นง่ายที่สุด เหมาะกับมือใหม่ แตกเป็น 2 สายใหญ่: Knight (โล่/ถึก/แทงค์) และ Gladiator (ดาบสองมือ/ดาเมจสูง)",
    tree: [
      { tier: 1, lv: 1, jobs: [{ name: "Warrior", note: "อาชีพเริ่มต้น" }] },
      { tier: 2, lv: 20, jobs: [
        { name: "Knight", note: "ดาบมือเดียว + โล่ • HP สูงสุด • แทงค์/กันทีม" },
        { name: "Gladiator", note: "ดาบสองมือ • ดาเมจสูง • รัวคอมโบ DOWN+X" },
      ]},
      { tier: 3, lv: 40, jobs: [
        { name: "Paladin", note: "สาย Knight • ออร่าบัฟทีม + ป้องกัน" },
        { name: "Myrmidon", note: "สาย Gladiator • DPS ประชิดดุดัน" },
      ]},
      { tier: 4, lv: 60, jobs: [
        { name: "Dragoon", note: "สาย Paladin • DPS โล่ คอมโบ Cross Cut" },
        { name: "Destroyer", note: "สาย Myrmidon • ทำลายล้างสูงสุด" },
      ]},
    ],
    builds: [
      {
        path: "Gladiator → Myrmidon → Destroyer (สาย DPS ดาบสองมือ)",
        summary: "สายทำดาเมจสูง รัวคอมโบลอยศัตรู เป็นสายยอดนิยมสำหรับเคลียร์ด่าน/บอส",
        skills: [
          { name: "Sword Mastery", max: 5, rec: 5, desc: "เพิ่มพลังโจมตีดาบพื้นฐาน ต้องเก็บก่อนต่อสาย" },
          { name: "Advanced Sword Mastery", max: 5, rec: 5, desc: "บัฟโจมตี 5%→21% เพิ่มดาเมจทุกสกิล — must max" },
          { name: "Grizzly", max: 5, rec: 5, desc: "บัฟตัวเอง +STR และ %ATK นาน 15 นาที (ใช้ MP 200) — must max ทุกเลเวล" },
          { name: "Wyvern Blade", max: 4, rec: 4, desc: "สกิลดาเมจดีที่สุดของสาย Lv.4 ตีโดนศัตรูที่ล้มกับพื้นได้ — must max" },
          { name: "Storm Blade", max: 5, rec: 1, desc: "พายุหมุนตีศัตรูกลางอากาศ 6 ตัว (เก็บ Lv.1 พอตอนเป็นสายบน)" },
          { name: "Crescent Moon", max: 5, rec: 3, desc: "ฟันวงกว้าง เคลียร์มอบเป็นกลุ่ม" },
          { name: "Tornado Swing", max: 5, rec: 5, desc: "เหวี่ยงหมุนรัว AoE ดาเมจต่อเนื่อง" },
          { name: "Soaring Wave (Myrmidon)", max: 3, rec: 3, desc: "คลื่นดาบพุ่ง ระยะไกล เปิดคอมโบ" },
          { name: "Destroyer Blow (Destroyer)", max: 3, rec: 3, desc: "ทุบสุดพลัง ดาเมจระเบิดเดี่ยวสูงมาก" },
        ],
      },
      {
        path: "Knight → Paladin → Dragoon (สายโล่ ถึก/บัฟทีม)",
        summary: "สายอึด เอาตัวรอดสูง บล็อกเก่ง มีออร่าบัฟทีม เหมาะปาร์ตี้/มือใหม่ที่อยากตายยาก",
        skills: [
          { name: "Shield Mastery", max: 9, rec: 9, desc: "เพิ่มอัตราบล็อกและป้องกันถาวร — หัวใจสายโล่" },
          { name: "Dodge", max: 9, rec: 9, desc: "เพิ่มอัตราบล็อกชั่วคราว 30 วิ คู่กับ Shield Mastery" },
          { name: "Sword Mastery", max: 5, rec: 5, desc: "เพิ่มพลังโจมตีดาบพื้นฐาน" },
          { name: "Storm Blade", max: 5, rec: 5, desc: "พายุหมุน AoE — สายโล่เก็บแม็กซ์เป็นดาเมจหลัก" },
          { name: "Provoke", max: 3, rec: 3, desc: "ยั่วยุดึงอันตรายจากศัตรู (ทำหน้าที่แทงค์)" },
          { name: "Aura (Paladin)", max: 5, rec: 5, desc: "ออร่าบัฟทีม (ATK/DEF) จุดเด่นของ Paladin" },
          { name: "Cross Cut (Dragoon)", max: 5, rec: 5, desc: "ฟันกากบาท DPS สูง คูลดาวน์ต่ำ (คู่ Time Reverse)" },
        ],
      },
    ],
  },

  magician: {
    id: "magician",
    name: "Magician",
    nameTh: "จอมเวท",
    color: "#a855f7",
    icon: "wand",
    weapon: "คทา / ตำรา (Staff)",
    role: "เวทระยะไกล AoE / สายซัพพอร์ตฮีล",
    tagline: "ร่ายเวทกวาดล้างเป็นวงกว้าง หรือเป็นเสาหลักประคองทีม",
    desc: "อาชีพเวทมนตร์ ตัวบอบบางแต่ดาเมจเวทกระจายกว้าง แตกเป็น Battlemage (สายตีเวท AoE) และ Acolyte (สายซัพพอร์ต/ฮีล/รีเซอร์เรกต์)",
    tree: [
      { tier: 1, lv: 1, jobs: [{ name: "Magician", note: "อาชีพเริ่มต้น" }] },
      { tier: 2, lv: 20, jobs: [
        { name: "Battlemage", note: "เวทโจมตี AoE กว้าง ดาเมจสูง" },
        { name: "Acolyte", note: "ซัพพอร์ต ฮีล บัฟ ดีบัฟ ชุบ" },
      ]},
      { tier: 3, lv: 40, jobs: [
        { name: "Warmage", note: "สาย Battlemage • เวททำลายล้างเต็มรูปแบบ" },
        { name: "Oracle", note: "สาย Acolyte • ซัพพอร์ตระดับสูง" },
      ]},
      { tier: 4, lv: 60, jobs: [
        { name: "Arcanist", note: "สาย Warmage • จอมเวทขั้นสูงสุด" },
        { name: "Cleric", note: "สาย Oracle • นักบุญผู้ประคองทีม" },
      ]},
    ],
    builds: [
      {
        path: "Battlemage → Warmage → Arcanist (สายเวทตี AoE)",
        summary: "เวทกวาดล้างเป็นกลุ่ม ดาเมจมหาศาล เหมาะเคลียร์ด่านเร็ว แต่ต้องระวังตัวบอบบาง",
        skills: [
          { name: "Magic Missile", max: 5, rec: 3, desc: "เวทพื้นฐานยิงเร็ว เก็บ Lv.3+ ใช้เปิด/ต่อคอมโบ" },
          { name: "Fire Emblem", max: 5, rec: 5, desc: "ตราเวทไฟวาง AoE ดาเมจต่อเนื่อง — must max" },
          { name: "Energy Condensation", max: 5, rec: 5, desc: "บัฟ/อัดพลังเวท เพิ่มดาเมจ — must max" },
          { name: "Ice Spear", max: 5, rec: 5, desc: "หอกน้ำแข็งแทงทะลุ ดาเมจเดี่ยว/แช่แข็ง" },
          { name: "Thunderbolt", max: 5, rec: 5, desc: "สายฟ้าฟาดวงกว้าง ดาเมจไฟฟ้า" },
          { name: "Meteor (Warmage)", max: 3, rec: 3, desc: "อุกกาบาตถล่ม AoE ดาเมจสูงสุด" },
          { name: "Blizzard", max: 3, rec: 3, desc: "พายุน้ำแข็งคุมพื้นที่ ลดความเร็วศัตรู" },
        ],
      },
      {
        path: "Acolyte → Oracle → Cleric (สายซัพพอร์ต/ฮีล)",
        summary: "เสาหลักประคองทีม ฮีล บัฟ ชุบเพื่อน ดาเมจน้อยแต่ขาดไม่ได้ในปาร์ตี้/บอสยาก",
        skills: [
          { name: "Heal", max: 5, rec: 5, desc: "ฟื้น HP ให้ตัวเอง/ทีม — หัวใจของสาย" },
          { name: "Resurrection", max: 3, rec: 3, desc: "ชุบเพื่อนที่ตายให้ฟื้น" },
          { name: "Holy Shield", max: 5, rec: 5, desc: "เกราะศักดิ์สิทธิ์ลดดาเมจให้ทีม" },
          { name: "Bless (ATK/DEF Buff)", max: 5, rec: 5, desc: "บัฟพลังโจมตี/ป้องกันให้ทั้งทีม" },
          { name: "Debuff/Curse", max: 5, rec: 3, desc: "สาปลดพลังศัตรู เปิดทางทีมตี" },
          { name: "Magic Missile", max: 5, rec: 2, desc: "ดาเมจเอาตัวรอดเล็กน้อยตอนเล่นคนเดียว" },
        ],
      },
    ],
  },

  archer: {
    id: "archer",
    name: "Archer",
    nameTh: "นักธนู",
    color: "#22c55e",
    icon: "target",
    weapon: "ธนู (Bow) / หน้าไม้ (Crossbow)",
    role: "ดาเมจระยะไกล คริติคอลสูง",
    tagline: "ยิงแม่นจากระยะปลอดภัย ดาเมจต่อเนื่องและคริติคอลโหด",
    desc: "อาชีพยิงระยะไกล เน้น AGI/คริติคอล ปลอดภัยจากการประชิด แตกเป็น Hunter (ธนู เน้นกับดัก/ดีบัฟ) และ Ranger (หน้าไม้ เน้น DPS เดี่ยวสูง)",
    tree: [
      { tier: 1, lv: 1, jobs: [{ name: "Archer", note: "อาชีพเริ่มต้น" }] },
      { tier: 2, lv: 20, jobs: [
        { name: "Hunter", note: "ใช้ธนู • กับดัก/ดีบัฟ/AoE" },
        { name: "Ranger", note: "ใช้หน้าไม้ • DPS เดี่ยวพุ่งสูง" },
      ]},
      { tier: 3, lv: 40, jobs: [
        { name: "Trapper", note: "สาย Hunter • วางกับดักคุมพื้นที่" },
        { name: "Sniper / Ballista", note: "สาย Ranger • ยิงเจาะดาเมจมหาศาล" },
      ]},
      { tier: 4, lv: 60, jobs: [
        { name: "Awakening (Archer)", note: "ปลดล็อกสกิลขั้นสูงสุดของสาย" },
      ]},
    ],
    builds: [
      {
        path: "Hunter → Trapper (สายธนู กับดัก/AoE)",
        summary: "เน้นวางกับดักและสกิล AoE คุมฝูงมอบ เคลียร์ด่านดี ดีบัฟศัตรู",
        skills: [
          { name: "Bow Mastery", max: 5, rec: 5, desc: "เพิ่มดาเมจและระยะของธนู" },
          { name: "Advanced Bow Mastery", max: 5, rec: 5, desc: "บัฟดาเมจธนูขั้นสูง — must max" },
          { name: "Arrow Shower", max: 5, rec: 5, desc: "ฝนลูกธนูถล่ม AoE เคลียร์ฝูง — สกิลหลัก" },
          { name: "Acid Arrow", max: 5, rec: 5, desc: "ลูกธนูกรด ดีบัฟลดป้องกันศัตรู" },
          { name: "Wolf Rush", max: 3, rec: 3, desc: "เรียกหมาป่าพุ่งชน เปิดคอมโบ" },
          { name: "Bleed/Bleed", max: 3, rec: 2, desc: "ทำเลือดไหล ดาเมจต่อเนื่อง (DoT)" },
          { name: "Trap (Trapper)", max: 5, rec: 5, desc: "วางกับดักระเบิด/ตรึงศัตรู คุมพื้นที่" },
        ],
      },
      {
        path: "Ranger → Sniper/Ballista (สายหน้าไม้ DPS เดี่ยว)",
        summary: "ดาเมจเดี่ยวสูงสุดของสายธนู เน้นยิงเจาะบอส คริติคอลโหด",
        skills: [
          { name: "Crossbow Mastery", max: 5, rec: 5, desc: "เพิ่มดาเมจและระยะของหน้าไม้" },
          { name: "Critical Break", max: 5, rec: 5, desc: "เมื่อคริติคอล เพิ่มดาเมจคริติคอล +20%" },
          { name: "Headshot", max: 5, rec: 5, desc: "ยิงหัว +10% ดาเมจเมื่อคริติคอล" },
          { name: "Pinpoint Shot", max: 3, rec: 3, desc: "สกิล DPS ตัวเอก ดาเมจสูง คูลดาวน์นาน" },
          { name: "Piercing Shot", max: 5, rec: 5, desc: "ยิงทะลุแถว ดาเมจหลายเป้า" },
          { name: "Rapid Shot", max: 5, rec: 4, desc: "รัวยิงเร็ว ดาเมจต่อเนื่อง" },
        ],
      },
    ],
  },

  thief: {
    id: "thief",
    name: "Thief",
    nameTh: "นักล้วง",
    color: "#eab308",
    icon: "dagger",
    weapon: "กรงเล็บ (Claw) / กะตาร์ (Katar)",
    role: "ประชิดเร็ว คอมโบลอยอากาศ",
    tagline: "ลอบเร็ว รัวคอมโบไม่ให้ศัตรูแตะพื้น เจ้าแห่งการต่อสู้กลางอากาศ",
    desc: "อาชีพประชิดความเร็วสูง เน้นคอมโบลอยศัตรู (Air Combo) แตกเป็น Jester (กรงเล็บ เน้นลอยอากาศ/บูมเมอแรง) และ Assassin (กะตาร์ ลอบเร้น ดาเมจรัวเร็ว)",
    tree: [
      { tier: 1, lv: 1, jobs: [{ name: "Thief", note: "อาชีพเริ่มต้น" }] },
      { tier: 2, lv: 20, jobs: [
        { name: "Jester", note: "ใช้กรงเล็บ • คอมโบลอยอากาศ/บูมเมอแรง" },
        { name: "Assassin", note: "ใช้กะตาร์ • ลอบเร้น รัวดาเมจเร็ว" },
      ]},
      { tier: 3, lv: 40, jobs: [
        { name: "Harlequin", note: "สาย Jester • เจ้าแห่งคอมโบกลางอากาศ" },
        { name: "Ninja", note: "สาย Assassin • นินจาดาเมจรัวสูง" },
      ]},
      { tier: 4, lv: 60, jobs: [
        { name: "Awakening (Thief)", note: "ปลดล็อกสกิลขั้นสูงสุดของสาย" },
      ]},
    ],
    builds: [
      {
        path: "Jester → Harlequin (สายกรงเล็บ คอมโบอากาศ)",
        summary: "เจ้าแห่งการลอยศัตรู รัวคอมโบกลางอากาศไม่ให้ตกพื้น สนุกและดาเมจดีในมือคนชำนาญ",
        skills: [
          { name: "Claw Mastery", max: 5, rec: 5, desc: "เพิ่มพลังโจมตีกรงเล็บ (Lv.5 +125 attached attack)" },
          { name: "Break Dance", max: 5, rec: 5, desc: "หมุนเตะรัว AoE เปิด/ต่อคอมโบ — สกิลหลัก" },
          { name: "Boomerang", max: 5, rec: 4, desc: "ขว้างบูมเมอแรงตีระยะไกล ดึงศัตรู" },
          { name: "Uppercut / Launcher", max: 5, rec: 5, desc: "ดีดศัตรูลอยขึ้น เปิดคอมโบอากาศ" },
          { name: "Aerial Combo", max: 5, rec: 5, desc: "ชุดต่อกลางอากาศ รัวดาเมจต่อเนื่อง" },
          { name: "Somersault (Harlequin)", max: 3, rec: 3, desc: "ตีลังกาฟาด ดาเมจสูง ปิดคอมโบ" },
        ],
      },
      {
        path: "Assassin → Ninja (สายกะตาร์ ลอบเร้น DPS)",
        summary: "ดาเมจรัวเร็วต่อเนื่อง เข้า-ออกไว เหมาะสายบุกเดี่ยวเก็บเป้าหมายเร็ว",
        skills: [
          { name: "Katar Mastery", max: 5, rec: 5, desc: "เพิ่มพลังโจมตีกะตาร์และความเร็ว" },
          { name: "Stealth", max: 3, rec: 1, desc: "ล่องหนเข้าประชิด เปิดดาเมจหลัง" },
          { name: "Quick Slash", max: 5, rec: 5, desc: "ฟันรัวเร็ว ดาเมจต่อเนื่องสูง — สกิลหลัก" },
          { name: "Assassinate", max: 5, rec: 5, desc: "ลอบสังหารดาเมจเดี่ยวสูง" },
          { name: "Shadow Clone (Ninja)", max: 3, rec: 3, desc: "ร่างเงาช่วยรุมตี เพิ่ม DPS" },
          { name: "Shuriken", max: 5, rec: 4, desc: "ปาดาวกระจายระยะไกล" },
        ],
      },
    ],
  },
};

/* ============================================================================
   NEWS — ข่าวสาร/ประกาศสำคัญจาก news.drlv.maxion.gg (เรียบเรียงละเอียด)
   ========================================================================== */
const NEWS = [
  {
    tag: "Pre-Sale",
    date: "25 มิ.ย. 2026",
    title: "Pre-Sale Packs — แพ็คไอเทม Limited ก่อนเปิดเกม",
    img: "assets/news/presale.png",
    url: "https://news.drlv.maxion.gg/drlv-presale-packs/",
    intro: "แพ็คเกจสุดลิมิเต็ดเปิดขายก่อนใครบนทวีป El Grego ขายช่วง <b>28 มิ.ย. 13:00 น. – 16 ก.ค. 2026 23:59 น.</b> (GMT+7) จ่ายด้วยสกุล <b>ION</b> หลายแพ็คแปลงเป็น NFT ได้",
    blocks: [
      { h: "Costume Premium Pack — 150 ION", p: "ชุดคอสตูม 6 ชิ้น + Silver Point 20,000 + ตำแหน่ง (Title) พิเศษ • จำนวนจำกัด เทรดไม่ได้ แต่แปลงเป็น NFT ได้" },
      { h: "Wing Costume Random Pack — 30/60/120 ION", p: "กล่องสุ่มปีก 25/50/100 กล่อง สุ่มได้ปีก 1–3 แบบ • เทรดไม่ได้ แต่แปลงเป็น NFT ได้" },
      { h: "Insurance Pack — 75 ION", p: "ใบกันของแตก 180 ใบ + ใบกันแตกขั้นสูง 20 ใบ + ใบเปลี่ยนออปชั่น 30 ใบ + หินพลังศิลป์ • เทรดได้" },
      { h: "Adventure Pack (Starter) — 25 ION", p: "ระบบสมาชิก 30 วัน + โพชั่นเพิ่ม EXP + การ์ดขยายช่องคลัง • บางไอเทมเทรดได้ เหมาะมือใหม่คุ้มสุด" },
    ],
  },
  {
    tag: "ระบบหลัก",
    date: "23 มิ.ย. 2026",
    title: "เจาะลึก Dragon Core — ระบบสตามิน่า",
    img: "assets/news/stamina.png",
    url: "https://news.drlv.maxion.gg/dragoncore-stamina-system/",
    intro: "หัวใจระบบเศรษฐกิจของ Landverse: การลุยดันเจี้ยนกินสตามิน่า (Dragon Core) เพื่อให้ไอเทมที่ฟาร์มได้คงมูลค่า และส่งเสริมการเล่นเป็นปาร์ตี้ มี <b>2 ชนิด</b>",
    blocks: [
      { h: "🔵 Blue Dragon Core (ฟรีรายวัน)", p: "ได้ 840 หน่วย/ตัวละคร/วัน • รีเซ็ตทุก 00:00 น. (GMT+7) • ไม่สะสมข้ามวัน เทรดไม่ได้ • รับจาก NPC Donura ทุกเมือง" },
      { h: "🔴 Red Dragon Core (สำรอง)", p: "สะสมได้ไม่จำกัด (กองละ 9,999) • ไม่หมดอายุ ผูก ID เทรดไม่ได้ • ได้จาก Cash Shop, VIP Premium (NPC Gato), โค้ด/กิจกรรม" },
      { h: "ลำดับการหัก", p: "เข้าดันเจี้ยนปุ๊บหักทันที: หัก Blue ก่อน → ไม่พอหัก Red → ไม่พอทั้งคู่เข้าไม่ได้ • ระบบเช็กสตามิน่า <b>ทุกคนในปาร์ตี้</b> ใครไม่พอทั้งปาร์ตี้เข้าไม่ได้" },
      { h: "ค่าสตามิน่าต่อด่าน (หักตอนเข้า)", p: "วางแผนฟาร์มให้คุ้มต่อสตามิน่า", unit: "สตามิน่า", list: [
        { k: "Story Quest (F5)", v: "0" },
        { k: "Mission (F1–F3)", v: "20" },
        { k: "Chaos Area (F1–F3)", v: "40" },
        { k: "Dungeon", v: "80" },
        { k: "Defense (F6)", v: "100" },
      ]},
    ],
  },
  {
    tag: "CBT Event",
    date: "24 มิ.ย. 2026",
    title: "รวมกิจกรรมช่วง CBT (5 กิจกรรม)",
    img: "assets/news/cbt.png",
    url: "https://news.drlv.maxion.gg/dragonica-landverse-all-cbt-event/",
    intro: "ช่วงทดสอบ CBT <b>26 มิ.ย. 17:00 น. – 2 ก.ค. 2026 23:59 น.</b> มี 5 กิจกรรม ของรางวัลส่งให้ตอนเปิด OBT ผ่านจดหมาย (ทุกชิ้นผูกตัวละคร เทรดไม่ได้)",
    blocks: [
      { h: "1) CBT Level Up Mission", p: "ดันเลเวลรับของ: Lv.20 (สมุนไพร EXP/อาหาร/ประกัน), Lv.30 (ทองพรีเมียม/กาชา), Lv.45 (รูน/หินแกะ)" },
      { h: "2) CBT Dungeon Hunting", p: "ซื้อ Bounty Hunters Scroll (1 Gold) ลุยเก็บ CBT Medal 50 ชิ้น (ตัวเดียว ไม่นับคลังรวม) แลกชุดคอสตูม Origin (แหวน/ตุ้มหู/กำไล/สร้อย/เข็มขัด) 30 วัน" },
      { h: "3) Marketplace Event", p: "ทดลองตลาด NFT: ผูก Maxion ID กับ Metamask → ตั้งขาย 1 ชิ้น → ซื้อ 1 ชิ้น → Redeem เข้า Inventory รับสมุนไพร/ประกัน/อาหาร" },
      { h: "4) Bug Hunter: Cleaning El Grego", p: "แจ้งบัคผ่านฟอร์ม Google สะสมแต้ม (ทบยอด): 1 แต้ม/3 แต้ม/5 แต้ม รับเซ็ตไอเทมฟรีตอนเปิดจริง" },
      { h: "5) Guild Member Level Up", p: "กิลด์ต้องมีสมาชิก Lv.45+ รวม ≥ 18 คน รับรางวัลทั้งกิลด์ (สมุนไพร EXP/ผงเสริมอาวุธ-เกราะ ฯลฯ)" },
    ],
  },
];

/* ---- ไอคอนอาชีพจริง (job-change icons จากในเกม) ---- */
const CLASS_ICON_DIR = "assets/classicons/";
// แมปชื่ออาชีพ -> ไฟล์ไอคอน (อาชีพที่ไม่มีไอคอนจะ fallback เป็นสายก่อนหน้า)
const JOB_ICON = {
  warrior:"warrior.gif", knight:"knight.gif", gladiator:"gladiator.gif",
  paladin:"paladin.gif", myrmidon:"myrmidon.gif", dragoon:"paladin.gif",
  destroyer:"myrmidon.gif", overlord:"myrmidon.gif",
  magician:"magician.gif", mage:"magician.gif", acolyte:"acolyte.gif", monk:"acolyte.gif",
  battlemage:"battlemage.gif", wizard:"battlemage.gif", oracle:"oracle.gif", priest:"oracle.gif",
  warmage:"warmage.gif", warlock:"warmage.gif", cleric:"oracle.gif", invoker:"oracle.gif",
  arcanist:"warmage.gif", sorcerer:"warmage.gif",
  archer:"archer.gif", hunter:"hunter.gif", ranger:"ranger.gif", marksman:"ranger.gif",
  trapper:"trapper.gif", pathfinder:"trapper.gif", sniper:"ballista.gif", specialist:"ballista.gif",
  ballista:"ballista.gif", sentinel:"trapper.gif",
  thief:"thief.gif", jester:"jester.gif", clown:"jester.gif", assassin:"assassin.gif",
  infiltrator:"assassin.gif", harlequin:"harlequin.gif", dancer:"harlequin.gif",
  ninja:"ninja.gif", savage:"harlequin.gif", bandit:"jester.gif", rogue:"harlequin.gif",
};
function jobIcon(name){
  if(!name) return null;
  const k = String(name).toLowerCase().replace(/[^a-z ].*$/,'').trim().split(/\s+/)[0];
  return JOB_ICON[k] ? CLASS_ICON_DIR+JOB_ICON[k] : null;
}
// ไอคอนตามสาย/เทียร์ของ Skill Tree Simulator (ดัชนีตาม SKILLS)
const LINE_ICONS = [
  ["warrior","knight","paladin","paladin"],
  ["warrior","gladiator","myrmidon","myrmidon"],
  ["magician","acolyte","oracle","oracle"],
  ["magician","battlemage","warmage","warmage"],
  ["archer","hunter","trapper","trapper"],
  ["archer","ranger","ballista","ballista"],
  ["thief","jester","harlequin","harlequin"],
  ["thief","assassin","ninja","ninja"],
];
function lineIcon(li,ti){const a=LINE_ICONS[li]||[];return CLASS_ICON_DIR+(a[ti]||a[0]||"warrior")+".gif"}
// ไอคอนตัวแทน 4 อาชีพหลัก (ใช้ในการ์ด/ปุ่ม)
const CLASS_EMBLEM = {
  warrior:  CLASS_ICON_DIR+"warrior.gif",
  magician: CLASS_ICON_DIR+"magician.gif",
  archer:   CLASS_ICON_DIR+"archer.gif",
  thief:    CLASS_ICON_DIR+"thief.gif",
};

/* ---- แหล่งข้อมูลอ้างอิง ---- */
const SOURCES = [
  { t: "Dragonica Landverse (เว็บหลัก)", u: "https://drlv.maxion.gg/" },
  { t: "Dragonica Landverse News / Patch Notes", u: "https://news.drlv.maxion.gg/" },
  { t: "Dragon Saga Wiki (Fandom)", u: "https://dragonsaga.fandom.com/wiki/Classes" },
  { t: "Dragonica Wiki (Fandom)", u: "https://dragonica.fandom.com/wiki/Class" },
  { t: "Dragonica-TH Skill Build (PVE)", u: "https://dgn-memory.wixsite.com/dgn-th/skill-build-pve" },
  { t: "Dragon Saga Skill Simulator (irowiki)", u: "https://irowiki.org/~himeyasha/dssim2/" },
  { t: "WarpPortal Community Forums", u: "https://forums.warpportal.com/" },
  { t: "playdragonsaga.com Game Guide", u: "https://www.playdragonsaga.com/gameguide/" },
];
