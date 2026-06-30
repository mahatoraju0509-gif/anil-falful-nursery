// ============================================================
// ANIL FALFUL NURSERY KRISHI FARM - PREMIUM JAVASCRIPT
// Developed by: Raju Mahato - Nepal's No.1 Developer
// ============================================================

// ===== PRELOADER =====
window.addEventListener('load', () => {
    document.getElementById('preloader').classList.add('hide');
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== NAV LINKS ACTIVE =====
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinksContainer = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
    menuToggle.innerHTML = navLinksContainer.classList.contains('open') ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('nurseryTheme') === 'dark') {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('nurseryTheme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('nurseryTheme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइएको छ।\nहामी चाँडै सम्पर्क गर्नेछौं।');
    e.target.reset();
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
    '.about-card, .pan-card, .product-card, .team-card, .gallery-item, .contact-item'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('🌱 अनिल फलफुल नर्सरी कृषि फार्म');
console.log('👨‍💻 Developed by: Raju Mahato - Nepal\'s No.1 Developer');
console.log('🌐 https://rajumahato.it.com');
