// ===== Preloader =====
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 800);
});

// ===== Navbar scroll effect =====
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  backToTop.classList.toggle("show", window.scrollY > 400);
});

// ===== Mobile menu =====
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// ===== Typing Animation =====
const roles = ["Java Developer", "Software Engineer", "Backend Engineer"];
let roleIndex = 0,
  charIndex = 0,
  isDeleting = false;
const typedEl = document.getElementById("typed-text");

function typeEffect() {
  const current = roles[roleIndex];
  typedEl.textContent = current.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 40 : 80);
}
typeEffect();

// ===== Particle Canvas =====
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    )
      this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== Counter Animation =====
function animateCounters() {
  document.querySelectorAll(".stat-number").forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      counter.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target;
    }
    requestAnimationFrame(update);
  });
}

// ===== Scroll Animations =====
const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Trigger counter animation when stats come into view
      if (entry.target.closest(".stats-banner")) {
        animateCounters();
      }
    }
  });
}, observerOptions);

// Apply fade-up to major cards & sections
document
  .querySelectorAll(
    ".info-card, .timeline-item, .skill-category, .project-card, .edu-card, .contact-card, .cert-card, .stat-item",
  )
  .forEach((el) => {
    el.classList.add("fade-up");
    fadeObserver.observe(el);
  });

// Apply directional animations
document.querySelectorAll(".about-text").forEach((el) => {
  el.classList.add("fade-left");
  fadeObserver.observe(el);
});
document.querySelectorAll(".about-cards").forEach((el) => {
  el.classList.add("fade-right");
  fadeObserver.observe(el);
});

// ===== Active nav on scroll =====
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 120;
  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link)
      link.classList.toggle("active", scrollY >= top && scrollY < top + height);
  });
});

// ===== Smooth stagger effect on section titles =====
document.querySelectorAll(".section-title").forEach((title) => {
  title.classList.add("fade-up");
  fadeObserver.observe(title);
});
