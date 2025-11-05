// Voice Cast JavaScript - Adapted for TADB
(function () {
    const section = document.querySelector('.voice-cast-section');
    if (!section) return;

    const switchBtns = section.querySelectorAll('.voice-switch-btn');
    const profiles = section.querySelectorAll('.voice-cast-profile');
    let currentPopup = null;
    let clickTimeout = null;

    // Initialize - Show first cast member by default
    if (switchBtns.length > 0 && profiles.length > 0) {
        switchBtns[0].classList.add('active');
        profiles[0].classList.add('active');
    }

    // Switch between cast members
    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and profiles
            switchBtns.forEach(b => b.classList.remove('active'));
            profiles.forEach(profile => profile.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding profile
            const target = btn.getAttribute('data-target');
            const targetProfile = section.querySelector('#' + target);
            if (targetProfile) {
                targetProfile.classList.add('active');
            }

            // Remove any existing popup
            removePopup();
        });
    });

    // Remove popup function
    function removePopup() {
        if (currentPopup) {
            currentPopup.classList.remove('show');
            setTimeout(() => {
                if (currentPopup && currentPopup.parentNode) {
                    currentPopup.remove();
                }
                currentPopup = null;
            }, 300);
        }
    }

    // Create popup function
    function createPopup(char, anime, rect) {
        const popup = document.createElement('div');
        popup.className = 'voice-popup';
        popup.innerHTML = `
            <button class="voice-popup-close">×</button>
            <div class="voice-popup-title">${char}</div>
            <div class="voice-popup-anime">${anime}</div>
            <div class="voice-popup-tag">Voice Cast</div>
        `;

        document.body.appendChild(popup);

        // Position popup
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const scrollX = window.scrollX || document.documentElement.scrollLeft;
        const pRect = popup.getBoundingClientRect();

        let left = rect.left + rect.width / 2 - pRect.width / 2 + scrollX;
        left = Math.max(15, Math.min(left, window.innerWidth + scrollX - pRect.width - 15));

        let top = rect.top - pRect.height - 15 + scrollY;
        if (top < scrollY + 15) {
            top = rect.bottom + 15 + scrollY;
        }

        popup.style.left = left + 'px';
        popup.style.top = top + 'px';

        // Close button event
        popup.querySelector('.voice-popup-close').addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            removePopup();
        });

        // Prevent popup from closing when clicked
        popup.addEventListener('click', e => e.stopPropagation());

        currentPopup = popup;
        
        // Show popup with animation
        requestAnimationFrame(() => {
            if (popup && popup.parentNode) {
                popup.classList.add('show');
            }
        });
    }

    // Character card click handler
    section.addEventListener('click', e => {
        const card = e.target.closest('.voice-character-card');
        if (!card) return;

        e.preventDefault();
        e.stopPropagation();

        // Prevent multiple rapid clicks
        if (clickTimeout) return;
        clickTimeout = setTimeout(() => clickTimeout = null, 300);

        const char = card.dataset.char;
        const anime = card.dataset.anime;

        // If same character popup is already open, don't recreate
        if (currentPopup) {
            const currentChar = currentPopup.querySelector('.voice-popup-title').textContent;
            if (currentChar === char) return;
        }

        // Remove existing popup and create new one
        removePopup();
        setTimeout(() => {
            const rect = card.getBoundingClientRect();
            createPopup(char, anime, rect);
        }, 50);
    });

    // Close popup when clicking outside
    document.addEventListener('click', e => {
        if (currentPopup &&
            !e.target.closest('.voice-cast-section') &&
            !e.target.closest('.voice-popup')) {
            removePopup();
        }
    });

    // Close popup on escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && currentPopup) {
            removePopup();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (currentPopup) {
            removePopup();
        }
    });

})();

// Theme integration with existing TADB theme system
document.addEventListener('DOMContentLoaded', function () {
    const voiceCastSection = document.querySelector('.voice-cast-section');
    if (!voiceCastSection) return;

    // Sync with existing theme
    function syncTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'default';
        voiceCastSection.setAttribute('data-theme', currentTheme);
    }

    // Initial sync
    syncTheme();

    // Watch for theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                syncTheme();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
});

// Mobile menu integration (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileSearchOverlay = document.querySelector('.mobile-search-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileSearchClose = document.querySelector('.mobile-search-close');

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.style.display = 'block';
        });
    }

    if (mobileSearchBtn && mobileSearchOverlay) {
        mobileSearchBtn.addEventListener('click', () => {
            mobileSearchOverlay.style.display = 'block';
        });
    }

    if (mobileMenuClose && mobileMenuOverlay) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenuOverlay.style.display = 'none';
        });
    }

    if (mobileSearchClose && mobileSearchOverlay) {
        mobileSearchClose.addEventListener('click', () => {
            mobileSearchOverlay.style.display = 'none';
        });
    }

    // Close overlays when clicking outside
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.style.display = 'none';
            }
        });
    }

    if (mobileSearchOverlay) {
        mobileSearchOverlay.addEventListener('click', (e) => {
            if (e.target === mobileSearchOverlay) {
                mobileSearchOverlay.style.display = 'none';
            }
        });
    }
});