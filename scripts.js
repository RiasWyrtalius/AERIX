// SLIDER LEFT AND RIGHT ARROW

const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: 'smooth'
    });
});

// MENU ICON
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside (optional)
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});
