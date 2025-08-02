// Same JS functionality for menu toggle and forms as in home.js
const menuToggleAbout = document.querySelector('.menu-toggle');
const mobileMenuAbout = document.querySelector('.mobile-menu');
menuToggleAbout.addEventListener('click', () => {
  if (mobileMenuAbout.style.display === 'block') {
    mobileMenuAbout.style.display = 'none';
    menuToggleAbout.textContent = 'Menu';
  } else {
    mobileMenuAbout.style.display = 'block';
    menuToggleAbout.textContent = 'Close';
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});
const subscribeFormsAbout = document.querySelectorAll('.subscribe-form, .subscribe-form-footer');
subscribeFormsAbout.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});
