// ===========================
// SCROLL-TRIGGERED FADE-IN
// ===========================
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.feature-card, .pricing-card, .hero__content, .hero__visual').forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
})();

// ===========================
// NAV SCROLL SHADOW
// ===========================
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 20);
  }, { passive: true });
})();

// ===========================
// CONTACT FORM — basic submit
// ===========================
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoyé ✓';
    btn.disabled = true;
    btn.style.opacity = '0.7';
  });
})();
