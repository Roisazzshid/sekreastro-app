/**
 * Sekreastro App — Main JavaScript
 * Divisi Sekretaris Astro 2026
 */

'use strict';

/* ----------------------------------------------------------
   1. DOM READY
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initMobileMenu();
  initActiveNavLink();
});

/* ----------------------------------------------------------
   2. NAVBAR — Scrolled Shadow
   ---------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ----------------------------------------------------------
   3. MOBILE MENU TOGGLE
   ---------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ----------------------------------------------------------
   4. ACTIVE NAV LINK (Scroll Spy)
   ---------------------------------------------------------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__nav-link, .navbar__mobile-menu a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

/* ----------------------------------------------------------
   5. SCROLL REVEAL ANIMATION
   ---------------------------------------------------------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------------
   6. WHATSAPP CONTACT BUTTONS
   ---------------------------------------------------------- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-whatsapp]');
  if (!btn) return;

  const phone  = btn.dataset.whatsapp;
  const name   = btn.dataset.name || 'Tim';
  const message = encodeURIComponent(`Halo ${name}, saya ingin menghubungi dari Divisi Sekretaris Astro 2026.`);

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
});
