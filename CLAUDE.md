# Dragonica Landverse Guide

เว็บคู่มือเล่นเกม **Dragonica Landverse** (drlv.maxion.gg) ภาษาไทย — static site (HTML/CSS/JS ล้วน, ไม่มี build step) เปิด `index.html` ได้ตรง ๆ

## โครงสร้างไฟล์ (ไฟล์ที่ deploy จริง)
- `index.html` — โครง section + `<script>`/`<link>` includes
- `style.css` — สไตล์ทั้งหมด (design tokens อยู่ที่ `:root`)
- `app.js` — ตัวเรนเดอร์ทั้งหมด + Skill Tree Simulator + systems renderer
- `data.js` — `GAME / FEATURES / STATS / NEWS / SOURCES / CLASS_EMBLEM / JOB_ICON / jobIcon() / LINE_ICONS`
  (หมายเหตุ: `CLASSES`, `TIPS`, `LINE_ICONS` เป็นของเก่า ไม่ได้ใช้แล้ว แต่ยังคงไว้)
- `classes-data.js` — `OFFICIAL = {classes, bases, paths, order}` ข้อมูลอาชีพ/สกิล official
- `systems-data.js` — `SYSTEMS = [...]` ระบบเกม (content model: blocks)
- `assets/classicons/*.gif` — ไอคอนอาชีพจริง 20 ตัว (จาก dgn-memory)
- `assets/wp/<class>/portrait.png` + `sNN.png` — อาร์ต + ไอคอนสกิลทางการ (จาก whitepaper)
- `assets/news/*.png` — แบนเนอร์ข่าว

## ที่มาข้อมูล (สำคัญ)
ข้อมูลอาชีพ/สกิล/ระบบ **อ้างอิง Whitepaper ทางการ**: https://drlv.gitbook.io/dragonica-landverse-whitepaper
- โครงสร้างอาชีพ official = **3 เทียร์** (Lv.1 → Lv.20 อาชีพ2 → Lv.40 อาชีพ3) — ไม่มีเทียร์ 4
- 20 อาชีพ: Warrior→Knight/Gladiator→Paladin/Myrmidon · Magician→Battlemage/Acolyte→Warmage/Oracle · Archer→Ranger/Hunter→Ballista/Trapper · Thief→Assassin/Jester→Ninja/Harlequin

## วิธี regenerate ข้อมูล (build scripts — ไม่ deploy)
1. `curl .../llms-full.txt > wp.txt` (whitepaper เต็ม)
2. `python parse_wp.py` → `wp_classes.json` (สกิล + intro + highlights)
3. `python dl_imgs.py` → ดึง portrait + ไอคอนสกิลทางการ ลง `assets/wp/` (parse HTML แต่ละหน้าคลาส, รูปเรียงตามลำดับสกิล)
4. `python gen_data.py` → `classes-data.js`
- `systems-data.js` เขียนมือจาก wp.txt

## คอนเวนชัน
- **ฟอนต์**: Noto Sans Thai เสมอ (`--mono` มี Noto Sans Thai เป็น fallback กันอักษรไทยใน JetBrains Mono เพี้ยน)
- **ไอคอน UI**: SVG เท่านั้น ห้าม emoji
- **dropdown/popup**: custom เองทั้งหมด ห้ามใช้ native `<select>` (ใช้ปุ่ม base/branch + tier tabs แทน)
- ทดสอบเรนเดอร์ด้วย Edge headless: `--headless --dump-dom` หาค่า error / `--screenshot` แล้วครอปด้วย System.Drawing

## Skill Tree Simulator
- ใช้ `OFFICIAL.paths[i]` (8 สาย) × tiers 3 ชั้น
- layout กริดแน่นสไตล์ในเกม (อิง Dragon Saga sim): `computeLayout` จัด **row = depth** (สาย prerequisite ไหลบนลงล่าง) + **col = integer lane** (สายหลักตรงลง พ่ออยู่เหนือลูกตัวแรก, สายแตกแขนงเพิ่มไปคอลัมน์ขวา — ไม่ใช่ค่าทศนิยม/center) — เส้นเชื่อมลากจาก "ล่างไอคอนพ่อ → บนไอคอนลูก"
- กริด layout = ค่าคงที่ `NS/GX/GY/PAD` ที่หัว skill tree section ใน `app.js` (`NS`=ขนาดไอคอน, `GX`=ระยะห่างคอลัมน์, `GY`=ระยะห่างแถว) — ปัจจุบัน `NS=40, GX=64, GY=80, PAD=24` (กริดแน่นแบบเกม)
- label ใต้ไอคอน: `.nm` กว้าง `--lw`(=`GX-6`) จัดกลางเหนือไอคอนด้วย margin ลบ + clamp 2 บรรทัด — **`GY` ต้อง ≥ ไอคอน + label 2 บรรทัด** ไม่งั้นชื่อถูกแถวล่างทับ; ถ้าลด `GX` อีกต้องเช็กชื่อไทยยาว 2 บรรทัดไม่ชนคอลัมน์ข้างกัน
- `tierClass(p,t)` รับได้ทั้ง index และ path object (เคยพังเพราะส่ง index — ระวัง)

## Deploy
- GitHub Pages: repo `wasin-tha/dragonica-landverse-guide` → https://wasin-tha.github.io/dragonica-landverse-guide/
- **commit/deploy เมื่อผู้ใช้สั่งเท่านั้น**

## ค้างตรวจ
- ไอคอนคู่ที่ไอคอนคล้ายกัน อาจสลับ: **Battlemage↔Warmage**, **Trapper↔Ballista** (แก้ที่ `JOB_ICON`/`LINE_ICONS` ใน data.js + `assets/classicons/`)
- ชื่อสกิล vs prereq บางตัวไม่ตรงกันทำให้ไม่ถูกเชื่อมสายใน tree เช่น Knight **Giant Growth** prereq เขียน "Increased Defense" แต่สกิลชื่อ "Increase Defensive" (แก้ชื่อให้ตรงใน `classes-data.js`)
