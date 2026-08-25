/*
   main.js — ໂຄ້ດ JavaScript ທັງໝົດຂອງເວັບ
   ໃຊ້ IIFE ຫຸ້ມໄວ້ ເພື່ອບໍ່ໃຫ້ຕົວແປຮົ່ວອອກໄປ global scope
   ໝາຍເຫດ: ຕ້ອງໂຫຼດ js/i18n.js ກ່ອນໄຟລ໌ນີ້ */
(function () {
  'use strict';

  /* ຕົວຊ່ວຍສັ້ນໆ ແທນ document.querySelector */
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  /* ອ່ານ/ຂຽນ localStorage ແບບປອດໄພ (ບາງ browser ປິດໄວ້ */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* ignore */ } }
  };

  /* ເມນູມືຖື (Hamburger)
     ກົດປຸ່ມ → ເພີ່ມ/ຖອດ class "open" ໃຫ້ເມນູ (CSS ເປັນຄົນເຮັດ animation)*/
  const navToggle = $('#navToggle');
  const navMenu   = $('#navMenu');

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen)); // ເພື່ອ screen reader
  });

  // ກົດລິ້ງໃນເມນູແລ້ວ ໃຫ້ປິດເມນູອັດຕະໂນມັດ (ສຳຄັນໃນມືຖື)
  $$('.nav__link').forEach((link) => link.addEventListener('click', closeMenu));

  /* ສະຫຼັບພາສາ ລາວ ⇄ ອັງກິດ (i18n) */
  const langBtn      = $('#langBtn');
  const SUPPORTED    = ['lo', 'en'];
  const DEFAULT_LANG = 'lo';

  function applyLang(lang) {
    // ກັນຄ່າແປກປອມ — ຖ້າບໍ່ຮອງຮັບ ໃຫ້ກັບໄປພາສາຫຼັກ
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;

    const dict = TRANSLATIONS[lang];

    // ແປແບບຂໍ້ຄວາມທຳມະດາ (ປອດໄພ ເພາະບໍ່ຕີຄວາມເປັນ HTML)
    $$('[data-i18n]').forEach((el) => {
      const text = dict[el.dataset.i18n];
      if (text !== undefined) el.textContent = text;
    });

    // ແປແບບມີແທັກ HTML ຢູ່ຂ້າງໃນ (ເຊັ່ນ <strong>) — ໃຊ້ສະເພາະຂໍ້ຄວາມຂອງເຮົາເອງ
    $$('[data-i18n-html]').forEach((el) => {
      const html = dict[el.dataset.i18nHtml];
      if (html !== undefined) el.innerHTML = html;
    });

    // ບອກ browser/Google ວ່າໜ້ານີ້ເປັນພາສາຫຍັງ (ດີຕໍ່ SEO ແລະ screen reader)
    document.documentElement.lang = lang;

    // ປຸ່ມສະແດງ "ພາສາທີ່ຈະປ່ຽນໄປ" ບໍ່ແມ່ນພາສາປັດຈຸບັນ
    langBtn.textContent = lang === 'lo' ? 'EN' : 'ລາວ';

    // ປ່ຽນ title ຂອງແທັບ browser ນຳ
    document.title = lang === 'lo'
      ? 'ສິນໄຊ ສິດທິໂວຫານ | Backend Developer'
      : 'Sinxay Sitthivohan | Backend Developer';

    store.set('lang', lang);
  }

  // ຕອນເປີດເວັບ: ໃຊ້ພາສາທີ່ເຄີຍເລືອກໄວ້ → ຖ້າບໍ່ມີ ເບິ່ງພາສາຂອງ browser → ບໍ່ແມ່ນລາວກໍໃຊ້ en
  const browserLang = (navigator.language || 'lo').slice(0, 2);
  applyLang(store.get('lang') || (browserLang === 'lo' ? 'lo' : 'en'));

  langBtn.addEventListener('click', () => {
    applyLang(document.documentElement.lang === 'lo' ? 'en' : 'lo');
  });

  /* ສະຫຼັບ Theme ສະຫວ່າງ / ມືດ
     - ເກັບຄ່າໄວ້ໃນ localStorage ເພື່ອຈື່ໄວ້ຮອບໜ້າ
     - ຖ້າຍັງບໍ່ເຄີຍເລືອກ ໃຫ້ໃຊ້ຄ່າຕາມລະບົບຂອງເຄື່ອງ */
  const themeBtn = $('#themeBtn');
  const root     = document.documentElement; // <html>

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeBtn.textContent = theme === 'dark' ? '☀' : '🌙';
    store.set('theme', theme);
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(store.get('theme') || (prefersDark ? 'dark' : 'light'));

  themeBtn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* Reveal on scroll — ໃຫ້ element ຄ່ອຍໆ ລອຍຂຶ້ນມາຕອນເລື່ອນເຫັນ
     ໃຊ້ IntersectionObserver ເຊິ່ງເບົາກວ່າການຟັງ scroll ຕະຫຼອດເວລາ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // ເຮັດເທື່ອດຽວພໍ
      });
    },
    { threshold: 0.15 } // ເຫັນ 15% ຂອງ element ກໍເລີ່ມ animate
  );

  $$('.reveal').forEach((el) => revealObserver.observe(el));

  /* ແຖບລະດັບພາສາ — ຂະຫຍາຍຄວາມກວ້າງຕອນເລື່ອນມາເຫັນ
     ອ່ານຄ່າ % ຈາກ attribute data-level ໃນ HTML */
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        bar.querySelector('.bar__fill').style.width = bar.dataset.level + '%';
        barObserver.unobserve(bar);
      });
    },
    { threshold: 0.4 }
  );

  $$('.bar').forEach((bar) => barObserver.observe(bar));

  /* ໄຮໄລທ໌ເມນູຕາມ section ທີ່ກຳລັງເບິ່ງຢູ່ (scroll spy) */
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        $$('.nav__link').forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    },
    // rootMargin ຍົກເສັ້ນກວດຂຶ້ນມາກາງຈໍ ເພື່ອໃຫ້ຈັບ section ໄດ້ແມ່ນຍຳກວ່າ
    { rootMargin: '-45% 0px -50% 0px' }
  );

  $$('section[id]').forEach((sec) => spyObserver.observe(sec));

  /* ປຸ່ມເລື່ອນຂຶ້ນເທິງສຸດ */
  const toTop = $('#toTop');

  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 400);
  }, { passive: true }); // passive ຊ່ວຍໃຫ້ scroll ລື່ນຂຶ້ນ

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ໃສ່ປີປັດຈຸບັນໃນ footer ອັດຕະໂນມັດ */
  $('#year').textContent = new Date().getFullYear();

})();

  function openModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
