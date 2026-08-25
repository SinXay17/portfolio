# Portfolio — ສິນໄຊ ສິດທິໂວຫານ

เว็บ portfolio แบบ static (ไม่ต้องมี server ก็เปิดได้)

## โครงสร้างไฟล์

```
portfolio/
├── index.html      # โครงสร้างเนื้อหาทั้งหมด (ข้อมูลจาก CV)
├── css/style.css   # สไตล์ทั้งหมด + theme + responsive
├── js/i18n.js      # คลังคำแปล ลาว/อังกฤษ (dictionary)
├── js/main.js      # เมนูมือถือ, สลับภาษา, dark mode, animation
└── README.md
```

## วิธีเปิด

เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้เลย
หรือรัน local server:

```bash
cd portfolio
python3 -m http.server 8080
# เปิด http://localhost:8080
```

## จุดที่แก้ได้ง่าย

- **สี**: แก้ที่ `:root { ... }` ในไฟล์ `css/style.css` บรรทัดบนสุด
- **เนื้อหา**: แก้ข้อความใน `index.html` ตรงๆ
- **ระดับภาษา**: แก้ค่า `data-level="95"` ใน `index.html` (0–100)

## เพิ่ม/แก้คำแปล

1. ใน `index.html` ใส่ `data-i18n="key"` ที่ element (ถ้าข้อความมีแท็ก HTML ข้างในให้ใช้ `data-i18n-html="key"`)
2. ใน `js/i18n.js` เพิ่ม key เดียวกันทั้งใน `lo:` และ `en:`

## เพิ่มภาษาที่ 3 (เช่น ไทย)

1. เพิ่ม `th: { ... }` ใน `js/i18n.js`
2. ใน `js/main.js` แก้ `const SUPPORTED = ['lo','en']` เป็น `['lo','en','th']`
