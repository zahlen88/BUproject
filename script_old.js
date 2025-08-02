/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList    = document.querySelector('.nav-list');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
    // Close menu when any nav link is clicked
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('show');
      });
    });
  }

  // Newsletter subscribe form handler (across all pages)
  document.querySelectorAll('form#subscribe-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for subscribing!');
      form.reset();
    });
  });

  // Contact form submission handler
  const contactForm = document.querySelector('form#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for your message! We will get in touch soon.');
      contactForm.reset();
    });
  }
});
