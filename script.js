const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuHandler() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuHandler);
overlay.addEventListener('click', closeMenuHandler);

document.querySelectorAll('.mobile-menu-links a').forEach(link => {
    link.addEventListener('click', closeMenuHandler);
});

const heroSlides = document.getElementById('heroSlides');
const heroDots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let autoSlideInterval;

function goToSlide(index) {
    currentSlide = index;
    heroSlides.style.transform = `translateX(-${index * 100}%)`;
    heroDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    goToSlide((currentSlide + 1) % 3);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(parseInt(dot.dataset.index));
        startAutoSlide();
    });
});

startAutoSlide();

const drinksCarousel = document.getElementById('drinksCarousel');
const prevDrinks = document.getElementById('prevDrinks');
const nextDrinks = document.getElementById('nextDrinks');

prevDrinks.addEventListener('click', () => {
    drinksCarousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextDrinks.addEventListener('click', () => {
    drinksCarousel.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('added')) return;
        
        this.classList.add('added');
        const originalText = this.textContent;
        this.textContent = 'Added!';
        
        setTimeout(() => {
            this.classList.remove('added');
            this.textContent = originalText;
        }, 1500);
    });
});

const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const input = this.querySelector('input');
    
    btn.textContent = 'Subscribed!';
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Subscribed!';
    input.value = '';
    
    setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.innerHTML = 'Subscribe';
    }, 3000);
});

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 72;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
