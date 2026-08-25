/* 
   i18n.js — ຄັງຄຳແປ (Dictionary) ພາສາລາວ / ອັງກິດ
   ---------------------------------------------------------
   ໂຄງສ້າງ: TRANSLATIONS[ພາສາ][key] = "ຂໍ້ຄວາມ"
   ໃນ HTML ໃສ່ data-i18n="key" ໄວ້ → JS ຈະມາປ່ຽນຂໍ້ຄວາມໃຫ້
   ຖ້າມື້ໜ້າຢາກຕໍ່ API ແປພາສາຈິງ ກໍພຽງແຕ່ປ່ຽນ object ນີ້
   ໃຫ້ໂຫຼດມາຈາກ server ແທນ — ສ່ວນອື່ນບໍ່ຕ້ອງແກ້ເລີຍ
   */
const TRANSLATIONS = {

  /* ---------------- ພາສາລາວ ---------------- */
  lo: {
    'nav.about':      'ກ່ຽວກັບ',
    'nav.education':  'ການສຶກສາ',
    'nav.experience': 'ປະສົບການ',
    'nav.projects':   'ໂປຣເຈັກ',
    'nav.skills':     'ທັກສະ',
    'nav.contact':    'ຕິດຕໍ່',

    'hero.hi':          'ສະບາຍດີ, ຂ້ອຍຊື່',
    'hero.name':        'ສິນໄຊ ສິດທິໂວຫານ',
    'hero.role':        'Backend Developer',
    'hero.desc':        'ນັກສຶກສາຊັ້ນປີທີ 4 ສາຂາໂປຣແກຣມມິ່ງ ທີ່ມີພື້ນຖານດ້ານ HTML, CSS, JavaScript ແລະ ມີປະສົບການຝຶກງານດ້ານການພັດທະນາລະບົບ Odoo ຕ້ອງການສືບຕໍ່ພັດທະນາຕົນເອງໃນຕຳແໜ່ງ Backend Developer ພ້ອມຮຽນຮູ້ ແລະ ຮັບຄວາມທ້າທາຍໃໝ່ໆ.',
    'hero.btnContact':  'ຕິດຕໍ່ຂ້ອຍ',
    'hero.btnProjects': 'ເບິ່ງໂປຣເຈັກ',
    'hero.address':     'ບ້ານສີວິໄລ, ເມືອງໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ',

    'edu.title':   'ການສຶກສາ',
    'edu.school':  'ສະຖາບັນ Soutsaka',
    'edu.meta':    'ສາຂາວິຊາ: ໂປຣແກຣມມິ່ງ (Programming)  |  ກຳລັງສຶກສາ ຊັ້ນປີທີ 4',
    'cert.title':  'ໃບຢັ້ງຢືນ',
    'cert.name':   'ໃບຢັ້ງຢືນຝຶກງານ',
    'cert.meta':   'ກຳລັງດຳເນີນການ — ຄາດວ່າຈະໄດ້ຮັບພາຍໃນອາທິດໜ້າ',

    'exp.title':   'ປະສົບການເຮັດວຽກ',
    'exp.role':    'Developer (ຝຶກງານ)',
    'exp.company': 'ບໍລິສັດ LaoOdoo (ໃນເຄືອ KOLAO Group)  |  ໄລຍະເວລາ 2 ເດືອນ',
    'exp.li1':     '<strong>UI &amp; Report Customization:</strong> ປັບແຕ່ງໜ້າ View ແລະ ອອກແບບໂຄງສ້າງໃບລາຍງານ (Purchase Orders, Receipts, Invoices) ໂດຍໃຊ້ XML/QWeb templates ເພື່ອດຶງຂໍ້ມູນ dynamic ຈາກ Database',
    'exp.li2':     '<strong>Module Development:</strong> ພັດທະນາໂມດູນ (Module) ໃໝ່ ໂດຍສ້າງ Custom Wizard ເພື່ອຄົ້ນຫາ/ດຶງຂໍ້ມູນຂ້າມໂມດູນ (ເຊັ່ນ: Point of Sale, Inventory)',
    'exp.li3':     '<strong>Access Rights &amp; Security:</strong> ຕັ້ງຄ່າສິດການເຂົ້າເຖິງ ແລະ ຄວາມປອດໄພຂອງຂໍ້ມູນ (CRUD Permissions) ຜ່ານ ir.model.access.csv',
    'exp.li4':     '<strong>Environment Setup:</strong> ຕິດຕັ້ງ ແລະ ຄອນຟິກລະບົບ Odoo ເທິງ Linux environment ຜ່ານ Command Line Interface (CLI)',

    'proj.title':  'Personal & Academic Projects',
    'proj1.title': 'User Authentication System',
    'proj1.li1':   'ສ້າງລະບົບ Login/Register ແບບ Full-Stack ພ້ອມ RESTful API endpoints ສຳລັບ User Authentication',
    
    'proj1.li3':   'ອອກແບບ PostgreSQL schema ແລະ integrated ເຂົ້າກັບ pg connection pooling',
    'proj1.li4':   'ສ້າງ Frontend ດ້ວຍ Vanilla JS/HTML/CSS ທີ່ເປັນ Responsive ພ້ອມ async form handling ຜ່ານ Fetch API',
    'proj2.title': 'ແອັບພລິເຄຊັນ POS ສຳລັບຮ້ານອາຫານ',
    'proj2.li1':   'ພັດທະນາແອັບພລິເຄຊັນ POS ເທິງ Desktop ສຳລັບຮ້ານອາຫານ ດ້ວຍ Python/Tkinter',
    'proj2.li2':   'ອອກແບບລະບົບເມນູແຍກຕາມໝວດໝູ່ (ອາຫານ, ເຄື່ອງດື່ມ, ຂອງຫວານ) ທີ່ສາມາດ ເພີ່ມ/ແກ້ໄຂ/ລຶບ ແບບໄດນາມິກ ພ້ອມຟັງຊັນອັບໂຫຼດ ແລະ ຈັດເກັບຮູບພາບ',
    'proj2.li3':   'ພັດທະນາລະບົບກະຕ່າສິນຄ້າແບບ Real-time ຢູ່ Sidebar ຮອງຮັບການປັບຈຳນວນ, ລຶບລາຍການ ແລະ ຄິດໄລ່ລາຄາລວມແບບອັດຕະໂນມັດ',

    'skills.title':   'ທັກສະ',
    'skills.lang':    'Languages',
    'skills.backend': 'Backend & Databases',
    'skills.tools':   'Frameworks & Tools',

    'lang.title': 'ພາສາ',
    'lang.lao':   'ພາສາລາວ',
    'lang.thai':  'ພາສາໄທ',
    'lang.eng':   'ພາສາອັງກິດ',
    'lvl.good':   'ດີ',
    'lvl.mid':    'ປານກາງ',

    'contact.title':   'ຕິດຕໍ່',
    'contact.phone':   'ໂທລະສັບ',
    'contact.email':   'ອີເມວ',
    'contact.address': 'ທີ່ຢູ່',

    'footer.text': 'ສິນໄຊ ສິດທິໂວຫານ — Backend Developer'
  },

  /* ---------------- ພາສາອັງກິດ ---------------- */
  en: {
    'nav.about':      'About',
    'nav.education':  'Education',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.skills':     'Skills',
    'nav.contact':    'Contact',

    'hero.hi':          "Hello, I'm",
    'hero.name':        'Sinxay Sitthivohan',
    'hero.role':        'Backend Developer',
    'hero.desc':        'A 4th-year Programming student with a solid foundation in HTML, CSS and JavaScript, plus hands-on internship experience developing Odoo systems. Looking to grow further as a Backend Developer — eager to learn and take on new challenges.',
    'hero.btnContact':  'Contact Me',
    'hero.btnProjects': 'View Projects',
    'hero.address':     'Ban Sivilay, Xaythany District, Vientiane Capital',

    'edu.title':   'Education',
    'edu.school':  'Soutsaka Institute',
    'edu.meta':    'Major: Programming  |  Currently in Year 4',
    'cert.title':  'Certificate',
    'cert.name':   'Internship Certificate',
    'cert.meta':   'In progress — expected to be issued next week',

    'exp.title':   'Work Experience',
    'exp.role':    'Developer (Intern)',
    'exp.company': 'LaoOdoo Co., Ltd. (KOLAO Group)  |  Duration: 2 months',
    'exp.li1':     '<strong>UI &amp; Report Customization:</strong> Customized views and designed report layouts (Purchase Orders, Receipts, Invoices) using XML/QWeb templates to pull dynamic data from the database',
    'exp.li2':     '<strong>Module Development:</strong> Built new Odoo modules with a Custom Wizard to search and fetch data across modules (e.g. Point of Sale, Inventory)',
    'exp.li3':     '<strong>Access Rights &amp; Security:</strong> Configured access rights and data security (CRUD permissions) via ir.model.access.csv',
    'exp.li4':     '<strong>Environment Setup:</strong> Installed and configured Odoo on a Linux environment through the Command Line Interface (CLI)',

    'proj.title':  'Personal & Academic Projects',
    'proj1.title': 'User Authentication System',
    'proj1.li1':   'Built a full-stack Login/Register system with RESTful API endpoints for user authentication',
    
    'proj1.li3':   'Designed the PostgreSQL schema and integrated it with pg connection pooling',
    'proj1.li4':   'Created a responsive frontend with vanilla JS/HTML/CSS and async form handling via the Fetch API',
    'proj2.title': 'Restaurant POS Application',
    'proj2.li1':   'Developed a desktop POS application for restaurants using Python/Tkinter',
    'proj2.li2':   'Designed a category-based menu system (food, drinks, desserts) with dynamic add/edit/delete, plus image upload and local storage',
    'proj2.li3':   'Built a real-time cart in the sidebar supporting quantity changes, item removal and automatic total calculation',

    'skills.title':   'Skills',
    'skills.lang':    'Languages',
    'skills.backend': 'Backend & Databases',
    'skills.tools':   'Frameworks & Tools',

    'lang.title': 'Languages',
    'lang.lao':   'Lao',
    'lang.thai':  'Thai',
    'lang.eng':   'English',
    'lvl.good':   'Fluent',
    'lvl.mid':    'Intermediate',

    'contact.title':   'Contact',
    'contact.phone':   'Phone',
    'contact.email':   'Email',
    'contact.address': 'Address',

    'footer.text': 'Sinxay Sitthivohan — Backend Developer'
  }
};
