/* ระบบเกมทั้งหมด เรียบเรียงจาก Dragonica Landverse Whitepaper (official)
   content model: blocks = [{p}, {h}, {list}, {table:{head,rows}}, {hint:{type,text}}, {steps}] */

const SYSTEMS = [
  {
    id: "stamina", tag: "เศรษฐกิจ", icon: "battery",
    title: "สตามิน่า (Dragon Core)",
    intro: "ระบบสตามิน่าที่คุมสมดุลเศรษฐกิจในเกม ให้ไอเทมที่ฟาร์มได้คงมูลค่า และส่งเสริมการเล่นเป็นปาร์ตี้ — หักสตามิน่า <b>ทันทีที่กดเข้าดันเจี้ยน</b> (ไม่ใช่ตอนเคลียร์)",
    blocks: [
      { h: "Dragon Core มี 2 ชนิด" },
      { cards: [
        { t: "🔵 Blue Dragon Core (ฟรีรายวัน)", items: ["ได้ 840 ชิ้น/ตัวละคร/วัน", "รีเซ็ตทุก 00:00 น. (GMT+7)", "ไม่สะสมข้ามวัน • เทรด/ฝากคลัง/ขายไม่ได้", "รับจากเควสรายวันกับ NPC Donura (ทุกเมืองหลัก)"] },
        { t: "🔴 Red Dragon Core (สำรอง)", items: ["สะสมได้สูงสุด 9,999 • ไม่มีวันหมดอายุ", "ผูก ID • เทรด/ขายไม่ได้ (ฝากคลังได้)", "ได้จาก Cash Shop / Premium VIP (NPC Gato) / โค้ด-กิจกรรม"] },
      ]},
      { h: "ลำดับการหักสตามิน่า" },
      { steps: [
        "หัก Blue Dragon Core ก่อนเสมอ เท่าที่มี",
        "ถ้า Blue ไม่พอ cost ของดันเจี้ยน → หัก Red ทั้งหมดแทนทันที",
        "ถ้า Blue + Red รวมกันยังไม่พอ → เข้าดันเจี้ยนไม่ได้",
      ]},
      { hint: { type: "warning", text: "ระบบเช็กสตามิน่า <b>ทุกคนในปาร์ตี้</b> ก่อนเข้า — ถ้าใครคนหนึ่งไม่พอ ทั้งปาร์ตี้เข้าไม่ได้" }},
      { hint: { type: "danger", text: "ตัวอย่าง: ดันเจี้ยนใช้ 80 แต่มี Blue เหลือ 40 → ระบบจะไม่หัก Blue 40 ที่มี แต่ไปหัก Red 80 แทนทันที" }},
      { h: "Red Dragon Core จาก Premium VIP (รับที่ NPC Gato 00:00 น. วันละครั้ง/ไอดี)" },
      { table: { head: ["ระดับ Premium", "จำนวนที่ได้รับ"], rows: [["Gold","240 / วัน / ไอดี"],["Silver","120 / วัน / ไอดี"],["Bronze","60 / วัน / ไอดี"]] }},
      { faq: [
        { q: "Stamina ฉันไม่พอ แต่เพื่อนพอ เข้าได้ไหม?", a: "ไม่ได้ ระบบเช็กทุกคนในปาร์ตี้ ถ้าใครไม่พอทั้งปาร์ตี้เข้าไม่ได้" },
        { q: "เซิร์ฟล่ม/หลุดระหว่างดัน เสีย Stamina ไหม?", a: "เสีย เพราะหักทันทีที่กดเข้า ไม่คืนให้" },
        { q: "Pay-to-win ไหม?", a: "ไม่ใช่ Dragon Core คุมปริมาณการฟาร์ม ไม่เพิ่มพลังตัวละคร ทุกคนได้ Blue ฟรีพอเล่นปกติทุกวัน" },
      ]},
    ],
  },

  {
    id: "enchant", tag: "เสริมแกร่ง", icon: "anvil",
    title: "เสริมพลังอุปกรณ์ (Enchantment)",
    intro: "เพิ่มพลังโจมตี/ป้องกันพื้นฐานด้วยการตีบวกที่ <b>NPC Blacksmith</b> (ทุกเมืองหลัก) ตั้งแต่ +1 ถึง <b>+16</b>",
    blocks: [
      { h: "ทรัพยากรหลัก" },
      { list: ["Weapon Enchantment Powder — ตีบวกอาวุธ", "Armor Enchantment Powder — ตีบวกอุปกรณ์สวมใส่ (ใช้จำนวน = ระดับที่ต้องการเพิ่ม)"] },
      { h: "ไอเทมเพิ่มโอกาสสำเร็จ (Enchant Rune)" },
      { table: { head: ["รูน", "ใช้ช่วงตีบวก"], rows: [
        ["Regular Enchant Rune","+0 ถึง +7"],
        ["Superior Enchant Rune","+8 ถึง +11"],
        ["Special Enchant Rune","+12 ถึง +15"],
        ["Artifact Enchant Rune","+15 ขึ้นไป"],
      ]}},
      { h: "ไอเทมป้องกันของหาย" },
      { list: ["Insurance Scroll — กันของหาย/ลดระดับ ตั้งแต่เริ่มต้นถึง +15", "Reinforce Insurance Scroll — สำหรับ +16 ขึ้นไป (ปลายเกม)"] },
      { hint: { type: "danger", text: "การตีบวกมีโอกาส<b>ล้มเหลว</b> และถ้าล้มเหลวอุปกรณ์จะ<b>หายถาวร!</b> ควรใช้ Insurance Scroll ควบคู่เสมอ" }},
    ],
  },

  {
    id: "soul", tag: "เสริมแกร่ง", icon: "gem",
    title: "โซล & การยกระดับความหายาก",
    intro: "<b>โซล (Soul)</b> ได้จากการ<b>ย่อยอุปกรณ์</b> (Disassemble) ที่มีค่า Soul — ใช้ยกระดับความหายากเพื่อเพิ่มเพดานตีบวกและปลดล็อก Soul Options",
    blocks: [
      { h: "5 ระดับความหายาก & เพดานตีบวก (ที่ NPC Soulsmith)" },
      { table: { head: ["ความหายาก", "เพดานตีบวก", "Soul Force"], rows: [
        ["Regular (ขาว)","+7","0 – 30"],
        ["Advanced (เขียว)","+10","31 – 60"],
        ["Special (ฟ้า)","+15","61 – 85"],
        ["Artifact (ส้ม)","+20","86 – 98"],
        ["Legendary (ม่วง)","+30","99"],
      ]}},
      { p: "เลื่อนระดับด้วย Soul Craft Stone (Regular/Superior/Special/Artifact ตามขั้น) + Insurance Scroll กันของหาย ระดับ Legendary ปลดล็อก Soul Options สูงสุด 4 แถว" },
      { h: "สถานะถูกผนึก (Sealed) & คำสาป (Cursed)" },
      { list: [
        "อุปกรณ์ดรอปจากบอส/มอนสเตอร์อาจติดสถานะ ทำให้สวมใส่ไม่ได้ทันที",
        "Sealed: แลก Soul 3 หน่วย = Seal Remover Scroll 1 ใบ (ที่ NPC Soulsmith → Exchange Scroll) เพื่อปลดผนึก",
        "Cursed: ชำระคำสาปที่ NPC Soulsmith → Soul Craft → Remove Curse",
      ]},
      { h: "เปลี่ยนออปชั่นโซล (Soul Option)" },
      { p: "ออปชั่นโซลสุ่มได้ตั้งแต่ระดับ Advanced ขึ้นไป ปรับใหม่ด้วย <b>Craft Option Changer</b> (ใช้จำนวนตามความหายาก: เขียว 1 / ฟ้า 2 / ส้ม 3 / ม่วง 4 ชิ้น)" },
    ],
  },

  {
    id: "card", tag: "เสริมแกร่ง", icon: "cards",
    title: "ระบบการ์ดสกิล (Skill Card)",
    intro: "ปลดล็อกเลเวลสกิลให้<b>ทะลุเพดานปกติ (Lv.5)</b> ไปได้ถึง <b>Lv.10</b> — หาได้จากเควสป้าย (Quest Board) และเปิดแคปซูลจาก NPC Hunter G",
    blocks: [
      { h: "6 ระดับการ์ด" },
      { table: { head: ["การ์ด", "ปลดล็อกสกิลถึง"], rows: [
        ["Cursed Card","ขั้นเริ่มต้น"],
        ["Normal Card","Lv.6"],
        ["Advanced Card","Lv.7"],
        ["Special Card","Lv.8"],
        ["Artifact Card","Lv.9"],
        ["Legend Card","Lv.10"],
      ]}},
      { h: "การอัปเกรด/ผสมการ์ด (ที่เมือง Port of the Winds → Monster Card Blend)" },
      { p: "ผสมการ์ดชนิด+ระดับเดียวกัน 2 ใบ → ได้ระดับสูงขึ้น 1 ใบ • จะสร้าง Legend 1 ใบ (ผสมสำเร็จ 100%) ต้องใช้ Cursed Card 32 ใบ (32→16→8→4→2→1)" },
      { hint: { type: "warning", text: "ถ้าผสมล้มเหลว การ์ดวัตถุดิบจะ<b>แตกหายทันที</b> — ใช้ Card Insurance Scroll ควบคู่เสมอ" }},
    ],
  },

  {
    id: "combat", tag: "การต่อสู้", icon: "combo",
    title: "ระบบคอมโบ & การต่อสู้",
    intro: "เกมแอ็กชัน side-scrolling เน้น<b>ต่อคอมโบกลางอากาศ</b> ปรับปุ่มได้อิสระ",
    blocks: [
      { h: "ปุ่มควบคุมพื้นฐาน" },
      { list: [
        "ลูกศร = เคลื่อนที่ • X = โจมตีปกติ • C = กระโดด • Z = โจมตีพิเศษ/ชาร์จ",
        "Hotkey สกิล: Q W E R และ A S D F (ปรับ Key Mapping ได้ทั้งหมด)",
        "Dash หลบหลีก: กดทิศทางไปข้างหน้า 2 ครั้ง + กระโดด (C)",
      ]},
      { h: "กลไกคอมโบ" },
      { list: [
        "ใช้สกิลตีศัตรูให้ลอยกลางอากาศแล้วรัวต่อเนื่อง — Ranger, Jester, Harlequin ถนัดคอมโบอากาศ",
        "ผสม 'สกิลแอคชัน' ทำให้ศัตรูเกิดสถานะชะงัก เปิดช่องร้อยคอมโบได้ปลอดภัย",
      ]},
      { h: "ค่าสถานะผิดปกติ (Status)" },
      { table: { head: ["สถานะ", "ผล"], rows: [
        ["Burn","ไฟไหม้ ดาเมจต่อวินาที"],
        ["Bleed","เลือดไหล ดาเมจต่อเนื่อง"],
        ["Poison","ติดพิษ"],
        ["Freeze","แช่แข็ง/หยุดเคลื่อนไหว"],
        ["Stun","หยุดการกระทำทุกอย่าง"],
        ["Silence","ใบ้ ใช้สกิลไม่ได้"],
        ["Blind","ตาบอด ลด Aim/Evade"],
      ]}},
    ],
  },

  {
    id: "content", tag: "เนื้อหา", icon: "map",
    title: "ภารกิจ & ดันเจี้ยน",
    intro: "ทางเข้าอยู่ตามแผนที่ (สัญลักษณ์แม่กุญแจ) มี 2 แบบ: <b>Mission</b> (เนื้อเรื่องหลัก เล่นซ้ำได้) และ <b>Dungeon</b> (ด่านพิเศษ ปลดล็อกก่อน บอสแกร่ง ของหายาก)",
    blocks: [
      { h: "โหมดภารกิจ (Mission)" },
      { list: [
        "Mission Mode (F1): เลือกความยาก Easy/Normal/Hard — ใช้ 20 Dragon Core",
        "Chaos Mode (F2): ปลดเมื่อผ่าน F5 ดรอปดีกว่า — ใช้ 40 Dragon Core",
        "Hero Quest Mode (F5): เนื้อเรื่องหลัก — ไม่เสีย Dragon Core",
      ]},
      { h: "Mission List (Normal Mode • 20 Stamina)" },
      { table: { head: ["ภารกิจ","เลเวล","บอส"], rows: [
        ["Windia Plains","1-10","Vegabond"],
        ["Traitor's Ridge","5-20","Giant Axe Brother Sangka"],
        ["Canyon of Oblivion","10-25","Giant Axe Brother Kunkah"],
        ["Bearded Whale Coast","15-30","Captain Hookah Villa"],
        ["Steven Trading Port","20-35","Furious Captain Alvida"],
        ["Kalygon Fleet","20-35","Crazy Kalygon Captain"],
        ["Mirinae Sanctuary","25-40","Evil Spirit Artis"],
        ["Skypie Sanctuary","25-40","Lord of the Night"],
        ["Dangerous Caverns","30-45","Ahtoo"],
        ["Valid Raeth","35-50","Chief Rokko"],
      ]}},
      { h: "Dungeon List (ใช้ 80 Dragon Core/ครั้ง)" },
      { table: { head: ["ดันเจี้ยน","เลเวล","บอส"], rows: [
        ["Howling Wind's Hill Wolves's Den","12","Heath"],
        ["Wailing Hill Wolves's Den","19","Heath"],
        ["City Hall Culvert","19","Crazy Scientist Dr. Farrell"],
        ["Temple of Water","25","Endairon"],
        ["Underground Graveyard","30","Kajimodo"],
        ["Underground Graveyard","34","Anukus"],
        ["Specter's Tower (9 ชั้น)","36","Paris"],
        ["Magma Dungeon","40","Magma Drake Lavalon"],
      ]}},
      { hint: { type: "info", text: "Magma Dungeon ต้องมี <b>Flame Gate Key</b> อย่างน้อย 1 คนในปาร์ตี้ และจัดการ Gate Guard ก่อนเข้าบอส" }},
    ],
  },

  {
    id: "guild", tag: "สังคม", icon: "shield",
    title: "กิลด์ (Guild)",
    intro: "สร้างที่ <b>Guild Manager Dony</b> (Port of the Wind) — ตัวละคร Lv.10+ และไม่อยู่กิลด์อื่น • ค่าก่อตั้ง 20 Gold",
    blocks: [
      { h: "เลเวลกิลด์ (ทำ Guild Daily Quest สะสม Guild Exp)" },
      { table: { head: ["Guild Lv.","สมาชิกสูงสุด","Guild Exp"], rows: [
        ["1","20","0"],["2","24","650"],["3","28","7,800"],["4","32","28,600"],["5","36","76,250"],
      ]}},
      { h: "สกิลกิลด์ (หัวหน้าซื้อที่ NPC Dony)" },
      { list: [
        "Adrenaline Boost (Active): +10% Attack Speed ให้สมาชิก",
        "Morale Up (Passive): +5% ATK ให้สมาชิก",
        "Iron Wall (Passive): +10% DEF ให้สมาชิก",
      ]},
      { p: "<b>คลังกิลด์:</b> เปิดที่ NPC Dony (ครั้งแรก 10 Gold, กิลด์ Lv.2+) ใช้ฝากไอเทมและเงินร่วมกัน" },
    ],
  },

  {
    id: "social", tag: "สังคม", icon: "heart",
    title: "คู่รัก • บ้าน • สัตว์เลี้ยง",
    intro: "ระบบไลฟ์สไตล์ที่ให้บัฟจริง ไม่ใช่แค่ความสวยงาม",
    blocks: [
      { h: "คู่รัก (Couple) — จับคู่ผ่าน Community (ปุ่ม Y)" },
      { list: [
        "With the Power of Love! (Active): +10% Attack Speed คู่รัก 30 วิ",
        "Two Birds with One Shot (Passive): อยู่ใกล้คู่รัก +10% HP/MP",
      ]},
      { h: "บ้าน (MyHome) — ซื้อที่ NPC Real Estate Agent Jesse (Port of the Winds)" },
      { p: "ตกแต่งเฟอร์นิเจอร์เพื่อรับ <b>Furniture Buff</b> (ให้เจ้าของและแขก) — รับบัฟผ่าน NPC Butler Vilbort the third • มีค่าธรรมเนียมครอบครองรายสัปดาห์" },
      { h: "สัตว์เลี้ยง (Pet) — จากเควส NPC Amy หรือ Cash Shop" },
      { list: [
        "ต้องให้อาหาร (Pet Food 1/10/30 วัน) ไม่งั้นเรียกออกมาไม่ได้",
        "ให้โบนัสสเตตัส สุ่มได้สูงสุด 3 ออปชั่น/ตัว (16 แบบ × 8 ระดับ)",
        "เปลี่ยนออปชั่นด้วย Pet Option Changer",
      ]},
      { h: "ออปชั่นสัตว์เลี้ยง (ค่าระดับ 1 → 8)" },
      { table: { head: ["บัฟ","ค่า 1 → 8"], rows: [
        ["STR/INT/AGI/CON","32 / 38 / 45 / 52 / 58 / 63 / 73 / 89"],
        ["P.ATK / P.DEF","50 / 80 / 90 / 100 / 200 / 250 / 300 / 350"],
        ["Crit Power / ATK Speed","300 / 500 / 700 / 900 / 1300 / 1700 / 1900 / 2100"],
        ["Crit %","3 / 5 / 7 / 9 / 13 / 17 / 19 / 21"],
        ["Max HP","200 / 300 / 350 / 400 / 500 / 600 / 700 / 800"],
      ]}},
      { hint: { type: "info", text: "โอกาสสุ่มระดับ: ลำดับ 1–3 = 25% • 4 = 15% • 5–6 = 3% • 7–8 = 2% (ค่าสูงสุด)" }},
    ],
  },

  {
    id: "start", tag: "เริ่มเล่น", icon: "wallet",
    title: "เริ่มต้น & กระเป๋าเงิน (Web3)",
    intro: "Landverse ผูกระบบ NFT/Token — ต้องตั้งค่ากระเป๋าเงินเพื่อใช้ Marketplace และซื้อด้วยเหรียญ ION",
    blocks: [
      { h: "ขั้นตอนเริ่มต้น (สรุป)" },
      { steps: [
        "สมัคร/เข้าสู่ระบบ Maxion Account แล้วสร้าง Game Account (Game ID)",
        "ติดตั้ง MetaMask (ส่วนขยายเบราว์เซอร์) + เก็บ Secret Recovery Phrase ให้ปลอดภัย",
        "เพิ่มเครือข่าย Binance Smart Chain (BSC) ใน MetaMask",
        "ผูกกระเป๋า MetaMask กับ Maxion Account (หน้าจัดการกระเป๋าเงิน)",
        "เพิ่มเหรียญ ION ใน MetaMask / Convert จาก USDC",
        "ซื้อแพ็ก/ไอเทมด้วย ION (Approve → Confirm)",
      ]},
      { h: "ใช้โค้ดกิจกรรม" },
      { p: "คุยกับ <b>NPC Gato</b> → เลือก 'การใช้คูปอง' → กดปุ่ม Coupon → กรอกโค้ด → ยืนยัน ไอเทมเข้ากระเป๋าทันที" },
      { hint: { type: "danger", text: "ห้ามเปิดเผย Secret Recovery Phrase ให้ใครเด็ดขาด — ใครได้ไปสามารถยึดกระเป๋าและสินทรัพย์ทั้งหมด" }},
    ],
  },

  {
    id: "sysreq", tag: "ข้อมูล", icon: "monitor",
    title: "ความต้องการของระบบ",
    intro: "เกมเล่นบน Windows ใช้สเปกไม่สูง",
    blocks: [
      { table: { head: ["", "ขั้นต่ำ", "แนะนำ"], rows: [
        ["OS","Windows 10/11","Windows 10/11"],
        ["CPU","Pentium 4 2.0GHz / AMD FX","Pentium 4 2.0GHz / AMD FX"],
        ["RAM","8 GB","16 GB"],
        ["Graphics","DirectX 9, 2 GB","DirectX 9, 2 GB"],
        ["DirectX","9.0","9.0"],
        ["Network","Broadband","Broadband"],
      ]}},
    ],
  },
];
