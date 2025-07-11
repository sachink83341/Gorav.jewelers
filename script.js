// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission (basic placeholder logic)
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// You can add more JS features like sliders, modals, etc. here


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    observer.observe(card);
  });
});
// Mobile-friendly tap animation for silver cards
document.querySelectorAll('.silver-card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.classList.add('active');
    setTimeout(() => {
      card.classList.remove('active');
    }, 600); // Animation duration
  });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

// Target all silver cards
document.querySelectorAll('.silver-card').forEach(card => {
  observer.observe(card);
});




const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-links li a');

// Toggle menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when any link is clicked
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Optional: Smooth scroll for the button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Initialize AOS library for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // Animation duration in ms
    once: true,     // Animation happens only once while scrolling down
  });
});
document.getElementById('menu-icon').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});


function openRatesModal() {
  document.getElementById("ratesModal").style.display = "block";
}

function closeRatesModal() {
  document.getElementById("ratesModal").style.display = "none";
}
// Toggle Jewelry Rates Card visibility
function toggleRatesCard() {
  const card = document.getElementById("ratesCard");
  card.classList.toggle("hidden");
}
