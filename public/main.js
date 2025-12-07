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
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Check on page load

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
    // Contact Form - Handled by Formspree
    // ============================================
    // Form submission is handled by Formspree (action attribute)
    // No JavaScript interception needed

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
                        color: #b76e79;
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
            
            // Close modal handlers
            const closeModal = () => {
                modal.remove();
                document.body.style.overflow = '';
            };
            
            modal.querySelector('.gallery-modal-close').addEventListener('click', closeModal);
            modal.querySelector('.gallery-modal-backdrop').addEventListener('click', closeModal);
            
            // Close on escape key
            const escapeHandler = (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
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
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Check on page load

    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < heroSection.offsetHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // ============================================
    // Loading Animation (Optional)
    // ============================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Add fade-in animation to body
        if (!document.getElementById('loading-styles')) {
            const loadingStyles = document.createElement('style');
            loadingStyles.id = 'loading-styles';
            loadingStyles.textContent = `
                body {
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                
                body.loaded {
                    opacity: 1;
                }
            `;
            document.head.appendChild(loadingStyles);
        }
    });

    // ============================================
    // Service Card Animation Enhancement
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
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
                background: var(--primary-rose-gold, #b76e79);
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
                box-shadow: 0 5px 20px rgba(183, 110, 121, 0.4);
            }
            
            .scroll-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .scroll-to-top:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(183, 110, 121, 0.5);
                background: var(--accent-rose, #d4a5a5);
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
    // Console Welcome Message
    // ============================================
    console.log('%c✨ Tyler Sheetz Hair Extensions ✨', 'font-size: 20px; font-weight: bold; color: #b76e79;');
    console.log('%cWebsite developed with ❤️', 'font-size: 12px; color: #666;');
    
});
