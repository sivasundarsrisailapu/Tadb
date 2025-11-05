// Shared Search Functionality for All Pages

// Sample anime data for search (this should match your main data)
const searchAnimeData = [
    {
        id: 1,
        title: "Naruto Telugu",
        year: 2023,
        rating: 8.5,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg"
    },
    {
        id: 2,
        title: "Attack on Titan Telugu",
        year: 2023,
        rating: 9.2,
        genres: ["Action", "Drama", "Horror"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg"
    },
    {
        id: 3,
        title: "Demon Slayer Telugu",
        year: 2023,
        rating: 8.8,
        genres: ["Action", "Supernatural", "Drama"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg"
    },
    {
        id: 4,
        title: "One Piece Telugu",
        year: 2023,
        rating: 9.0,
        genres: ["Adventure", "Comedy", "Action"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg"
    },
    {
        id: 5,
        title: "Dragon Ball Z Telugu",
        year: 2023,
        rating: 8.7,
        genres: ["Action", "Adventure", "Martial Arts"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg"
    },
    {
        id: 6,
        title: "My Hero Academia Telugu",
        year: 2023,
        rating: 8.6,
        genres: ["Action", "School", "Superhero"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg"
    }
];

// Universal search functionality
function initializeUniversalSearch() {
    const searchIconBtn = document.getElementById('searchIconBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchOverlayInput');
    const searchBtn = document.getElementById('searchOverlayBtn');
    const searchResults = document.getElementById('searchResults');

    if (!searchIconBtn || !searchOverlay) {
        console.log('Search elements not found on this page');
        return;
    }

    // Open search overlay
    searchIconBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'flex';
        setTimeout(() => {
            searchInput.focus();
        }, 100);
    });

    // Close search overlay
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            closeSearchOverlay();
        });
    }

    // Close on overlay click
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            closeSearchOverlay();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.style.display === 'flex') {
            closeSearchOverlay();
        }
    });

    function closeSearchOverlay() {
        searchOverlay.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
    }

    // Search functionality
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query) {
            const filteredData = searchAnimeData.filter(anime =>
                anime.title.toLowerCase().includes(query) ||
                anime.genres.some(genre => genre.toLowerCase().includes(query))
            );
            
            displaySearchResults(filteredData);
        } else {
            searchResults.innerHTML = '';
        }
    }

    // Display search results
    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="no-results">No anime found matching your search.</p>';
            return;
        }

        const resultsHTML = results.map(anime => `
            <div class="search-result-item" onclick="selectAnimeFromSearch(${anime.id})">
                <img src="${anime.poster}" alt="${anime.title}" class="search-result-image">
                <div class="search-result-info">
                    <h4>${anime.title}</h4>
                    <p>⭐ ${anime.rating} • ${anime.year}</p>
                    <div class="search-result-genres">
                        ${anime.genres.slice(0, 2).map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;
    }

    // Search on button click
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Real-time search
        searchInput.addEventListener('input', performSearch);
    }
}

// Function to select anime from search results
function selectAnimeFromSearch(animeId) {
    localStorage.setItem('selectedAnimeId', animeId);
    
    // Check if we're on the post page
    if (window.location.pathname.includes('post.html')) {
        window.location.reload();
    } else {
        window.location.href = 'post.html';
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeUniversalSearch();
});