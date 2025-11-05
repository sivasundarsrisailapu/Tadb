// Fast Post Script
const allAnimeData = [
    {
        id: 1,
        title: "Naruto Telugu",
        year: 2023,
        rating: 8.5,
        duration: "24 episodes",
        views: "2.5M",
        genres: ["Action", "Adventure", "Telugu"],
        labels: ["ninja", "anime", "shounen", "popular", "long-running", "martial-arts"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        background: "https://animeargentina.net/wp-content/uploads/2024/03/zenshu-poster.webp",
        description: "A young ninja's journey to become the strongest in his village. Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in the Hidden Leaf Village."
    },
    {
        id: 2,
        title: "Attack on Titan Telugu",
        year: 2023,
        rating: 9.2,
        duration: "75 episodes",
        views: "4.1M",
        genres: ["Action", "Drama", "Telugu"],
        labels: ["titans", "dark", "mature", "psychological", "anime", "survival"],
        poster: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        background: "https://image.tmdb.org/t/p/original/okRnvNLpduDKPUIyZbMxJkeek8D.jpg",
        description: "Humanity fights for survival against giant humanoid creatures."
    }
];

function getAnimeById(id) {
    return allAnimeData.find(anime => anime.id === parseInt(id));
}

function populateAnimeDetails(anime) {
    if (!anime) {
        window.location.href = 'index.html';
        return;
    }

    document.title = `${anime.title} - TADB`;
    document.getElementById('heroImage').src = anime.background;
    document.getElementById('animePoster').src = anime.poster;
    document.getElementById('animeTitle').textContent = anime.title;
    document.getElementById('animeYear').textContent = anime.year;
    document.getElementById('animeDuration').textContent = anime.duration;
    document.getElementById('animeRating').textContent = `⭐ ${anime.rating}`;

    // Update view count
    const viewsElement = document.querySelector('#animeViews .views-number');
    if (viewsElement) {
        viewsElement.textContent = anime.views + ' views';
    }

    const genresContainer = document.getElementById('animeGenres');
    genresContainer.innerHTML = anime.genres.map(genre =>
        `<span class="genre-tag">${genre}</span>`
    ).join('');

    document.getElementById('animeSynopsis').textContent = anime.description;
}

// Fast tab functionality
function setupTabFunctionality() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.onclick = () => {
            const target = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(c => c.style.display = 'none');
            document.getElementById(target + '-content').style.display = 'block';
        };
    });

    document.getElementById('details-content').style.display = 'block';
}

function setupInteractiveButtons() {
    const watchBtn = document.querySelector('.watch-btn');
    if (watchBtn) {
        watchBtn.onclick = () => alert('Watch functionality coming soon!');
    }

    const watchlistBtn = document.querySelector('.watchlist-btn');
    if (watchlistBtn) {
        watchlistBtn.onclick = function () {
            this.textContent = this.textContent.includes('Add') ? '✓ Added' : '+ Add to Watchlist';
        };
    }
}

// Simple YouTube trailer functionality
function changeVideo(videoId, title) {
    const iframe = document.getElementById('mainTrailer');
    const titleElement = document.getElementById('currentVideoTitle');

    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = title;
    }

    if (titleElement) {
        titleElement.textContent = title;
    }

    // Update active state
    document.querySelectorAll('.video-item').forEach(item => {
        item.classList.remove('active');
    });

    // Find and activate the clicked item
    event.currentTarget.classList.add('active');
}

// Setup trailer section
function setupTrailerSection() {
    // Set first item as active
    const firstItem = document.querySelector('.video-item');
    if (firstItem) {
        firstItem.classList.add('active');
    }
}



// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    const selectedAnimeId = localStorage.getItem('selectedAnimeId') || '1';
    const anime = getAnimeById(selectedAnimeId);

    populateAnimeDetails(anime);
    setupTabFunctionality();
    setupInteractiveButtons();
    setupTrailerSection();
    setupThemeToggle();
});

// Simple theme toggle (post page uses saved theme only)
function setupThemeToggle() {
    // Set initial theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}