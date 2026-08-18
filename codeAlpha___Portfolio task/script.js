// =====================================================
// STARFIELD BACKGROUND (dublinhacx-style night sky)
// =====================================================
(function starfield(){
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
    buildStars();
  }

  function buildStars(){
    const count = Math.floor((w * h) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function draw(t){
    ctx.clearRect(0, 0, w, h);
    for (const s of stars){
      const twinkle = reduceMotion ? s.baseAlpha : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.25;
      ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
      ctx.fillStyle = '#e8e6f0';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
  if (reduceMotion) draw(0);
})();

// =====================================================
// NAV: scroll shadow, active link, mobile toggle
// =====================================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => navObserver.observe(s));

// =====================================================
// SCROLL REVEAL
// =====================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .skill-card').forEach(el => revealObserver.observe(el));

// =====================================================
// TYPED HERO TEXT
// =====================================================
(function typed(){
  const el = document.getElementById('typed');
  const phrases = ['a student developer.', 'a product builder.', 'a curious tinkerer.'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion){
    el.textContent = phrases[0];
    return;
  }

  let pIndex = 0, cIndex = 0, deleting = false;

  function tick(){
    const phrase = phrases[pIndex];
    if (!deleting){
      cIndex++;
      el.textContent = phrase.slice(0, cIndex);
      if (cIndex === phrase.length){
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      cIndex--;
      el.textContent = phrase.slice(0, cIndex);
      if (cIndex === 0){
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
})();

// =====================================================
// ANIMATED COUNTERS
// =====================================================
const counters = document.querySelectorAll('.stat__num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();

    function step(now){
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });

counters.forEach(c => counterObserver.observe(c));

// =====================================================
// CONTACT FORM (front-end only demo)
// =====================================================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = 'Thanks! This is a practice form, so nothing was actually sent.';
    form.reset();
  }, 900);
});
