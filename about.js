// About Page JavaScript - TADB Theme

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.style.display = 'block';
        });

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenuOverlay.style.display = 'none';
            });
        }

        // Handle mobile navigation links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // If it's an external link, allow default behavior
                if (href && (href.includes('.html') || href.startsWith('http'))) {
                    mobileMenuOverlay.style.display = 'none';
                    return;
                }
                
                // For hash links, prevent default and handle internally
                e.preventDefault();

                // Remove active class from all links
                mobileNavLinks.forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                // Close mobile menu
                mobileMenuOverlay.style.display = 'none';
            });
        });

        // Close on overlay click
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.style.display = 'none';
            }
        });
    }
}

// Mobile search functionality
function setupMobileSearch() {
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileSearchOverlay = document.querySelector('.mobile-search-overlay');
    const mobileSearchClose = document.querySelector('.mobile-search-close');
    const mobileSearchInput = document.querySelector('.mobile-search-input');

    if (mobileSearchBtn && mobileSearchOverlay) {
        mobileSearchBtn.addEventListener('click', () => {
            mobileSearchOverlay.style.display = 'block';
            if (mobileSearchInput) {
                mobileSearchInput.focus();
            }
        });

        if (mobileSearchClose) {
            mobileSearchClose.addEventListener('click', () => {
                mobileSearchOverlay.style.display = 'none';
            });
        }

        // Close on overlay click
        mobileSearchOverlay.addEventListener('click', (e) => {
            if (e.target === mobileSearchOverlay) {
                mobileSearchOverlay.style.display = 'none';
            }
        });
    }
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If it's an external link, allow default behavior
            if (href && (href.includes('.html') || href.startsWith('http'))) {
                return;
            }
            
            // For hash links, prevent default
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Find corresponding mobile nav link and activate it
            const section = link.dataset.section;
            const mobileLink = document.querySelector(`.mobile-nav-link[data-section="${section}"]`);
            if (mobileLink) {
                mobileLink.classList.add('active');
            }
        });
    });
}

// CTA Button functionality
function setupCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Scroll to top or navigate to home page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Optional: Show a welcome message
            setTimeout(() => {
                alert('Welcome to TADB! Explore our features and discover amazing Telugu anime content.');
            }, 500);
        });
    }
}

// Social links tracking (optional analytics)
function setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const platform = link.classList.contains('instagram') ? 'Instagram' : 'YouTube';
            console.log(`Social link clicked: ${platform}`);
            
            // Optional: Add analytics tracking here
            // gtag('event', 'social_click', { platform: platform });
        });
    });
}

// Smooth scroll for internal links
function setupSmoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Feature items interaction
function setupFeatureItems() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('click', () => {
            const featureTitle = item.querySelector('h3').textContent;
            console.log(`Feature clicked: ${featureTitle}`);
            
            // Optional: Show more details about the feature
            // You could implement a modal or expand the feature description
        });
    });
}

// Initialize page animations
function initializeAnimations() {
    // Observe elements for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        observer.observe(card);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const mobileSearchInput = document.querySelector('.mobile-search-input');

    function performSearch(searchTerm) {
        if (!searchTerm.trim()) return;

        // Simple search functionality - could be expanded
        console.log(`Search performed: ${searchTerm}`);
        
        // Optional: Implement actual search functionality
        // This could search through page content or redirect to a search page
        alert(`Search functionality coming soon! You searched for: "${searchTerm}"`);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
                // Close mobile search overlay
                const mobileSearchOverlay = document.querySelector('.mobile-search-overlay');
                if (mobileSearchOverlay) {
                    mobileSearchOverlay.style.display = 'none';
                }
            }
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Setup all functionality
    setupMobileMenu();
    setupMobileSearch();
    setupNavigation();
    setupCTAButton();
    setupSocialLinks();
    setupSmoothScroll();
    setupFeatureItems();
    setupSearch();
    initializeAnimations();

    console.log('About page initialized successfully');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('About page hidden');
    } else {
        console.log('About page visible');
    }
});

// Export functions for potential use in other scripts
window.AboutPage = {
    setupMobileMenu,
    setupNavigation,
    setupCTAButton,
    setupSocialLinks
};