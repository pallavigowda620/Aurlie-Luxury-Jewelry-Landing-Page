/* =====================================================
   AURÉLIE — Landing Page Interactions
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky nav background on scroll ---------- */
  const nav = document.getElementById('mainNav');
  const toggleNavStyle = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  toggleNavStyle();
  window.addEventListener('scroll', toggleNavStyle, { passive: true });

  /* Close mobile menu after a link is tapped */
  const navMenu = document.getElementById('navMenu');
  document.querySelectorAll('#navMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        bsCollapse.hide();
      }
    });
  });

  /* ---------- THE CHAIN — scroll progress spine ---------- */
  const chainFillLine = document.querySelector('.chain-fill-line');
  const chainFillGroup = document.querySelector('.chain-fill');
  const chainLinks = document.querySelectorAll('.chain-link');

  const updateChain = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

    if (chainFillGroup) {
      chainFillGroup.style.clipPath = `inset(0 0 ${(1 - progress) * 100}% 0)`;
    }

    chainLinks.forEach(link => {
      const pos = parseFloat(link.style.top) / 100;
      if (progress >= pos - 0.02) {
        link.classList.add('lit');
      } else {
        link.classList.remove('lit');
      }
    });
  };
  updateChain();
  window.addEventListener('scroll', updateChain, { passive: true });
  window.addEventListener('resize', updateChain);

  /* ---------- Scroll-triggered fade-in reveals ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: reveal everything immediately if IO isn't supported
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Search modal: autofocus input on open ---------- */
  const searchModal = document.getElementById('searchModal');
  if (searchModal) {
    searchModal.addEventListener('shown.bs.modal', () => {
      document.getElementById('searchInput').focus();
    });
  }

});
