// Sample anime data with searchable labels
const animeData = [
    {
        id: 1,
        title: "Naruto Telugu",
        year: 2023,
        rating: 8.5,
        season: "Season 1",
        duration: "24 episodes",
        genres: ["Action", "Adventure", "Drama"],
        labels: ["ninja", "friendship", "shounen", "popular", "long-running", "martial-arts"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A young ninja's journey to become the strongest in his village."
    },
    {
        id: 2,
        title: "Attack on Titan Telugu",
        year: 2023,
        rating: 9.2,
        season: "Final Season",
        duration: "75 episodes",
        genres: ["Action", "Drama", "Horror"],
        labels: ["titans", "dark", "mature", "psychological", "military", "survival"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Humanity fights for survival against giant humanoid creatures."
    },
    {
        id: 3,
        title: "Demon Slayer Telugu",
        year: 2023,
        rating: 8.8,
        season: "Season 3",
        duration: "44 episodes",
        genres: ["Action", "Supernatural", "Drama"],
        labels: ["demons", "Telugu", "sword-fighting", "beautiful-animation", "emotional"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A young boy becomes a demon slayer to save his sister."
    },
    {
        id: 4,
        title: "One Piece Telugu",
        year: 2023,
        rating: 9.0,
        season: "Ongoing",
        duration: "1000+ episodes",
        genres: ["Adventure", "Comedy", "Action"],
        labels: ["Telugu", "treasure", "friendship", "long-running", "comedy", "adventure"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A pirate's quest to find the ultimate treasure."
    },
    {
        id: 5,
        title: "Dragon Ball Z Telugu",
        year: 2023,
        rating: 8.7,
        season: "Complete",
        duration: "291 episodes",
        genres: ["Action", "Adventure", "Martial Arts"],
        labels: ["Telugu", "power-up", "classic", "martial-arts", "space-battles", "legendary"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Goku and friends defend Earth from powerful enemies."
    },
    {
        id: 6,
        title: "My Hero Academia Telugu",
        year: 2023,
        rating: 8.6,
        season: "Season 7",
        duration: "138 episodes",
        genres: ["Action", "School", "Superhero"],
        labels: ["quirks", "superhero", "Telugu", "coming-of-age", "teamwork", "modern"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A boy without powers dreams of becoming a superhero."
    },
    {
        id: 7,
        title: "Jujutsu Kaisen Telugu",
        year: 2024,
        rating: 8.9,
        season: "Season 2",
        duration: "24 episodes",
        genres: ["Action", "Supernatural", "School"],
        labels: ["curses", "jujutsu", "dark-magic", "school", "modern", "intense"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Students battle cursed spirits in modern Japan."
    },
    {
        id: 8,
        title: "Chainsaw Man Telugu",
        year: 2024,
        rating: 8.4,
        season: "Season 1",
        duration: "12 episodes",
        genres: ["Action", "Horror", "Supernatural"],
        labels: ["chainsaw", "devils", "gore", "dark", "violent", "modern"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A young man merges with a chainsaw devil."
    },
    {
        id: 9,
        title: "Spy x Family Telugu",
        year: 2024,
        rating: 8.7,
        season: "Season 2",
        duration: "25 episodes",
        genres: ["Comedy", "Action", "Family"],
        labels: ["spy", "family", "comedy", "wholesome", "slice-of-life", "heartwarming"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A spy, assassin, and telepath form a fake family."
    },
    {
        id: 10,
        title: "Mob Psycho 100 Telugu",
        year: 2024,
        rating: 9.1,
        season: "Complete",
        duration: "37 episodes",
        genres: ["Supernatural", "Comedy", "Action"],
        labels: ["psychic", "school", "comedy", "coming-of-age", "supernatural", "unique-art"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A psychic middle schooler tries to live normally."
    },
    {
        id: 11,
        title: "Death Note Telugu",
        year: 2023,
        rating: 9.0,
        season: "Complete",
        duration: "37 episodes",
        genres: ["Thriller", "Supernatural", "Drama"],
        labels: ["death-note", "psychological", "thriller", "genius", "cat-and-mouse", "dark"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A student finds a supernatural notebook that kills anyone whose name is written in it."
    },
    {
        id: 12,
        title: "Fullmetal Alchemist Telugu",
        year: 2023,
        rating: 9.5,
        season: "Complete",
        duration: "64 episodes",
        genres: ["Adventure", "Drama", "Fantasy"],
        labels: ["alchemy", "brotherhood", "military", "philosophy", "epic", "masterpiece"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Two brothers search for the Philosopher's Stone to restore their bodies."
    },
    {
        id: 13,
        title: "Hunter x Hunter Telugu",
        year: 2023,
        rating: 9.3,
        season: "Complete",
        duration: "148 episodes",
        genres: ["Adventure", "Action", "Fantasy"],
        labels: ["hunters", "adventure", "friendship", "complex", "strategic", "long-running"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A young boy searches for his father who is a legendary Hunter."
    },
    {
        id: 14,
        title: "Tokyo Ghoul Telugu",
        year: 2023,
        rating: 8.2,
        season: "Complete",
        duration: "48 episodes",
        genres: ["Horror", "Action", "Supernatural"],
        labels: ["ghouls", "cannibalism", "dark", "transformation", "urban-fantasy", "gore"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A college student becomes half-ghoul after a deadly encounter."
    },
    {
        id: 15,
        title: "Bleach Telugu",
        year: 2023,
        rating: 8.6,
        season: "Ongoing",
        duration: "366+ episodes",
        genres: ["Action", "Supernatural", "Adventure"],
        labels: ["soul-reapers", "spirits", "sword-fighting", "long-running", "supernatural", "battles"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A teenager gains Soul Reaper powers to protect the living and dead."
    },
    {
        id: 16,
        title: "Code Geass Telugu",
        year: 2023,
        rating: 9.2,
        season: "Complete",
        duration: "50 episodes",
        genres: ["Mecha", "Drama", "Military"],
        labels: ["mecha", "rebellion", "strategy", "politics", "anti-hero", "complex"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A prince gains the power of absolute obedience to rebel against an empire."
    },
    {
        id: 17,
        title: "Cowboy Bebop Telugu",
        year: 2023,
        rating: 8.9,
        season: "Complete",
        duration: "26 episodes",
        genres: ["Space", "Action", "Drama"],
        labels: ["space-western", "bounty-hunters", "jazz", "episodic", "classic", "mature"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Bounty hunters travel through space in 2071."
    },
    {
        id: 18,
        title: "Violet Evergarden Telugu",
        year: 2023,
        rating: 8.8,
        season: "Complete",
        duration: "13 episodes",
        genres: ["Drama", "Romance", "Slice of Life"],
        labels: ["emotional", "beautiful", "post-war", "letters", "healing", "tearjerker"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A former soldier learns to write letters and understand emotions."
    },
    {
        id: 19,
        title: "Your Name Telugu",
        year: 2023,
        rating: 8.4,
        season: "Movie",
        duration: "106 minutes",
        genres: ["Romance", "Drama", "Supernatural"],
        labels: ["body-swap", "romance", "beautiful", "emotional", "movie", "time-travel"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies."
    },
    {
        id: 20,
        title: "Spirited Away Telugu",
        year: 2023,
        rating: 9.4,
        season: "Movie",
        duration: "125 minutes",
        genres: ["Adventure", "Family", "Fantasy"],
        labels: ["studio-ghibli", "fantasy", "family", "magical", "movie", "classic"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A girl enters a world ruled by gods and witches where humans are changed into beasts."
    },
    {
        id: 21,
        title: "Princess Mononoke Telugu",
        year: 2023,
        rating: 9.1,
        season: "Movie",
        duration: "134 minutes",
        genres: ["Adventure", "Drama", "Fantasy"],
        labels: ["studio-ghibli", "nature", "war", "environmental", "movie", "epic"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A prince becomes involved in a struggle between forest gods and humans."
    }
];

const recommendedData = [
    {
        id: 11,
        title: "Spirited Away Telugu",
        year: 2023,
        rating: 9.3,
        season: "Movie",
        duration: "2h 5m",
        genres: ["Animation", "Family", "Fantasy"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A girl enters a world ruled by gods and witches."
    },
    {
        id: 12,
        title: "Princess Mononoke Telugu",
        year: 2023,
        rating: 8.9,
        season: "Movie",
        duration: "2h 14m",
        genres: ["Animation", "Adventure", "Drama"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A prince becomes involved in a struggle between forest gods and humans."
    },
    {
        id: 13,
        title: "Your Name Telugu",
        year: 2023,
        rating: 8.4,
        season: "Movie",
        duration: "1h 46m",
        genres: ["Animation", "Romance", "Drama"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Two teenagers share a profound, magical connection."
    },
    {
        id: 14,
        title: "Akira Telugu",
        year: 2023,
        rating: 8.0,
        season: "Movie",
        duration: "2h 4m",
        genres: ["Animation", "Action", "Sci-Fi"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A secret military project endangers Neo-Tokyo."
    },
    {
        id: 15,
        title: "Death Note Telugu",
        year: 2024,
        rating: 9.0,
        season: "Complete",
        duration: "37 episodes",
        genres: ["Thriller", "Supernatural", "Drama"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "A student finds a supernatural notebook that kills people."
    }
];

// Function to create movie card HTML
function createMovieCard(anime) {
    const seasonClass = anime.season === 'Ongoing' ? 'season-badge ongoing' : 'season-badge';
    return `
        <div class="movie-card" onclick="openMovieDetails(${anime.id})">
            <div class="movie-poster">
                <img src="${anime.poster}" alt="${anime.title}">
                <div class="movie-rating">⭐ ${anime.rating}</div>
                <button class="play-button">▶</button>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${anime.title}</h3>
                <div class="movie-meta">
                    <span class="year-badge">${anime.year}</span>
                    ${anime.season ? `<span class="${seasonClass}">${anime.season}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to populate movie grids
function populateMovieGrid(containerId, data) {
    console.log('Populating grid:', containerId, 'with', data.length, 'items');
    const container = document.getElementById(containerId);
    console.log('Container found:', !!container);
    
    if (container) {
        const html = data.map(anime => createMovieCard(anime)).join('');
        console.log('Generated HTML length:', html.length);
        container.innerHTML = html;
        console.log('Grid populated successfully');
    } else {
        console.error('Container not found:', containerId);
    }
}

// Function to open movie details (will redirect to post page)
function openMovieDetails(animeId) {
    // Store the selected anime ID in localStorage
    localStorage.setItem('selectedAnimeId', animeId);
    // Redirect to post page
    window.location.href = 'post.html';
}



// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const filteredData = animeData.filter(anime =>
                anime.title.toLowerCase().includes(query) ||
                anime.genres.some(genre => genre.toLowerCase().includes(query)) ||
                anime.labels.some(label => label.toLowerCase().includes(query))
            );
            populateMovieGrid('moviesGrid', filteredData);
            // Update pagination visibility based on filtered results
            updatePaginationVisibility(filteredData.length);
        } else {
            // Show paginated results when search is cleared
            const paginatedData = getPaginatedData(animeData, currentPage, itemsPerPage);
            populateMovieGrid('moviesGrid', paginatedData);
            updatePaginationVisibility(animeData.length);
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
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
            setTimeout(() => {
                mobileSearchInput.focus();
            }, 100);
        });

        mobileSearchClose.addEventListener('click', () => {
            mobileSearchOverlay.style.display = 'none';
            mobileSearchInput.value = '';
        });

        // Search functionality for mobile
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = mobileSearchInput.value.toLowerCase().trim();
                if (query) {
                    const filteredData = animeData.filter(anime =>
                        anime.title.toLowerCase().includes(query) ||
                        anime.genres.some(genre => genre.toLowerCase().includes(query)) ||
                        anime.labels.some(label => label.toLowerCase().includes(query))
                    );
                    populateMovieGrid('moviesGrid', filteredData);
                    // Update pagination visibility based on filtered results
                    updatePaginationVisibility(filteredData.length);
                } else {
                    // Show paginated results when search is cleared
                    const paginatedData = getPaginatedData(animeData, currentPage, itemsPerPage);
                    populateMovieGrid('moviesGrid', paginatedData);
                    updatePaginationVisibility(animeData.length);
                }
                mobileSearchOverlay.style.display = 'none';
            }
        });

        // Close on overlay click
        mobileSearchOverlay.addEventListener('click', (e) => {
            if (e.target === mobileSearchOverlay) {
                mobileSearchOverlay.style.display = 'none';
                mobileSearchInput.value = '';
            }
        });
    }
}



// Function to filter content by section
function filterContentBySection(section) {
    let filteredData = animeData;

    switch (section) {
        case 'anime':
            filteredData = animeData.filter(anime =>
                anime.genres.some(genre =>
                    ['Action', 'Adventure', 'Supernatural', 'School'].includes(genre)
                )
            );
            break;
        case 'movies':
            filteredData = animeData.filter(anime =>
                anime.season === 'Movie' || anime.duration.includes('h')
            );
            break;
        case 'series':
            filteredData = animeData.filter(anime =>
                anime.season.includes('Season') || anime.season === 'Ongoing' || anime.season === 'Complete'
            );
            break;
        case 'schedule':
            // Show recently added or upcoming anime
            filteredData = animeData.filter(anime => anime.year === 2024);
            break;
        case 'voice-artists':
            // Show anime with notable voice acting
            filteredData = animeData.filter(anime =>
                anime.genres.some(genre => ['Drama', 'Comedy'].includes(genre))
            );
            break;
        case 'creators':
            // Show anime from notable creators
            filteredData = animeData.filter(anime => anime.rating >= 8.5);
            break;
        case 'about':
            // Show featured/popular anime
            filteredData = animeData.filter(anime => anime.rating >= 9.0);
            break;
        default:
            filteredData = animeData;
    }

    // Reset to first page and show filtered results
    currentPage = 1;
    const paginatedData = getPaginatedData(filteredData, currentPage, itemsPerPage);
    populateMovieGrid('moviesGrid', paginatedData);

    // Update pagination buttons
    updatePaginationButtons();
}

// Pagination variables
let currentPage = 1;
const itemsPerPage = 18; // 18 items per page

// Function to get paginated data
function getPaginatedData(data, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
}

// Function to setup pagination
function setupPagination() {
    const pageButtons = document.querySelectorAll('.page-btn');

    pageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            pageButtons.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Get page number and update current page
            currentPage = parseInt(btn.dataset.page);

            // Update movie grid with paginated data
            const paginatedData = getPaginatedData(animeData, currentPage, itemsPerPage);
            populateMovieGrid('moviesGrid', paginatedData);
        });
    });
}

// Function to update pagination buttons
function updatePaginationButtons() {
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.page) === currentPage) {
            btn.classList.add('active');
        }
    });
}

// Function to show/hide pagination based on data length
function updatePaginationVisibility(dataLength) {
    const paginationSection = document.querySelector('.pagination-section');
    if (paginationSection) {
        if (dataLength > itemsPerPage) {
            paginationSection.style.display = 'block';
        } else {
            paginationSection.style.display = 'none';
        }
    }
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

        mobileMenuClose.addEventListener('click', () => {
            mobileMenuOverlay.style.display = 'none';
        });

        // Handle mobile navigation links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all links
                mobileNavLinks.forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                // Find corresponding desktop nav link and activate it
                const section = link.dataset.section;
                const desktopLink = document.querySelector(`.nav-link[data-section="${section}"]`);
                if (desktopLink) {
                    desktopLink.classList.add('active');
                }

                // Filter content based on section
                filterContentBySection(section);

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

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
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

            // Filter content based on section
            filterContentBySection(section);
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, anime data length:', animeData.length);
    
    // Populate movie grids with first page
    const paginatedData = getPaginatedData(animeData, currentPage, itemsPerPage);
    console.log('Paginated data:', paginatedData.length, 'items');
    
    populateMovieGrid('moviesGrid', paginatedData);

    // Show/hide pagination based on total items
    updatePaginationVisibility(animeData.length);

    // Setup interactive features
    setupSearch();
    setupMobileSearch();
    setupMobileMenu();
    setupPagination();
    setupNavigation();
    setupThemeToggle();

    // Add smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Simple theme toggle for mobile menu
function setupThemeToggle() {
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateMobileThemeButton(savedTheme);
    
    if (mobileThemeToggle) {
        mobileThemeToggle.onclick = function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateMobileThemeButton(newTheme);
        };
    }
}

function updateMobileThemeButton(theme) {
    const icon = document.querySelector('.mobile-theme-icon');
    const text = document.querySelector('.mobile-theme-text');
    
    if (icon && text) {
        if (theme === 'dark') {
            icon.textContent = '☀️';
            text.textContent = 'Light Mode';
        } else {
            icon.textContent = '🌙';
            text.textContent = 'Dark Mode';
        }
    }
}