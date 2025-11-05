// Creators Page JavaScript - TADB Theme

// Creator data with anime recommendations
const creatorsData = {
    tadb: {
        name: "TADB LIST",
        subtitle: "(Founder)",
        image: "https://blogger.googleusercontent.com/img/a/AVvXsEjMyJdgsufmZrNxfCdxv9X87MdndtuZP1mSaXtiRxeTUVEYKWRzMn6y1ZnrrZ2SEDuyidYa2M4RvY0uAi0KrP-evLJYsv0_YbGAXz3sT1DafCucVsYIq8BNk_9MNeRmvD6nIsFGKNbHISTfX0h4iqR0AecbKy8vl7WR5Y-kJT5-9PjbHTTL5wKIV495Jc8=s16000",
        links: [
            { name: "Instagram", url: "https://www.instagram.com/teluguanime.db/" },
            { name: "YouTube", url: "https://www.youtube.com/@Mugentales" }
        ],
        title: "🏆 TADB Telugu List",
        anime: [
            {
                title: "Demon Slayer - Season 1",
                studio: "Anime-times",
                rating: "⭐ 8.7 (IMDb) · 26 Episodes · Action · Adventure",
                image: "https://u.livechart.me/anime_visuals/local_version/1555/image/6fd1935085eec0022d2c9121716374d4.webp/large.jpg",
                url: "#"
            },
            {
                title: "Death Note",
                studio: "Anime-times",
                rating: "⭐ 9.0 (IMDb) · 37 Episodes · Mystery · Thriller",
                image: "https://u.livechart.me/anime_visuals/local_version/14038/image/a1eceb04646ccd4d25c747fe7e85b302.webp/large.jpg",
                url: "#"
            },
            {
                title: "Dandadan",
                studio: "Crunchyroll",
                rating: "⭐ 8.3 (IMDb) · 24 Episodes · Action · Comedy",
                image: "https://u.livechart.me/anime_visuals/local_version/10337/image/a4be70dfa4ae919f0c2470e1bbffb0b8.webp/large.jpg",
                url: "#"
            },
            {
                title: "Spy x Family",
                studio: "Crunchyroll",
                rating: "⭐ 8.8 (IMDb) · 25 Episodes · Action · Comedy",
                image: "https://u.livechart.me/anime/visual/6875/image/00524cc5d2d7dd8506da05bd4d10d38e.jfif/large.jpg",
                url: "#"
            },
            {
                title: "Haikyu!!",
                studio: "Crunchyroll",
                rating: "⭐ 8.9 (IMDb) · 25 Episodes · Sports · Drama",
                image: "https://u.livechart.me/anime_visuals/local_version/3631/image/465d1f01d81532ff5d9c6947d0b28613.png/large.jpg",
                url: "#"
            },
            {
                title: "Dragon Ball Daima",
                studio: "Crunchyroll",
                rating: "⭐ 8.6 (IMDb) · 153 Episodes · Action · Adventure",
                image: "https://image.tmdb.org/t/p/original/wmrk6mLWDjz3jb210y3QisXUAcr.jpg",
                url: "#"
            }
        ]
    },
    telchi: {
        name: "Telchi Anime",
        subtitle: "(Content Creator)",
        image: "https://i.pinimg.com/736x/b5/7b/be/b57bbe9a012d059160ec0aceff2df802.jpg",
        links: [
            { name: "Instagram", url: "https://www.instagram.com/telchianime/" },
            { name: "YouTube", url: "https://www.youtube.com/@TelchiAnimeofficial" }
        ],
        title: "🏆 Telchi Telugu List",
        anime: [
            {
                title: "Dandadan",
                studio: "Crunchyroll",
                rating: "⭐ 8.3 (IMDb) · 24 Episodes · Action · Comedy",
                image: "https://u.livechart.me/anime_visuals/local_version/10337/image/a4be70dfa4ae919f0c2470e1bbffb0b8.webp/large.jpg",
                url: "#"
            },
            {
                title: "Black Butler Public School",
                studio: "Crunchyroll",
                rating: "⭐ 8.2 (IMDb) · 36 Episodes · Mystery · Supernatural",
                image: "https://u.livechart.me/anime/visual/6884/image/7963459087c881bb8db7eb20830a4ef8.png/large.jpg",
                url: "#"
            },
            {
                title: "SPY x FAMILY",
                studio: "Crunchyroll",
                rating: "⭐ 8.8 (IMDb) · 25 Episodes · Action · Comedy",
                image: "https://u.livechart.me/anime/visual/6875/image/00524cc5d2d7dd8506da05bd4d10d38e.jfif/large.jpg",
                url: "#"
            },
            {
                title: "Gachiakuta",
                studio: "Crunchyroll",
                rating: "⭐ 8.1 (IMDb) · 12 Episodes · Adventure · Comedy",
                image: "https://u.livechart.me/anime_visuals/local_version/14169/image/1c76fdcf1cdd76892b407e54f7fdb542.webp/large.jpg",
                url: "#"
            },
            {
                title: "Vinland Saga",
                studio: "Crunchyroll",
                rating: "⭐ 8.9 (IMDb) · 24 Episodes · Action · Historical",
                image: "https://u.livechart.me/anime_visuals/local_version/2981/image/80070608f5d264e77b0bb4f1fe24096b.webp/large.jpg",
                url: "#"
            },
            {
                title: "Ranking of Kings",
                studio: "Crunchyroll",
                rating: "⭐ 8.7 (IMDb) · 23 Episodes · Fantasy · Adventure",
                image: "https://u.livechart.me/anime_visuals/local_version/213/image/da11f281fa013322c52cf32ae7663437.jpeg/large.jpg",
                url: "#"
            }
        ]
    },
    professor: {
        name: "Professor",
        subtitle: "(TADB Editor)",
        image: "https://i.pinimg.com/736x/5c/7e/d8/5c7ed813dbdb2ec4a76e96e407a7e6c7.jpg",
        links: [
            { name: "Instagram", url: "https://instagram.com/" }
        ],
        title: "🏆 Professor Telugu List",
        anime: [
            {
                title: "ONE PIECE",
                studio: "Crunchyroll",
                rating: "⭐ 9.1 (IMDb) · Ongoing · Adventure · Action",
                image: "https://wallpaperaccess.com/full/9970042.jpg",
                url: "#"
            }
        ]
    },
    rae: {
        name: "Rae",
        subtitle: "(Anime Recommender)",
        image: "https://i.pinimg.com/736x/b8/41/a3/b841a3b8c2e8eb4adce66e3de22f4a2e.jpg",
        links: [
            { name: "Instagram", url: "https://instagram.com/" }
        ],
        title: "🏆 Rae Telugu List",
        anime: [
            {
                title: "NARUTO",
                studio: "Crunchyroll",
                rating: "⭐ 8.7 (IMDb) · 220 Episodes · Action · Adventure",
                image: "https://wallpaperaccess.com/full/9929920.jpg",
                url: "#"
            }
        ]
    }
};

// Switch between different creator lists
function switchList(creatorKey, event) {
    // Update active button
    document.querySelectorAll('.list-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const creator = creatorsData[creatorKey];
    if (!creator) return;

    // Update author card
    updateAuthorCard(creator);
    
    // Update title
    updateListTitle(creator.title);
    
    // Update anime list
    updateAnimeList(creator.anime);
}

// Update author card with creator information
function updateAuthorCard(creator) {
    const authorCard = document.getElementById('authorCard');
    
    const linksHTML = creator.links.map(link => 
        `<a href="${link.url}" target="_blank">${link.name}</a>`
    ).join('');

    authorCard.innerHTML = `
        <img src="${creator.image}" class="author-img" alt="${creator.name}">
        <div class="author-info">
            <h3><b>${creator.name}</b></h3>
            <h3>${creator.subtitle}</h3>
            <div class="author-links">
                ${linksHTML}
            </div>
        </div>
    `;
}

// Update list title
function updateListTitle(title) {
    const listTitle = document.getElementById('listTitle');
    listTitle.textContent = title;
}

// Update anime list with animation
function updateAnimeList(animeList) {
    const animeListContainer = document.getElementById('animeList');
    
    // Show loading state
    animeListContainer.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
        </div>
    `;

    // Simulate loading delay for better UX
    setTimeout(() => {
        const animeHTML = animeList.map((anime, index) => `
            <a class="anime-row" href="${anime.url}" target="_blank" style="animation-delay: ${index * 0.1}s">
                <img src="${anime.image}" alt="${anime.title}">
                <div class="anime-info">
                    <h3>${anime.title}</h3>
                    <h3>${anime.studio}</h3>
                    <p>${anime.rating}</p>
                </div>
            </a>
        `).join('');

        animeListContainer.innerHTML = animeHTML;
    }, 500);
}

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

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const mobileSearchInput = document.querySelector('.mobile-search-input');

    function performSearch(searchTerm) {
        if (!searchTerm.trim()) return;

        // Get current active creator
        const activeBtn = document.querySelector('.list-btn.active');
        if (!activeBtn) return;

        const creatorKey = activeBtn.textContent.toLowerCase().replace(' list', '').replace(' ', '');
        const creator = creatorsData[creatorKey];
        if (!creator) return;

        // Filter anime based on search term
        const filteredAnime = creator.anime.filter(anime => 
            anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            anime.studio.toLowerCase().includes(searchTerm.toLowerCase()) ||
            anime.rating.toLowerCase().includes(searchTerm.toLowerCase())
        );

        updateAnimeList(filteredAnime);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation
    setupMobileMenu();
    setupMobileSearch();
    setupNavigation();
    setupSearch();

    // Initialize with TADB list
    const defaultCreator = creatorsData.tadb;
    updateAuthorCard(defaultCreator);
    updateListTitle(defaultCreator.title);
    updateAnimeList(defaultCreator.anime);

    console.log('Creators page initialized successfully');
});

// Make switchList function globally available
window.switchList = switchList;

// Export for potential use in other scripts
window.CreatorsPage = {
    switchList,
    creatorsData,
    updateAnimeList,
    updateAuthorCard
};