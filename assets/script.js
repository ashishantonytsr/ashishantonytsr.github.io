document.addEventListener('DOMContentLoaded', () => {

    // --- NAVBAR & HAMBURGER MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- INTERACTIVE SKILL CARDS ---
    const skillCards = document.querySelectorAll('.interactive-skill');

    skillCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling to the document
            
            // If the card is already active, deactivate it.
            if (card.classList.contains('is-active')) {
                card.classList.remove('is-active');
            } else {
                // Deactivate all other cards before activating the new one
                skillCards.forEach(otherCard => {
                    otherCard.classList.remove('is-active');
                });
                card.classList.add('is-active');
            }
        });
    });

    // Close active skill card if clicking anywhere else on the page
    document.addEventListener('click', () => {
        skillCards.forEach(card => {
            card.classList.remove('is-active');
        });
    });

    // --- SCROLL EFFECTS ---
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Scrolled header style
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }

        // Active nav link highlighting
        updateActiveNavLink();
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

});