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
// NAV — hamburger menu
// ===========================
(function () {
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav__links');
  if (!burger || !navLinks) return;
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
})();

// ===========================
// FEATURES — hover phone swap
// ===========================
(function () {
  const img = document.getElementById('features-phone');
  if (!img) return;

  const cards = document.querySelectorAll('.feature-card[data-screen]');

  function activateCard(card) {
    cards.forEach(c => c.classList.remove('is-active'));
    card.classList.add('is-active');
    const screen = card.dataset.screen;
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = `assets/img/mockups/${screen}`;
      img.style.opacity = '1';
    }, 200);
  }

  if (cards.length > 0) cards[0].classList.add('is-active');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => activateCard(card));
  });
})();
