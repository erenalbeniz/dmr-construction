/* DMR Construction — interactions */

(function () {
  'use strict';

  /* ---------- Reveal on scroll ---------- */
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

  /* ---------- Mobile nav toggle ---------- */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        Object.assign(navLinks.style, {
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          right: '22px',
          background: 'var(--paper)',
          padding: '18px 22px',
          borderRadius: '4px',
          border: '1px solid var(--line)',
          boxShadow: 'var(--shadow-card)',
          gap: '14px',
          minWidth: '180px',
        });
      } else {
        navLinks.removeAttribute('style');
      }
    });
  }

  /* ---------- Smooth scroll for hash links (with nav offset) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navLinks.removeAttribute('style');
          }
        }
      }
    });
  });

  /* ---------- Catalogue: active category pill on scroll ---------- */
  const catNavLinks = document.querySelectorAll('.cat-nav a');
  const catSections = document.querySelectorAll('.cat-section');
  if (catNavLinks.length && catSections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      catNavLinks.forEach((a) => {
        a.classList.toggle(
          'active',
          a.getAttribute('href') === '#' + id
        );
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

  /* ---------- Catalogue: clicking pill scrolls horizontally if needed ---------- */
  const catNavInner = document.querySelector('.cat-nav-inner');
  if (catNavInner) {
    catNavLinks.forEach((a) => {
      a.addEventListener('click', () => {
        // small delay so .active is applied first
        setTimeout(() => {
          const active = catNavInner.querySelector('a.active');
          if (active) {
            active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }, 250);
      });
    });
  }

  /* ---------- Hide product-img element if its src is empty / 404 ----------
     onerror is also handled inline on each <img> as a fallback for older browsers. */
  document.querySelectorAll('img.product-img').forEach((img) => {
    if (!img.getAttribute('src')) {
      img.style.display = 'none';
    }
  });
})();
