// ============================================
// Tyler Sheetz Hair Extensions - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Initialize AOS (Animate On Scroll)
    // ============================================
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.getElementById('mainNav');
    
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    updateNavbar();

    // ============================================
    // Smooth Scrolling for Navigation Links
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navCollapse = document.querySelector('.navbar-collapse');
                if (navCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // ============================================
    // Video Auto-play on Scroll (Performance Optimized)
    // ============================================
    const videos = document.querySelectorAll('.video-player');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            
            if (entry.isIntersecting) {
                video.play().catch(error => {
                    console.log('Video autoplay prevented:', error);
                });
            } else {
                video.pause();
            }
        });
    }, observerOptions);
    
    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // ============================================
    // Contact Form Handling (Formspree)
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    formSuccess.classList.remove('d-none');
                    if (formError) formError.classList.add('d-none');
                    contactForm.reset();
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    setTimeout(() => formSuccess.classList.add('d-none'), 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(() => {
                if (formError) {
                    formError.classList.remove('d-none');
                    formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    setTimeout(() => formError.classList.add('d-none'), 5000);
                }
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            });
        });
    }

    // ============================================
    // Gallery Image Modal (Simple Lightbox Effect)
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="gallery-modal-backdrop"></div>
                <div class="gallery-modal-content">
                    <button class="gallery-modal-close">&times;</button>
                    <img src="${imgSrc}" alt="${imgAlt}" class="img-fluid">
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Add styles dynamically
            if (!document.getElementById('gallery-modal-styles')) {
                const styles = document.createElement('style');
                styles.id = 'gallery-modal-styles';
                styles.textContent = `
                    .gallery-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 9999;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: fadeIn 0.3s ease;
                    }
                    
                    .gallery-modal-backdrop {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(26, 26, 26, 0.95);
                        cursor: pointer;
                    }
                    
                    .gallery-modal-content {
                        position: relative;
                        max-width: 90%;
                        max-height: 90vh;
                        z-index: 1;
                        animation: scaleIn 0.3s ease;
                    }
                    
                    .gallery-modal-content img {
                        max-width: 100%;
                        max-height: 90vh;
                        border-radius: 10px;
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    }
                    
                    .gallery-modal-close {
                        position: absolute;
                        top: -50px;
                        right: 0;
                        background: transparent;
                        border: none;
                        color: white;
                        font-size: 3rem;
                        cursor: pointer;
                        width: 50px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                    }
                    
                    .gallery-modal-close:hover {
                        transform: rotate(90deg);
                        color: #9a8367;
                    }
                    
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    
                    @keyframes scaleIn {
                        from { transform: scale(0.8); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                `;
                document.head.appendChild(styles);
            }
            
            // Focus the close button for keyboard users
            const closeBtn = modal.querySelector('.gallery-modal-close');
            closeBtn.focus();

            // Close modal handlers
            const closeModal = () => {
                modal.remove();
                document.body.style.overflow = '';
                item.focus();
            };

            closeBtn.addEventListener('click', closeModal);
            modal.querySelector('.gallery-modal-backdrop').addEventListener('click', closeModal);

            // Close on escape, trap focus inside modal
            const keyHandler = (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', keyHandler);
                }
                if (e.key === 'Tab') {
                    e.preventDefault();
                    closeBtn.focus();
                }
            };
            document.addEventListener('keydown', keyHandler);
        }

        item.addEventListener('click', openLightbox);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox();
            }
        });
    });

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    // Throttled scroll handler using requestAnimationFrame
    let scrollTicking = false;
    function onScroll() {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                updateNavbar();
                highlightNavigation();
                if (heroSection) {
                    const scrolled = window.pageYOffset;
                    if (scrolled < heroSection.offsetHeight) {
                        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
                    }
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', onScroll);
    highlightNavigation();

    // ============================================
    // Loading Animation
    // ============================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // ============================================
    // Scroll to Top Button (Optional Enhancement)
    // ============================================
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);
    
    // Add styles for scroll to top button
    if (!document.getElementById('scroll-top-styles')) {
        const scrollTopStyles = document.createElement('style');
        scrollTopStyles.id = 'scroll-top-styles';
        scrollTopStyles.textContent = `
            .scroll-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--primary-rose-gold, #9a8367);
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 5px 20px rgba(154, 131, 103, 0.4);
            }
            
            .scroll-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .scroll-to-top:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(154, 131, 103, 0.5);
                background: var(--accent-rose, #0c4d90);
            }
            
            @media (max-width: 768px) {
                .scroll-to-top {
                    bottom: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                }
            }
        `;
        document.head.appendChild(scrollTopStyles);
    }
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // Cookie Consent Banner
    // ============================================
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieDecline = document.getElementById('cookieDecline');

    if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieBanner.classList.add('visible');
        }, 1000);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('visible');
            // Load analytics scripts here when ready
            // e.g., loadGA4(), loadMetaPixel()
        });
    }

    if (cookieDecline) {
        cookieDecline.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.remove('visible');
        });
    }

    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c✨ Tyler Sheetz Hair Extensions ✨', 'font-size: 20px; font-weight: bold; color: #9a8367;');
    console.log('%cWebsite developed with ❤️', 'font-size: 12px; color: #666;');
    
});
