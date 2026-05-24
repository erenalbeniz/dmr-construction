/* DMR Construction — interactions + i18n */

(function () {
  'use strict';

  /* ===================================================
     i18n — Turkish translations for site shell
     =================================================== */
  const i18n = {
    // nav
    'nav.brandsub':      'İnşaat malzemeleri · Malta',
    'nav.products':      'Ürünler',
    'nav.catalogue':     'Katalog',
    'nav.about':         'Hakkımızda',
    'nav.partners':      'İş Ortakları',
    'nav.contact':       'İletişim',
    'nav.cta':           'Teklif alın',

    // hero
    'hero.eyebrow':      'Malta · İnşaat Malzemeleri Tedarikçisi',
    'hero.h1':           "Malta'daki her duvar,<br><span class='ital'>tavan</span> ve <span class='accent'>zemin</span><br>burada başlar.",
    'hero.lead':         'DMR Construction, Malta adalarındaki profesyonel müteahhitlere ve geliştiricilere alçıpan sistemleri, alçılar, metal profiller, seramikler, boyalar, ytong, tuğla ve kereste sağlar — hepsi tek bir depoda.',
    'hero.cta.browse':   'Kataloga göz at',
    'hero.cta.talk':     'Ekibimizle konuşun',
    'hero.meta.k1':      'Kategoriler',
    'hero.meta.v1':      '8 ürün ailesi',
    'hero.meta.k2':      'Markalar',
    'hero.meta.v2':      'Avrupa ve bölgesel',
    'hero.meta.k3':      'Teslimat',
    'hero.meta.v3':      'Malta ve Gozo genelinde',
    'hero.label.l':      "Müteahhitin<br><em>deposu.</em>",
    'hero.label.r':      'DMR · Malta',

    // marquee
    'marq.drywall':      'Alçıpan <em>plakalar</em>',
    'marq.plaster':      'Alçılar',
    'marq.profile':      'Metal <em>profiller</em>',
    'marq.sheets':       'Trapez <em>saçlar</em>',
    'marq.ceramic':      'Seramikler',
    'marq.paint':        'Boyalar &amp; <em>kaplamalar</em>',
    'marq.ytong':        'Ytong · tuğla',
    'marq.timber':       'Kereste &amp; <em>kontrplak</em>',

    // categories section
    'sec.cat.kicker':    '01 — Ürün aileleri',
    'sec.cat.h2':        'Sekiz kategori,<br>tek <span class="ital">depo</span>.',
    'sec.cat.lede':      'Ürün yelpazemiz modern bir yapının her katmanını kapsar — alt yapıdan son kata kadar. Her kategori Malta\'da stoklanır, sahanıza hızlı teslim edilir.',

    'cat.drywall.name':  'Alçıpan <em>plakalar</em>',
    'cat.drywall.desc':  'Standart, suya dayanıklı, yangına dayanıklı ve darbeye dayanıklı alçı plakaları — tavan, bölme ve kuru yapı için.',
    'cat.plaster.name':  'Alçılar',
    'cat.plaster.desc':  'Alçı, saten, hazır karışım ve derz alçıları — pürüzsüz duvar ve tavanlar için iç mekan bitirme malzemeleri.',
    'cat.profile.name':  'Profiller',
    'cat.profile.desc':  'Alçıpan, tavan ve asma-grid sistemleri için galvanizli çelik U, C, omega, L-köşe, T-grid ve köşe profilleri.',
    'cat.sheets.name':   'Saçlar &amp; <em>plakalar</em>',
    'cat.sheets.desc':   'Trapez, oluklu ve düz galvanizli çelik saçlar — çatı, cephe, otomotiv ve sanayi sınıfı stok.',
    'cat.ceramic.name':  'Seramikler',
    'cat.ceramic.desc':  'Yer ve duvar karoları, porselen, mozaik ve büyük formatlı seramik yüzeyler — konut ve ticari kullanım için.',
    'cat.paint.name':    'Boyalar',
    'cat.paint.desc':    'İç, dış, dekoratif ve endüstriyel boya sistemleri — Permolit Boya markasının tam ürün yelpazesi dahil.',
    'cat.ytong.name':    'Ytong &amp; <em>tuğla</em>',
    'cat.ytong.desc':    'Gaz beton blokları, ateş tuğlası, taşıyıcı ve bölme duvarlar için kagir malzemeler — konut ve ticari projeler için.',
    'cat.timber.name':   'Kereste &amp; <em>kontrplak</em>',
    'cat.timber.desc':   'İnşaat sınıfı kereste, yapısal kontrplak, kalıp panelleri ve beton kalıbı plywood — saha çalışması için.',
    'cat.more':          'Ürünleri görüntüle',

    // about section
    'sec.about.kicker':  '02 — DMR Hakkında',
    'sec.about.h2':      'Modern Malta<br>yapısı için tek<br><em>kaynak</em>.',
    'sec.about.p1':      "DMR Construction, basit bir fikir üzerine kurulu Malta merkezli bir tedarikçidir — bir müteahhidin tek bir projeyi bitirmek için yedi farklı satıcıyla konuşması gerekmemelidir. Yapıya, yüzeylere ve son katmanlara giren malzemeleri tek çatı altında stoklarız.",
    'sec.about.p2':      "Ürün yelpazemiz, Alçıbay, Fullboard, Permolit Boya ve Burak Galvaniz gibi alçıpan, boya ve galvanizli çelik sistemlerinde derin teknik mirasa sahip kanıtlanmış Avrupa ve bölgesel üreticiler etrafında inşa edilmiştir.",
    'about.k1':          'Kuruluş',
    'about.v1':          'Yerel Malta tedarikçisi',
    'about.k2':          'Hizmet alanı',
    'about.v2':          'Malta &amp; Gozo',
    'about.k3':          'Uzmanlık',
    'about.v3':          'Alçıpan &amp; bitirme sistemleri',
    'about.k4':          'Müşteriler',
    'about.v4':          'Müteahhitler &amp; geliştiriciler',

    // brands section
    'sec.brands.kicker': '03 — İş ortağı markalar',
    'sec.brands.h2':     'Binaları inşa<br>eden <span class="ital">markaları</span><br>taşıyoruz.',
    'sec.brands.lede':   'Deposuzdaki her ürün, gerçek inşaat sahalarında geçmişe sahip bir üreticiden tedarik edilmiştir. Bunlar katalogumuzdaki markalardan bazıları.',
    'brand.alcibay.tag': 'Alçı &amp; alçıpan',
    'brand.alcibay.desc':'Bölme ve tavanlar için alçıpan plakalar ve alçı sistemleri.',
    'brand.fullboard.tag':'Alçıpan sistemleri',
    'brand.fullboard.desc':'Standart, yangına dayanıklı ve neme dayanıklı plaka çeşitleri.',
    'brand.permolit.tag':'Boyalar &amp; kaplamalar',
    'brand.permolit.desc':'İç, dış ve dekoratif boyaların tam ürün yelpazesi.',
    'brand.burak.tag':   'Galvanizli profiller',
    'brand.burak.desc':  'Alçıpan ve tavan çelik profilleri, askı donanımları.',

    // contact section
    'sec.contact.kicker':'04 — İletişime geçin',
    'sec.contact.h2':    'Projenizin neye<br>ihtiyacı olduğunu <span class="ital">söyleyin</span>.',
    'sec.contact.lede':  'Tek bir villa renovasyonu fiyatlandırıyor ya da çok katlı bir geliştirme stoklayanlar olun, ekibimiz tam malzeme listenizi fiyatlandıracak ve adalar genelinde teslimat ayarlayacaktır.',
    'contact.k1':        'Ofis &amp; depo',
    'contact.v1':        'Malta<br><span style="opacity:0.6">Adres onaylanacak</span>',
    'contact.k2':        'Telefon',
    'contact.k3':        'E-posta',
    'contact.k4':        'Çalışma saatleri',
    'contact.v4':        'Pzt–Cum · 07:30–17:00<br>Cmt · 08:00–13:00',
    'contact.card.h3':   'Tam malzeme<br><em>teklifi isteyin</em>.',
    'contact.card.p':    "Bize keşif listenizi veya malzemelerin bir listesini gönderin, tüm kategoriler arasında uygunluk, teslim süresi ve eksiksiz bir fiyat teklifi ile geri döneceğiz.",
    'contact.card.btn':  'Ekibimize e-posta gönderin',

    // footer
    'footer.copy':       '© 2026 DMR Construction. Tüm hakları saklıdır.',
    'footer.tag':        'Malta &amp; Gozo · İnşaat malzemeleri tedarikçisi',

    // catalogue page
    'cat.head.kicker':   'DMR · Tam katalog',
    'cat.head.h1':       'Stoğumuzda<br>bulunan her ürün,<br>tek <em>yerde</em>.',
    'cat.head.lede':     'Sekiz ürün ailesi. Hepsi köklü Avrupa ve bölgesel üreticilerden tedarik edilir. Malta\'da yerel olarak stoklanır, sahanıza teslim edilir. Teknik özellikler ve fiyat teklifi için ekibimizle iletişime geçin.',

    'catnav.drywall':    '01 · Alçıpan plakalar',
    'catnav.plasters':   '02 · Alçılar',
    'catnav.profiles':   '03 · Profiller',
    'catnav.sheets':     '04 · Saçlar &amp; plakalar',
    'catnav.ceramics':   '05 · Seramikler',
    'catnav.paints':     '06 · Boyalar',
    'catnav.ytong':      '07 · Ytong &amp; tuğla',
    'catnav.timber':     '08 · Kereste &amp; kontrplak',

    // catalogue section heads
    'catsec.drywall.num':'Kategori 01 / 08',
    'catsec.drywall.h2': 'Alçıpan <em>plakalar</em>',
    'catsec.drywall.lede':'Tavan, bölme ve kuru yapı için alçı plakaları. Standart, neme dayanıklı, yangına dayanıklı ve darbeye dayanıklı çeşitler — Alçıbay, Fullboard ve iş ortağı markalardan.',
    'catsec.plasters.num':'Kategori 02 / 08',
    'catsec.plasters.h2':'Alçılar',
    'catsec.plasters.lede':'Saten kaplama, derz doldurma ve tam yüzey bitirme için toz ve hazır karışım alçılar. İç bitirme işinin her aşaması için elle ve makineyle uygulanan çeşitler.',
    'catsec.profiles.num':'Kategori 03 / 08',
    'catsec.profiles.h2':'Metal <em>profiller</em>',
    'catsec.profiles.lede':'Alçıpan, tavan ve asma-grid sistemleri için galvanizli çelik profiller, askı sistemleri ve bitirme aksesuarları — Burak Galvaniz\'in tam ürün yelpazesi ile eşdeğer iş ortağı üreticileri.',
    'catsec.sheets.num': 'Kategori 04 / 08',
    'catsec.sheets.h2':  'Saçlar &amp; <em>plakalar</em>',
    'catsec.sheets.lede':'Çatı, cephe, sanayi ve mimari kullanım için trapez, oluklu ve düz galvanizli çelik saçlar. Burak Galvaniz fabrikasından boyalı ve düz finişler tedarik edilir.',
    'catsec.ceramics.num':'Kategori 05 / 08',
    'catsec.ceramics.h2':'Seramikler',
    'catsec.ceramics.lede':'Konut, ticari ve dış mekan projeleri için yer ve duvar karoları. Porselen, sırlı seramik, mozaik ve büyük formatlı seçenekler — sıkı derz uygulamaları için rektifiye kenarlar dahil.',
    'catsec.paints.num': 'Kategori 06 / 08',
    'catsec.paints.h2':  'Boyalar',
    'catsec.paints.lede':'İç, dış, dekoratif ve astar boya sistemlerinin tam ürün yelpazesi — kendi tesisimizde binlerce renge tonlanmış Permolit Boya kataloğunun tamamı dahil.',
    'catsec.ytong.num':  'Kategori 07 / 08',
    'catsec.ytong.h2':   'Ytong &amp; <em>tuğla</em>',
    'catsec.ytong.lede': 'Gaz beton blokları, ateş tuğlası ve yapısal kagir — modern Malta yapısının taşıyıcı ve bölme alt yüzeyleri.',
    'catsec.timber.num': 'Kategori 08 / 08',
    'catsec.timber.h2':  'Kereste &amp; <em>kontrplak</em>',
    'catsec.timber.lede':'İnşaat sınıfı kereste, yapısal kontrplak ve beton kalıbı malzemeleri. Standart müteahhit ölçülerinde saha kullanımına hazır stoklanır.',

    // catalogue hero labels
    'hero.drywall.l':    'Duvar &amp; tavanlar,<br><em>doğru bitirilmiş.</em>',
    'hero.drywall.r':    '01 · Alçıpan plakalar',
    'hero.sheets.l':     'Çatı, duvar,<br><em>sanayi.</em>',
    'hero.sheets.r':     '04 · Saçlar &amp; plakalar',
    'hero.ceramic.l':    'Akdeniz yapısı<br>için <em>karolar.</em>',
    'hero.ceramic.r':    '05 · Seramikler',
    'hero.paint.l':      'Her renk,<br><em>tesisimizde tonlanır.</em>',
    'hero.paint.r':      '06 · Boyalar · Permolit Boya',

    // catalogue bottom CTA
    'cat.cta.kicker':    'Belirli bir ürüne mi ihtiyacınız var?',
    'cat.cta.h2':        'Bu sayfada yazandan<br>daha fazlasını taşıyoruz. <span style="font-style:italic;color:var(--accent-2);">Sadece sorun.</span>',
    'cat.cta.lede':      'DMR deposu, bu kataloğun ötesinde ek ürün hatları, boyutlar ve marka çeşitleri bulundurur. Bize bir liste gönderin, uygunluğu teyit edelim.',
    'cat.cta.contact':   'Ekibimizle iletişime geç',
    'cat.cta.back':      'Anasayfaya dön',
  };

  /* English originals are read once from the DOM on first toggle */
  let savedEnglish = null;

  function snapshotEnglish() {
    const snap = {};
    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((el, idx) => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      snap[key] = el.innerHTML;
    });
    return snap;
  }

  function applyLanguage(lang) {
    if (lang === 'tr' && !savedEnglish) {
      savedEnglish = snapshotEnglish();
    }
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      if (lang === 'tr' && i18n[key]) {
        el.innerHTML = i18n[key];
      } else if (lang === 'en' && savedEnglish && savedEnglish[key] !== undefined) {
        el.innerHTML = savedEnglish[key];
      }
    });
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('dmr-lang', lang); } catch (_) {}
  }

  function wireLanguageToggle() {
    document.querySelectorAll('.lang-toggle button').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    let initial = 'en';
    try { initial = localStorage.getItem('dmr-lang') || 'en'; } catch (_) {}
    if (initial === 'tr') applyLanguage('tr');
  }

  /* ===================================================
     Reveal on scroll
     =================================================== */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ===================================================
     Mobile nav toggle
     =================================================== */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        Object.assign(navLinks.style, {
          display: 'flex', flexDirection: 'column', position: 'absolute',
          top: '100%', right: '22px', background: 'var(--paper)',
          padding: '18px 22px', borderRadius: '4px', border: '1px solid var(--line)',
          boxShadow: 'var(--shadow-card)', gap: '14px', minWidth: '180px',
        });
      } else {
        navLinks.removeAttribute('style');
      }
    });
  }

  /* ===================================================
     Smooth scroll for hash links
     =================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navLinks.removeAttribute('style');
          }
        }
      }
    });
  });

  /* ===================================================
     Catalogue active category pill
     =================================================== */
  const catNavLinks = document.querySelectorAll('.cat-nav a');
  const catSections = document.querySelectorAll('.cat-section');
  if (catNavLinks.length && catSections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      catNavLinks.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    };
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let topMost = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!topMost || entry.boundingClientRect.top < topMost.boundingClientRect.top) {
              topMost = entry;
            }
          }
        });
        if (topMost) setActive(topMost.target.id);
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
    );
    catSections.forEach((s) => sectionObserver.observe(s));
  }
  const catNavInner = document.querySelector('.cat-nav-inner');
  if (catNavInner) {
    catNavLinks.forEach((a) => {
      a.addEventListener('click', () => {
        setTimeout(() => {
          const active = catNavInner.querySelector('a.active');
          if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 250);
      });
    });
  }

  /* ===================================================
     Hide broken product images
     =================================================== */
  document.querySelectorAll('img.product-img').forEach((img) => {
    if (!img.getAttribute('src')) img.style.display = 'none';
  });

  /* ===================================================
     Boot language toggle
     =================================================== */
  wireLanguageToggle();
})();
