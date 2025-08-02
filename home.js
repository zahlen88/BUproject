// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
    menuToggle.textContent = 'Menu';
  } else {
    mobileMenu.style.display = 'block';
    menuToggle.textContent = 'Close';
  }
});

// (Optional) Smooth scrolling for same-page anchor links (e.g., footer "What We Offer" links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Simple form submission handler for subscribe forms (just a placeholder for offline demo)
const subscribeForms = document.querySelectorAll('.subscribe-form, .subscribe-form-footer');
subscribeForms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});
