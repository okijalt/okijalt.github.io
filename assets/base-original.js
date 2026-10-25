// Scroll animations for section headers
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section-header').forEach(el => observer.observe(el));

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger / mobile nav
const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close-btn');

function openMobileNav() {
    mobileNav.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobileNav);
mobileClose.addEventListener('click', closeMobileNav);

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMobileNav();
    }
});