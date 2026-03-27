// ============================================
// MOVIEFLIX - Netflix Clone JavaScript
// Professional Movie Recommendation System
// ============================================

// Movie Database
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: ["scifi", "action", "thriller"],
        duration: "2h 28m",
        language: "English",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Marion Cotillard, Tom Hardy",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. This mind-bending thriller takes you through multiple layers of dreams.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        match: 98
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: ["action", "drama", "thriller"],
        duration: "2h 32m",
        language: "English",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        match: 95
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: ["scifi", "drama"],
        duration: "2h 49m",
        language: "English",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. An epic journey through space and time that explores love and sacrifice.",
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
        match: 97
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: ["drama", "thriller"],
        duration: "2h 34m",
        language: "English",
        director: "Quentin Tarantino",
        cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        match: 92
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: ["drama"],
        duration: "2h 22m",
        language: "English",
        director: "Frank Darabont",
        cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. A powerful story of hope and friendship.",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        match: 96
    },
    {
        id: 6,
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        genre: ["action", "scifi"],
        duration: "3h 1m",
        language: "English",
        director: "Russo Brothers",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Scarlett Johansson",
        description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
        match: 94
    },
    {
        id: 7,
        title: "The Conjuring",
        year: 2013,
        rating: 7.5,
        genre: ["horror", "thriller"],
        duration: "1h 52m",
        language: "English",
        director: "James Wan",
        cast: "Vera Farmiga, Patrick Wilson, Lili Taylor",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Based on true events.",
        poster: "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?w=400&h=600&fit=crop",
        match: 88
    },
    {
        id: 8,
        title: "La La Land",
        year: 2016,
        rating: 8.0,
        genre: ["romance", "drama", "comedy"],
        duration: "2h 8m",
        language: "English",
        director: "Damien Chazelle",
        cast: "Ryan Gosling, Emma Stone, John Legend",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        match: 91
    },
    {
        id: 9,
        title: "John Wick",
        year: 2014,
        rating: 7.4,
        genre: ["action", "thriller"],
        duration: "1h 41m",
        language: "English",
        director: "Chad Stahelski",
        cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him. An action-packed revenge thriller.",
        poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        match: 89
    },
    {
        id: 10,
        title: "The Hangover",
        year: 2009,
        rating: 7.7,
        genre: ["comedy"],
        duration: "1h 40m",
        language: "English",
        director: "Todd Phillips",
        cast: "Bradley Cooper, Ed Helms, Zach Galifianakis",
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. A hilarious comedy adventure.",
        poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
        match: 85
    },
    {
        id: 11,
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        genre: ["thriller", "drama"],
        duration: "2h 12m",
        language: "Korean",
        director: "Bong Joon-ho",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Oscar-winning masterpiece.",
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        match: 93
    },
    {
        id: 12,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: ["action", "scifi"],
        duration: "2h 16m",
        language: "English",
        director: "Wachowski Sisters",
        cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
        match: 96
    },
    {
        id: 13,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: ["drama", "romance"],
        duration: "2h 22m",
        language: "English",
        director: "Robert Zemeckis",
        cast: "Tom Hanks, Robin Wright, Gary Sinise",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an extraordinary life story.",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
        match: 90
    },
    {
        id: 14,
        title: "Get Out",
        year: 2017,
        rating: 7.7,
        genre: ["horror", "thriller"],
        duration: "1h 44m",
        language: "English",
        director: "Jordan Peele",
        cast: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception leads to a series of horrifying discoveries.",
        poster: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&h=600&fit=crop",
        match: 87
    },
    {
        id: 15,
        title: "Deadpool",
        year: 2016,
        rating: 8.0,
        genre: ["action", "comedy"],
        duration: "1h 48m",
        language: "English",
        director: "Tim Miller",
        cast: "Ryan Reynolds, Morena Baccarin, Ed Skrein",
        description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
        poster: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=400&h=600&fit=crop",
        match: 86
    },
    {
        id: 16,
        title: "Titanic",
        year: 1997,
        rating: 7.9,
        genre: ["romance", "drama"],
        duration: "3h 14m",
        language: "English",
        director: "James Cameron",
        cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        match: 84
    },
    {
        id: 17,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: ["crime", "drama"],
        duration: "2h 55m",
        language: "English",
        director: "Francis Ford Coppola",
        cast: "Marlon Brando, Al Pacino, James Caan",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        match: 84
    },
    {
        id: 18,
        title: "Titanic",
        year: 1997,
        rating: 7.9,
        genre: ["romance", "drama"],
        duration: "3h 14m",
        language: "English",
        director: "James Cameron",
        cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        match: 84
    }
];

// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.getElementById('navbar');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('movieModal');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toast');
const backToTop = document.getElementById('backToTop');
const addToListBtn = document.getElementById('addToListBtn');
const likeBtn = document.getElementById('likeBtn');
const shareBtn = document.getElementById('shareBtn');

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// ============================================
// MOVIE CARD CREATION FUNCTIONS
// ============================================

// Create standard movie card
function createMovieCard(movie) {
    return `
        <div class="movie-card" onclick="openModal(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <div class="movie-overlay">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-rating">
                        <i class="fas fa-star"></i> ${movie.rating}
                    </span>
                    <span>${movie.year}</span>
                </div>
                <p class="movie-genre">${movie.genre.join(' • ')}</p>
                <p class="movie-desc">${movie.description}</p>
                <div class="movie-actions">
                    <button class="action-btn play" onclick="event.stopPropagation(); playMovie(${movie.id})">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); addToMyList(${movie.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="action-btn" onclick="event.stopPropagation(); likeMovie(${movie.id})">
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create Top 10 card
function createTop10Card(movie, index) {
    return `
        <div class="top10-card" onclick="openModal(${movie.id})">
            <span class="top10-number">${index + 1}</span>
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
        </div>
    `;
}

// Create recommendation card
function createRecCard(movie) {
    return `
        <div class="rec-card" onclick="openModal(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <div class="rec-info">
                <span class="match-score">${movie.match}% Match</span>
                <h4>${movie.title}</h4>
                <p>${movie.year} • ${movie.genre[0]}</p>
            </div>
        </div>
    `;
}

// ============================================
// POPULATE MOVIES
// ============================================
function populateMovies() {
    // Trending Movies
    const trendingContainer = document.getElementById('trendingMovies');
    trendingContainer.innerHTML = movies.slice(0, 10).map(m => createMovieCard(m)).join('');
    
    // Top 10 Movies
    const top10Container = document.getElementById('top10Movies');
    const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
    top10Container.innerHTML = sortedByRating.slice(0, 10).map((m, i) => createTop10Card(m, i)).join('');
    
    // Action Movies
    const actionContainer = document.getElementById('actionMovies');
    const actionMovies = movies.filter(m => m.genre.includes('action'));
    actionContainer.innerHTML = actionMovies.map(m => createMovieCard(m)).join('');
    
    // Comedy Movies
    const comedyContainer = document.getElementById('comedyMovies');
    const comedyMovies = movies.filter(m => m.genre.includes('comedy'));
    comedyContainer.innerHTML = comedyMovies.map(m => createMovieCard(m)).join('');
    
    // Horror Movies
    const horrorContainer = document.getElementById('horrorMovies');
    const horrorMovies = movies.filter(m => m.genre.includes('horror') || m.genre.includes('thriller'));
    horrorContainer.innerHTML = horrorMovies.map(m => createMovieCard(m)).join('');
    
    // New Releases (sorted by year)
    const newReleasesContainer = document.getElementById('newReleases');
    const newReleases = [...movies].sort((a, b) => b.year - a.year);
    newReleasesContainer.innerHTML = newReleases.slice(0, 10).map(m => createMovieCard(m)).join('');
    
    // Recommendations (sorted by match score)
    const recsContainer = document.getElementById('recommendations');
    const recs = [...movies].sort((a, b) => b.match - a.match);
    recsContainer.innerHTML = recs.slice(0, 8).map(m => createRecCard(m)).join('');
}

// ============================================
// GENRE FILTER
// ============================================
document.querySelectorAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const genre = btn.dataset.genre;
        let filtered = genre === 'all' ? movies : movies.filter(m => m.genre.includes(genre));
        
        // Update trending section with filtered results
        const trendingContainer = document.getElementById('trendingMovies');
        
        if (filtered.length > 0) {
            trendingContainer.innerHTML = filtered.map(m => createMovieCard(m)).join('');
        } else {
            trendingContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-secondary); width: 100%;">
                    <i class="fas fa-film" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
                    <p>No movies found in this genre.</p>
                </div>
            `;
        }
        
        showToast(`Showing ${genre === 'all' ? 'all' : genre} movies`, 'info');
    });
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length > 0) {
            const filtered = movies.filter(m => 
                m.title.toLowerCase().includes(query) ||
                m.genre.some(g => g.includes(query)) ||
                m.director.toLowerCase().includes(query) ||
                m.cast.toLowerCase().includes(query) ||
                m.year.toString().includes(query)
            );
            
            const trendingContainer = document.getElementById('trendingMovies');
            
            if (filtered.length > 0) {
                trendingContainer.innerHTML = filtered.map(m => createMovieCard(m)).join('');
                showToast(`Found ${filtered.length} result(s)`, 'success');
            } else {
                trendingContainer.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: var(--text-secondary); width: 100%;">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
                        <p>No movies found for "${query}"</p>
                        <p style="font-size: 0.85rem; margin-top: 10px;">Try searching by title, genre, director, or actor</p>
                    </div>
                `;
            }
        } else {
            populateMovies();
        }
    }, 300);
});

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    
    // Populate modal content
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalRating').textContent = movie.rating;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalDuration').textContent = movie.duration;
    document.getElementById('modalLanguage').textContent = movie.language;
    document.getElementById('modalDesc').textContent = movie.description;
    document.getElementById('modalDirector').textContent = movie.director;
    document.getElementById('modalGenre').textContent = movie.genre.map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(', ');
    document.getElementById('modalCast').textContent = movie.cast;
    
    // Add genre tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = movie.genre.map(g => 
        `<span class="modal-tag">${g.charAt(0).toUpperCase() + g.slice(1)}</span>`
    ).join('');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal close button
modalClose.addEventListener('click', closeModal);

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// ACTION FUNCTIONS
// ============================================
function playMovie(id) {
    const movie = movies.find(m => m.id === id);
    showToast(`Playing "${movie.title}"...`, 'success');
}

function addToMyList(id) {
    const movie = movies.find(m => m.id === id);
    showToast(`"${movie.title}" added to your list!`, 'success');
}

function likeMovie(id) {
    const movie = movies.find(m => m.id === id);
    showToast(`You liked "${movie.title}"!`, 'success');
}

// Modal buttons
addToListBtn.addEventListener('click', () => {
    showToast('Added to your list!', 'success');
});

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    if (likeBtn.classList.contains('liked')) {
        likeBtn.style.color = '#e50914';
        showToast('Added to favorites!', 'success');
    } else {
        likeBtn.style.color = '';
        showToast('Removed from favorites', 'info');
    }
});

shareBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: document.getElementById('modalTitle').textContent,
            text: 'Check out this movie on MovieFlix!',
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
    }
});

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = 'success') {
    const toastIcon = document.getElementById('toastIcon');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    
    // Change icon based on type
    if (type === 'success') {
        toastIcon.className = 'fas fa-check-circle';
    } else if (type === 'error') {
        toastIcon.className = 'fas fa-times-circle';
    } else if (type === 'info') {
        toastIcon.className = 'fas fa-info-circle';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// BACK TO TOP
// ============================================
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    populateMovies();
    
    // Add loading animation
    setTimeout(() => {
        document.querySelectorAll('.loading').forEach(el => {
            el.style.display = 'none';
        });
    }, 500);
});

// ============================================
// HORIZONTAL SCROLL WITH MOUSE WHEEL
// ============================================
document.querySelectorAll('.movies-row').forEach(row => {
    row.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            row.scrollLeft += e.deltaY;
        }
    });
});

// Console welcome message
console.log('%c🎬 MovieFlix', 'font-size: 24px; font-weight: bold; color: #e50914;');
console.log('%cWelcome to MovieFlix - Your Movie Recommendation System!', 'font-size: 14px; color: #b3b3b3;');



// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React, { useCallback, useState } from 'react';
// import { useTheme } from 'react-native-paper';
// import { useFocusEffect } from '@react-navigation/native';
// import BaseUrl from '../../services/api/BaseApi';
// import Loader from '../../components/Loader';
// import { size } from '../../constants/size';
// import { useSnackbar } from '../../context/SnackbarContext';
// import { timestamp } from '../../services/helpers/timestamp';
// import { useNavigation } from '@react-navigation/native';
// import { routes } from '../../navigation/routes/routes';
// import { Buffer } from 'buffer';


// const MyGroups = () => {
//   const theme = useTheme();
//   const { showSnackbar } = useSnackbar();
//   const [groups, setGroups] = useState([]);
//   // const [groupImages, setGroupImages] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();


//   const fetchGroupImage = async (imageUrl) => {
//   try {
//     const response = await BaseUrl.get(`/social-media${imageUrl}`, {
//       responseType: 'arraybuffer',
//     });

//     const base64 = Buffer.from(response.data, 'binary').toString('base64');
//     return `data:image/jpeg;base64,${base64}`;
//   } catch (error) {
//     showSnackbar('Error fetching group image!');
//   }
// };

//   const fetchAllGroupImages = async groupsList => {
//     const imageMap = {};

//     await Promise.all(
//       groupsList.map(async group => {
//         if (group.image) {
//           const imageUri = await fetchGroupImage(group.image);
//           imageMap[group.id] = imageUri;
//         }
//       }),
//     );

//     setGroupImages(imageMap);
//   };

//  const GetMyGroups = async () => {
//   setLoading(true);
//   try {
//     const response = await BaseUrl.get('/social-media/fetchUserGroups');
//     const groupList = response?.data?.groupList || [];

//     // Fetch image URI for each group
//     const updatedGroups = await Promise.all(
//       groupList.map(async (group) => {
//         if (group.image) {
//           const uri = await fetchGroupImage(group.image);
//           return { ...group, imageUri: uri };
//         }
//         return group;
//       })
//     );

//     setGroups(updatedGroups);
//   } catch (error) {
//     showSnackbar('Failed to fetch groups!');
//   } finally {
//     setLoading(false);
//   }
// };

//   useFocusEffect(
//     useCallback(() => {
//       GetMyGroups();
//     }, []),
//   );

//   return (
//     <View
//       style={[styles.container, { backgroundColor: theme.colors.background }]}
//     >
//       {loading ? (
//         <View style={styles.loaderWrap}>
//           <Loader size={size.iconLg} color={theme.colors.primary} />
//         </View>
//       ) : (
//         <FlatList
//           data={groups}
//           keyExtractor={item => item.id.toString()}
//           contentContainerStyle={{ padding: 16 }}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[
//                 styles.card,
//                 { borderBottomColor: theme.colors.tertiary },
//               ]}
//               activeOpacity={0.8}
//               onPress={() =>
//                 navigation.navigate(routes.GroupsChattingScreen, {
//                   groupId: item.id,
//                   groupName: item.name,
//                   groupImage: item.imageUri, 
//                 })
//               }
//             >

//               <View style={styles.row}>
//                <Image
//   source={
//     item.imageUri
//       ? { uri: item.imageUri }
//       : require('../../assets/images/profileDefault.png')
//   }
//   style={styles.groupImg}
//   resizeMode="cover"
// />

//                 <View style={{ flex: 1 }}>
//                   <Text
//                     style={[
//                       theme.fonts.titleMedium,
//                       { color: theme.colors.onBackground },
//                     ]}
//                   >
//                     {item.name}
//                   </Text>

//                   <View style={styles.metaRow}>
//                     <Text style={{ color: theme.colors.primary }}>
//                       {item.groupType}
//                     </Text>

//                     <Text style={{ color: theme.colors.onSecondary }}>
//                       {timestamp(item.createdAt)}
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//           ListEmptyComponent={() => (
//             <Text
//               style={{
//                 textAlign: 'center',
//                 marginTop: 40,
//                 color: theme.colors.onBackground,
//               }}
//             >
//               No Groups Found
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default MyGroups;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loaderWrap: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   groupImg: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   metaRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 6,
//   },
// });






// import { useContext, useEffect, useRef, useState } from 'react';
// import {
//   DeviceEventEmitter,
//   FlatList,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { useTheme } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { size } from '../../constants/size';
// import { FetchSingleFriend } from '../../services/api/FriendsApi';
// import { AuthContext } from '../../context/AuthContext';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import { FetchAllChats } from '../../services/api/ChatsApi';
// import { useSnackbar } from '../../context/SnackbarContext';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Loader from '../../components/Loader';
// import { routes } from '../../navigation/routes/routes';
// import { useSelector } from 'react-redux';
// import { CHAT_THEMES } from '../../constants/theme/ChattingTheme';
// import { timestamp } from '../../services/helpers/timestamp';

// const ChattingScreen = () => {
//   const selectedTheme = useSelector(
//     state => state.chatBackground.selectedTheme,
//   );
//   const chatTheme = CHAT_THEMES[selectedTheme] || CHAT_THEMES.default;
//   const route = useRoute();
//   const { id } = route.params;
//   const theme = useTheme();
//   const navigation = useNavigation();
//   const { user } = useContext(AuthContext);
//   const { showSnackbar } = useSnackbar();
//   const insets = useSafeAreaInsets();
//   const [friendDetails, setFriendDetails] = useState({});
//   const [chatText, setChatText] = useState('');
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [allChats, setAllChats] = useState([]);
//   const [loadingChats, setLoadingChats] = useState(true);
//   const [connectionStatus, setConnectionStatus] = useState('Connecting…');
//   const socketRef = useRef(null);
//   const inputRef = useRef(null);
//   const flatListRef = useRef(null);
//   const friendIdRef = useRef(null);

//   const combinedChats = [...allChats, ...messages].sort(
//     (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
//   );

//   useEffect(() => {
//     if (friendDetails?.id) {
//       friendIdRef.current = friendDetails.id;
//     }
//   }, [friendDetails]);

//   useEffect(() => {
//     if (flatListRef.current) {
//       flatListRef.current.scrollToEnd({ animated: true });
//     }
//   }, [combinedChats]);

//   const GetSingleFriendDetails = async () => {
//     try {
//       const response = await FetchSingleFriend(id);
//       setFriendDetails(response);
//     } catch (error) {
//       showSnackbar('Error fetching friend details!');
//     }
//   };

//   useEffect(() => {
//     GetSingleFriendDetails();
//   }, [id]);

//   useEffect(() => {
//     if (id) {
//       GetChats();
//     }
//   }, [id]);

//   const GetChats = async () => {
//     setLoadingChats(true);
//     try {
//       const response = await FetchAllChats(id, 20, 0);

//       setAllChats(response.chat || response);
//     } catch (error) {
//       showSnackbar('Error fetching chats!');
//     } finally {
//       setLoadingChats(false);
//     }
//   };

//   // WebSocket setup
//   useEffect(() => {
//     setConnectionStatus('Connecting…');
//     const currentUserId = user?.id;

//     const WS_URL = 'ws://72.61.173.6:8000/social-media/ws';
//     const socket = new W3CWebSocket(WS_URL);
//     socket.binaryType = 'arraybuffer';
//     socketRef.current = socket;

//     socket.onopen = () => {
//       setConnectionStatus('Connected');
//       const connectFrame = `CONNECT\naccept-version:1.2\nhost:72.61.173.6:8000\nlogin:${currentUserId}\nheart-beat:10000,10000\n\n\0`;
//       socket.send(new TextEncoder().encode(connectFrame));
//     };

//     socket.onmessage = msg => {
//       let data;
//       if (msg.data instanceof ArrayBuffer) {
//         data = new TextDecoder('utf-8').decode(msg.data);
//       } else {
//         data = msg.data;
//       }

//       if (data.startsWith('CONNECTED')) {
//         const subscribeFrame = `SUBSCRIBE\nid:sub-0\ndestination:/queue/${currentUserId}\nack:auto\n\n\0`;
//         socket.send(new TextEncoder().encode(subscribeFrame));
//       } else if (data.startsWith('MESSAGE')) {
//         const bodyMatch = data.match(/{.*}/s);
//         if (bodyMatch) {
//           try {
//             const messageObj = JSON.parse(bodyMatch[0]);
//             const friendId = friendIdRef.current;

//             const isCurrentChat =
//               friendId &&
//               ((messageObj.senderId === user.id &&
//                 messageObj.receiverId === friendId) ||
//                 (messageObj.senderId === friendId &&
//                   messageObj.receiverId === user.id));

//             if (isCurrentChat) {
//               setMessages(prev => [...prev, messageObj]);
//             }

//             DeviceEventEmitter.emit('newMessage', {
//               userId: messageObj.senderId,
//               content: messageObj.content,
//               timestamp: messageObj.timestamp,
//             });
//           } catch (err) {
//             showSnackbar('Error messaging!');
//           }
//         }
//       } else if (data.startsWith('ERROR')) {
//         setConnectionStatus('Error');
//         showSnackbar('Connection error!');
//       }
//     };

//     socket.onerror = () => setConnectionStatus('Error');
//     socket.onclose = () => setConnectionStatus('Disconnected');

//     return () => {
//       setConnectionStatus('Disconnected');
//       if (socket.readyState === 1) socket.close();
//     };
//   }, [user?.id]);

//   // Send message
//   const sendMessage = () => {
//     if (!chatText.trim() || sendingMessage) return;
//     setSendingMessage(true);

//     try {
//       const socket = socketRef.current;
//       const senderId = user?.id;
//       const receiverId = friendDetails?.id;

//       if (socket && socket.readyState === 1) {
//         const messageBody = {
//           senderId: parseInt(senderId),
//           receiverId: parseInt(receiverId),
//           content: chatText,
//           timestamp: new Date().toISOString(),
//         };

//         const sendFrame = `SEND\ndestination:/app/sendMessage\ncontent-type:application/json\n\n${JSON.stringify(
//           messageBody,
//         )}\0`;

//         socket.send(new TextEncoder().encode(sendFrame));
//         setMessages(prev => [...prev, messageBody]); // Optimistic update
//         DeviceEventEmitter.emit('newMessage', {
//           userId: receiverId,
//           content: chatText,
//           timestamp: messageBody.timestamp,
//         });
//         setChatText('');
//       } else {
//         setConnectionStatus('Disconnected');
//       }
//     } catch (error) {
//       showSnackbar('Error sending message!');
//     } finally {
//       setSendingMessage(false);
//     }
//   };

//   const renderChats = ({ item }) => (
//     <View
//       style={[
//         {
//           alignSelf: item.senderId === user?.id ? 'flex-end' : 'flex-start',
//           backgroundColor:
//             item.senderId === user?.id ? chatTheme.primary : chatTheme.surface,
//         },
//         styles.chats,
//       ]}
//     >
//       <Text
//         style={{
//           color:
//             item.senderId === user?.id
//               ? chatTheme.onPrimary
//               : chatTheme.onSurface,
//         }}
//       >
//         {item.content}
//       </Text>
//       <Text
//         style={[
//           styles.timestampText,
//           {
//             color:
//               item.senderId === user?.id
//                 ? theme.colors.onPrimary
//                 : theme.colors.secondary,
//             textAlign: 'right',
//           },
//         ]}
//       >
//         {timestamp(item.timestamp)}
//       </Text>
//     </View>
//   );

//   const renderStatusIndicator = () => {
//     if (connectionStatus === 'Connecting…') {
//       return <Loader size={size.iconSm} color={theme.colors.onPrimary} />;
//     }
//     const dotColor =
//       connectionStatus === 'Connected' ? chatTheme.success : chatTheme.error;

//     return <View style={[styles.dot, { backgroundColor: dotColor }]} />;
//   };

//   const Header = () => (
//     <View
//       style={[styles.headerContainer, { backgroundColor: chatTheme.primary }]}
//     >
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <MaterialCommunityIcons
//           name="arrow-left"
//           size={size.iconMd}
//           color={chatTheme.onPrimary}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.chatsHeader}
//         onPress={() =>
//           navigation.navigate('newProfile', {
//             id: id, // The 'id' from route.params
//           })
//         }
//       >
//         <Text
//           style={[
//             theme.fonts.titleMedium,
//             styles.itemName,
//             { color: chatTheme.onPrimary },
//           ]}
//         >
//           {friendDetails.firstName} {friendDetails.lastName}
//         </Text>
//         {renderStatusIndicator()}
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <MaterialCommunityIcons
//           name="cog"
//           size={size.iconMd}
//           color={chatTheme.onPrimary}
//           onPress={() => navigation.navigate(routes.ChatSetting)}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   if (loadingChats) {
//     return (
//       <View
//         style={[
//           styles.loaderContainer,
//           { backgroundColor: chatTheme.background },
//         ]}
//       >
//         <Loader size={size.iconLg} color={chatTheme.primary} />
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 60 : 0}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View
//           style={[
//             styles.container,
//             {
//               backgroundColor: chatTheme.background,
//               paddingBottom: insets.bottom,
//             },
//           ]}
//         >
//           <Header />

//           <FlatList
//             ref={flatListRef}
//             data={combinedChats}
//             renderItem={renderChats}
//             keyExtractor={(_, index) => index.toString()}
//             showsVerticalScrollIndicator={false}
//             keyboardShouldPersistTaps="handled"
//             contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}
//           />

//           <View
//             style={[
//               styles.chatInputBar,
//               {
//                 backgroundColor: chatTheme.background,
//                 borderTopColor: chatTheme.tertiary,
//               },
//             ]}
//           >
//             <TextInput
//               ref={inputRef}
//               value={chatText}
//               onChangeText={setChatText}
//               placeholder="Type a message..."
//               placeholderTextColor={chatTheme.secondary}
//               style={[
//                 styles.input,
//                 {
//                   color: chatTheme.onBackground,
//                   borderColor: chatTheme.tertiary,
//                 },
//               ]}
//               returnKeyType="send"
//               onSubmitEditing={sendMessage}
//               editable={!sendingMessage}
//             />

//             {sendingMessage ? (
//               <Loader
//                 size={size.btnIconSize}
//                 color={chatTheme.primary}
//                 style={styles.sendLoader}
//               />
//             ) : (
//               <TouchableOpacity onPress={sendMessage}>
//                 <MaterialCommunityIcons
//                   name="send"
//                   size={size.btnIconSize}
//                   color={
//                     chatText.trim() ? chatTheme.primary : chatTheme.secondary
//                   }
//                 />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default ChattingScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     paddingVertical: 30,
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     elevation: 2,
//     zIndex: 10,
//   },
//   chatInputBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     borderTopWidth: 1,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     marginRight: 10,
//   },
//   sendLoader: { marginHorizontal: 5 },
//   chatsHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
//   dot: { width: 10, height: 10, borderRadius: 5 },
//   chats: {
//     borderRadius: 10,
//     marginVertical: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     maxWidth: '80%',
//   },
//   timestampText: {
//     fontSize: 10,
//     marginTop: 4,
//     opacity: 0.8,
//   },
// });


// import { useContext, useEffect, useRef, useState } from 'react';
// import {
//   DeviceEventEmitter,
//   FlatList,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { useTheme } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { size } from '../../constants/size';
// import { AuthContext } from '../../context/AuthContext';
// import { Client } from '@stomp/stompjs';
// import { FetchGroupChats } from '../../services/api/ChatsApi';
// import { useSnackbar } from '../../context/SnackbarContext';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Loader from '../../components/Loader';
// import { routes } from '../../navigation/routes/routes';
// import { useSelector } from 'react-redux';
// import { CHAT_THEMES } from '../../constants/theme/ChattingTheme';
// import { timestamp } from '../../services/helpers/timestamp';
// import BaseUrl from '../../services/api/BaseApi';

// import { useContext, useEffect, useRef, useState, useCallback } from 'react';
// import {
//   DeviceEventEmitter,
//   FlatList,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { useTheme } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useSelector } from 'react-redux';
// import { size } from '../../constants/size';
// import BaseUrl from '../../services/api/BaseApi';
// import { FetchGroupChats } from '../../services/api/ChatsApi';
// import { AuthContext } from '../../context/AuthContext';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import { useSnackbar } from '../../context/SnackbarContext';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Loader from '../../components/Loader';
// import { CHAT_THEMES } from '../../constants/theme/ChattingTheme';
// import { timestamp } from '../../services/helpers/timestamp';
// import { routes } from '../../navigation/routes/routes';

// const GroupChattingScreen = () => {
//   const route = useRoute();
//   const { groupId } = route.params;

//   const navigation = useNavigation();
//   const theme = useTheme();
//   const { user } = useContext(AuthContext);
//   const { showSnackbar } = useSnackbar();
//   const insets = useSafeAreaInsets();

//   const [groupData, setGroupData] = useState({});
//   const [chatText, setChatText] = useState('');
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [allChats, setAllChats] = useState([]);
//   const [loadingChats, setLoadingChats] = useState(true);
//   const [connectionStatus, setConnectionStatus] = useState('Connecting…');
//   const socketRef = useRef(null);
//   const inputRef = useRef(null);
//   const flatListRef = useRef(null);

//   const [pageNumber, setPageNumber] = useState(0);
//   const [hasMore, setHasMore] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);

//   const selectedTheme = useSelector(
//     state => state.chatBackground.selectedTheme,
//   );
//   const chatTheme = CHAT_THEMES[selectedTheme] || CHAT_THEMES.default;

//   const combinedChats = [...allChats, ...messages].sort(
//     (a, b) => new Date(a.sentAt || a.timestamp) - new Date(b.sentAt || b.timestamp),
//   );

//   useEffect(() => {
//     if (flatListRef.current) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [combinedChats]);

//   const fetchGroupDetails = useCallback(async () => {
//     try {
//       const response = await BaseUrl.get(`/social-media/fetchGroup/${groupId}`);
//       setGroupData(response.data);
//     } catch (error) {
//       showSnackbar('Error fetching group details!');
//     }
//   }, [groupId, showSnackbar]);

//   useEffect(() => {
//     if (groupId) {
//       fetchGroupDetails();
//       getChats(0);
//     }
//   }, [groupId, fetchGroupDetails]);

//   const getChats = async (page = 0) => {
//     if (loadingMore || !hasMore) return;

//     if (page === 0) {
//       setLoadingChats(true);
//     } else {
//       setLoadingMore(true);
//     }

//     try {
//       const response = await FetchGroupChats(groupId, 20, page);
//       console.log('getChats response', response);
//       const newChats = response.messages || [];
//       console.log('parsed newChats', newChats.length, newChats);

//       if (page === 0) {
//         setAllChats(newChats.reverse());
//       } else {
//         setAllChats(prev => [...newChats.reverse(), ...prev]);
//       }

//       setHasMore(page + 1 < (response.totalPages || 0));
//       setPageNumber(page);
//     } catch (error) {
//       console.error('getChats error', error);
//       showSnackbar('Error fetching group chats!');
//     } finally {
//       setLoadingChats(false);
//       setLoadingMore(false);
//     }
//   };

//   const loadMoreChats = () => {
//     if (hasMore && !loadingMore) {
//       getChats(pageNumber + 1);
//     }
//   };

//   // websocket setup
//   useEffect(() => {
//     setConnectionStatus('Connecting…');
//     const currentUserId = user?.id;
//     const WS_URL = 'wss://7rgt77q5-8080.inc1.devtunnels.ms/social-media/ws';
//     const socket = new W3CWebSocket(WS_URL);
//     socket.binaryType = 'arraybuffer';
//     socketRef.current = socket;

//     socket.onopen = () => {
//       console.log('group socket opened');
//       setConnectionStatus('Connected');
//       const connectFrame = `CONNECT\naccept-version:1.2\nhost:7rgt77q5-8080.inc1.devtunnels.ms\nlogin:${currentUserId}\nheart-beat:10000,10000\n\n\0`;
//       console.log('> connectFrame', connectFrame);
//       socket.send(new TextEncoder().encode(connectFrame));
//     };

//     socket.onmessage = msg => {
//       let data;
//       if (msg.data instanceof ArrayBuffer) {
//         data = new TextDecoder('utf-8').decode(msg.data);
//       } else {
//         data = msg.data;
//       }

//       if (data.startsWith('CONNECTED')) {
//         const subscribeFrame = `SUBSCRIBE\nid:sub-0\ndestination:/topic/group/${groupId}\nack:auto\n\n\0`;
//         console.log('> subscribing', subscribeFrame);
//         socket.send(new TextEncoder().encode(subscribeFrame));
//       } else if (data.startsWith('MESSAGE')) {
//         console.log('websocket raw MESSAGE frame', data);
//         const bodyMatch = data.match(/{.*}/s);
//         if (bodyMatch) {
//           try {
//             const messageObj = JSON.parse(bodyMatch[0]);
//             console.log('parsed messageObj', messageObj);
//             if (messageObj.groupId === groupId) {
//               setAllChats(prev => [...prev, messageObj]);
//             }
//             DeviceEventEmitter.emit('newMessage', {
//               userId: messageObj.senderId,
//               content: messageObj.content,
//               timestamp: messageObj.sentAt || messageObj.timestamp,
//             });
//           } catch (err) {
//             console.error('Error parsing incoming message', err);
//             showSnackbar('Error parsing incoming message!');
//           }
//         }
//       } else if (data.startsWith('ERROR')) {
//         setConnectionStatus('Error');
//         showSnackbar('Connection error!');
//       }
//     };

//     socket.onerror = () => setConnectionStatus('Error');
//     socket.onclose = () => setConnectionStatus('Disconnected');

//     return () => {
//       setConnectionStatus('Disconnected');
//       if (socket.readyState === 1) socket.close();
//     };
//   }, [user?.id, groupId]);

//   const sendMessage = () => {
//     if (!chatText.trim() || sendingMessage) return;
//     setSendingMessage(true);

//     try {
//       const socket = socketRef.current;
//       const senderId = user?.id;
//       const numericGroupId = parseInt(groupId, 10);
//       if (isNaN(numericGroupId)) {
//         console.warn('Invalid groupId', groupId);
//         showSnackbar('Invalid group identifier');
//         setSendingMessage(false);
//         return;
//       }

//       console.log('> sendMessage', {
//         connectionStatus,
//         readyState: socket?.readyState,
//         numericGroupId,
//         senderId,
//         chatText,
//       });

//       if (socket && socket.readyState === 1) {
//         const messageBody = {
//           groupId: numericGroupId,
//           senderId: parseInt(senderId, 10),
//           content: chatText,
//         };

//         const sendFrame = `SEND\ndestination:/app/sendGroupMessage\ncontent-type:application/json\n\n${JSON.stringify(
//           messageBody,
//         )}\0`;

//         console.log('> sending frame', sendFrame);
//         socket.send(new TextEncoder().encode(sendFrame));

//         // persist via REST in case WS handler isn't saving
//         (async () => {
//           try {
//             const resp = await BaseUrl.post( '/social-media/groupMessage/sendGroupMessage', messageBody);
//             console.log('HTTP save response', resp.data);
//           } catch (e) {
//             console.error('HTTP save error', e?.response || e);
//           }
//         })();

//         setMessages(prev => [...prev, messageBody]);
//         DeviceEventEmitter.emit('newMessage', {
//           userId: senderId,
//           content: chatText,
//           timestamp: new Date().toISOString(),
//         });
//         setChatText('');
//       } else {
//         setConnectionStatus('Disconnected');
//         showSnackbar('Not connected to chat server');
//       }
//     } catch (error) {
//       console.error('sendMessage error', error);
//       showSnackbar('Error sending message!');
//     } finally {
//       setSendingMessage(false);
//     }
//   };

//   const renderChats = ({ item }) => (
//     <View
//       style={[
//         {
//           alignSelf: item.senderId === user?.id ? 'flex-end' : 'flex-start',
//           backgroundColor:
//             item.senderId === user?.id ? chatTheme.primary : chatTheme.surface,
//         },
//         styles.chats,
//       ]}
//     >
//       {item.senderId !== user?.id && (
//         <Text
//           style={{
//             color: chatTheme.onSurface,
//             fontWeight: '600',
//             marginBottom: 4,
//           }}
//         >
//           {item.senderName || 'Unknown'}
//         </Text>
//       )}

//       <Text
//         style={{
//           color:
//             item.senderId === user?.id
//               ? chatTheme.onPrimary
//               : chatTheme.onSurface,
//         }}
//       >
//         {item.content}
//       </Text>
//       <Text
//         style={[
//           styles.timestampText,
//           {
//             color:
//               item.senderId === user?.id
//                 ? theme.colors.onPrimary
//                 : theme.colors.secondary,
//             textAlign: 'right',
//           },
//         ]}
//       >
//         {timestamp(item.sentAt || item.timestamp)}
//       </Text>
//     </View>
//   );

//   const renderStatusIndicator = () => {
//     if (connectionStatus === 'Connecting…') {
//       return <Loader size={size.iconSm} color={theme.colors.onPrimary} />;
//     }
//     const dotColor =
//       connectionStatus === 'Connected' ? chatTheme.success : chatTheme.error;

//     return <View style={[styles.dot, { backgroundColor: dotColor }]} />;
//   };

//   const Header = () => (
//     <View
//       style={[styles.headerContainer, { backgroundColor: chatTheme.primary }]}
//     >
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <MaterialCommunityIcons
//           name="arrow-left"
//           size={size.iconMd}
//           color={chatTheme.onPrimary}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.chatsHeader}
//         onPress={() =>
//           navigation.navigate(routes.GroupFeeds, {
//             groupId,
//           })
//         }
//       >
//         <Text
//           style={[
//             theme.fonts.titleMedium,
//             styles.itemName,
//             { color: chatTheme.onPrimary },
//           ]}
//         >
//           {groupData.name || 'Group Chat'}
//         </Text>
//         {renderStatusIndicator()}
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <MaterialCommunityIcons
//           name="cog"
//           size={size.iconMd}
//           color={chatTheme.onPrimary}
//           onPress={() => navigation.navigate(routes.GroupFeeds, { groupId })}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   if (loadingChats) {
//     return (
//       <View
//         style={[
//           styles.loaderContainer,
//           { backgroundColor: chatTheme.background },
//         ]}
//       >
//         <Loader size={size.iconLg} color={chatTheme.primary} />
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 60 : 0}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View
//           style={[
//             styles.container,
//             {
//               backgroundColor: chatTheme.background,
//               paddingBottom: insets.bottom,
//             },
//           ]}
//         >
//           <Header />

//           <FlatList
//             ref={flatListRef}
//             data={combinedChats}
//             renderItem={renderChats}
//             keyExtractor={(item, index) =>
//               item?.id ? item.id.toString() : index.toString()
//             }
//             maintainVisibleContentPosition={{
//               minIndexForVisible: 1,
//             }}
//             onScroll={({ nativeEvent }) => {
//               if (nativeEvent.contentOffset.y <= 50) {
//                 loadMoreChats();
//               }
//             }}
//             scrollEventThrottle={16}
//             ListHeaderComponent={
//               loadingMore ? (
//                 <View
//                   style={{
//                     paddingVertical: 15,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <Loader size={size.iconSm} color={chatTheme.primary} />
//                 </View>
//               ) : null
//             }
//           />

//           <View
//             style={[
//               styles.chatInputBar,
//               {
//                 backgroundColor: chatTheme.background,
//                 borderTopColor: chatTheme.tertiary,
//               },
//             ]}
//           >
//             <TextInput
//               ref={inputRef}
//               value={chatText}
//               onChangeText={setChatText}
//               placeholder="Type a message..."
//               placeholderTextColor={chatTheme.secondary}
//               style={[
//                 styles.input,
//                 {
//                   color: chatTheme.onBackground,
//                   borderColor: chatTheme.tertiary,
//                 },
//               ]}
//               returnKeyType="send"
//               onSubmitEditing={sendMessage}
//               editable={!sendingMessage}
//             />

//             {sendingMessage ? (
//               <Loader
//                 size={size.btnIconSize}
//                 color={chatTheme.primary}
//                 style={styles.sendLoader}
//               />
//             ) : (
//               <TouchableOpacity onPress={sendMessage}>
//                 <MaterialCommunityIcons
//                   name="send"
//                   size={size.btnIconSize}
//                   color={
//                     chatText.trim() ? chatTheme.primary : chatTheme.secondary
//                   }
//                 />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default GroupChattingScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     paddingVertical: 30,
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     elevation: 2,
//     zIndex: 10,
//   },
//   chatInputBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     borderTopWidth: 1,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     marginRight: 10,
//   },
//   sendLoader: { marginHorizontal: 5 },
//   chatsHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
//   dot: { width: 10, height: 10, borderRadius: 5 },
//   chats: {
//     borderRadius: 10,
//     marginVertical: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     maxWidth: '80%',
//   },
//   timestampText: {
//     fontSize: 10,
//     marginTop: 4,
//     opacity: 0.8,
//   },
//   itemName: {
//     fontWeight: 'bold',
//   },
// });


import { useContext, useEffect, useRef, useState, useCallback } from 'react';
import {
  DeviceEventEmitter,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { size } from '../../constants/size';
import BaseUrl from '../../services/api/BaseApi';
import { FetchGroupChats } from '../../services/api/ChatsApi';
import { AuthContext } from '../../context/AuthContext';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useSnackbar } from '../../context/SnackbarContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../components/Loader';
import { CHAT_THEMES } from '../../constants/theme/ChattingTheme';
import { timestamp } from '../../services/helpers/timestamp';
import { routes } from '../../navigation/routes/routes';

const GroupChattingScreen = () => {
  const route = useRoute();
  const { groupId } = route.params;

  const navigation = useNavigation();
  const theme = useTheme();
  const { user } = useContext(AuthContext);
  const { showSnackbar } = useSnackbar();
  const insets = useSafeAreaInsets();

  const [groupData, setGroupData] = useState({});
  const [chatText, setChatText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messages, setMessages] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [loadingChats, setLoadingChats] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('Connecting…');
  const socketRef = useRef(null);
  const inputRef = useRef(null);
  const flatListRef = useRef(null);

  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const selectedTheme = useSelector(
    state => state.chatBackground.selectedTheme,
  );
  const chatTheme = CHAT_THEMES[selectedTheme] || CHAT_THEMES.default;

  const combinedChats = [...allChats, ...messages].sort(
    (a, b) => new Date(a.sentAt || a.timestamp) - new Date(b.sentAt || b.timestamp),
  );

  useEffect(() => {
    if (flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [combinedChats]);

  const fetchGroupDetails = useCallback(async () => {
    try {
      const response = await BaseUrl.get(`/social-media/fetchGroup/${groupId}`);
      setGroupData(response.data);
    } catch (error) {
      showSnackbar('Error fetching group details!');
    }
  }, [groupId, showSnackbar]);

  useEffect(() => {
    if (groupId) {
      fetchGroupDetails();
      getChats(0);
    }
  }, [groupId, fetchGroupDetails]);

  const getChats = async (page = 0) => {
    if (loadingMore || !hasMore) return;

    if (page === 0) {
      setLoadingChats(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const response = await FetchGroupChats(groupId, 20, page);
      console.log('getChats response', response);
      const newChats = response.messages || [];
      console.log('parsed newChats', newChats.length, newChats);

      if (page === 0) {
        setAllChats(newChats.reverse());
      } else {
        setAllChats(prev => [...newChats.reverse(), ...prev]);
      }

      setHasMore(page + 1 < (response.totalPages || 0));
      setPageNumber(page);
    } catch (error) {
      console.error('getChats error', error);
      showSnackbar('Error fetching group chats!');
    } finally {
      setLoadingChats(false);
      setLoadingMore(false);
    }
  };

  const loadMoreChats = () => {
    if (hasMore && !loadingMore) {
      getChats(pageNumber + 1);
    }
  };

  // websocket setup
  useEffect(() => {
    setConnectionStatus('Connecting…');
    const currentUserId = user?.id;
    const WS_URL = 'wss://7rgt77q5-8080.inc1.devtunnels.ms/social-media/ws';
    const socket = new W3CWebSocket(WS_URL);
    socket.binaryType = 'arraybuffer';
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('group socket opened');
      setConnectionStatus('Connected');
      const connectFrame = `CONNECT\naccept-version:1.2\nhost:7rgt77q5-8080.inc1.devtunnels.ms\nlogin:${currentUserId}\nheart-beat:10000,10000\n\n\0`;
      console.log('> connectFrame', connectFrame);
      socket.send(new TextEncoder().encode(connectFrame));
    };

    socket.onmessage = msg => {
      let data;
      if (msg.data instanceof ArrayBuffer) {
        data = new TextDecoder('utf-8').decode(msg.data);
      } else {
        data = msg.data;
      }

      if (data.startsWith('CONNECTED')) {
        const subscribeFrame = `SUBSCRIBE\nid:sub-0\ndestination:/topic/group/${groupId}\nack:auto\n\n\0`;
        console.log('> subscribing', subscribeFrame);
        socket.send(new TextEncoder().encode(subscribeFrame));
      } else if (data.startsWith('MESSAGE')) {
        console.log('websocket raw MESSAGE frame', data);
        const bodyMatch = data.match(/{.*}/s);
        if (bodyMatch) {
          try {
            const messageObj = JSON.parse(bodyMatch[0]);
            console.log('parsed messageObj', messageObj);
            if (messageObj.groupId === groupId) {
              setAllChats(prev => [...prev, messageObj]);
            }
            DeviceEventEmitter.emit('newMessage', {
              userId: messageObj.senderId,
              content: messageObj.content,
              timestamp: messageObj.sentAt || messageObj.timestamp,
            });
          } catch (err) {
            console.error('Error parsing incoming message', err);
            showSnackbar('Error parsing incoming message!');
          }
        }
      } else if (data.startsWith('ERROR')) {
        setConnectionStatus('Error');
        showSnackbar('Connection error!');
      }
    };

    socket.onerror = () => setConnectionStatus('Error');
    socket.onclose = () => setConnectionStatus('Disconnected');

    return () => {
      setConnectionStatus('Disconnected');
      if (socket.readyState === 1) socket.close();
    };
  }, [user?.id, groupId]);

  const sendMessage = () => {
    if (!chatText.trim() || sendingMessage) return;
    setSendingMessage(true);

    try {
      const socket = socketRef.current;
      const senderId = user?.id;
      const numericGroupId = parseInt(groupId, 10);

      if (socket && socket.readyState === 1) {
        const messageBody = {
          groupId: numericGroupId,
          senderId: parseInt(senderId, 10),
          content: chatText,
        };

        const sendFrame = `SEND
destination:/app/sendGroupMessage
content-type:application/json

${JSON.stringify(messageBody)}\0`;

        socket.send(new TextEncoder().encode(sendFrame));

        setChatText('');
      }
    } catch (error) {
      console.error('sendMessage error', error);
    } finally {
      setSendingMessage(false);
    }
  };

  const renderChats = ({ item }) => (
    <View
      style={[
        {
          alignSelf: item.senderId === user?.id ? 'flex-end' : 'flex-start',
          backgroundColor:
            item.senderId === user?.id ? chatTheme.primary : chatTheme.surface,
        },
        styles.chats,
      ]}
    >
      {item.senderId !== user?.id && (
        <Text
          style={[
            theme.fonts.labelMedium,
            { color: chatTheme.secondary, marginBottom: 4, },
          ]}
        >
          {item.senderName || 'Unknown'}
        </Text>
      )}

      <Text
        style={{
          color:
            item.senderId === user?.id
              ? chatTheme.onPrimary
              : chatTheme.onSurface,
        }}
      >
        {item.content}
      </Text>
      <Text
        style={[
          styles.timestampText,
          {
            color:
              item.senderId === user?.id
                ? theme.colors.onPrimary
                : theme.colors.secondary,
            textAlign: 'right',
          },
        ]}
      >
        {timestamp(item.sentAt || item.timestamp)}
      </Text>
    </View>
  );

  const renderStatusIndicator = () => {
    if (connectionStatus === 'Connecting…') {
      return <Loader size={size.iconSm} color={theme.colors.onPrimary} />;
    }
    const dotColor =
      connectionStatus === 'Connected' ? chatTheme.success : chatTheme.error;

    return <View style={[styles.dot, { backgroundColor: dotColor }]} />;
  };

  const Header = () => (
    <View
      style={[styles.headerContainer, { backgroundColor: chatTheme.primary }]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={size.iconMd}
          color={chatTheme.onPrimary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.chatsHeader}
        onPress={() =>
          navigation.navigate(routes.GroupFeeds, {
            groupId,
          })
        }
      >
        <Text
          style={[
            theme.fonts.titleMedium,
            styles.itemName,
            { color: chatTheme.onPrimary },
          ]}
        >
          {groupData.name || 'Group Chat'}
        </Text>
        {renderStatusIndicator()}
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="cog"
          size={size.iconMd}
          color={chatTheme.onPrimary}
          onPress={() => navigation.navigate(routes.ChatSetting, { groupId })}
        />
      </TouchableOpacity>
    </View>
  );

  if (loadingChats) {
    return (
      <View
        style={[
          styles.loaderContainer,
          { backgroundColor: chatTheme.background },
        ]}
      >
        <Loader size={size.iconLg} color={chatTheme.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: chatTheme.background,
              paddingBottom: insets.bottom,
            },
          ]}
        >
          <Header />

          <FlatList
            ref={flatListRef}
            data={combinedChats}
            renderItem={renderChats}
            keyExtractor={(item, index) =>
              item?.id ? item.id.toString() : index.toString()
            }
            maintainVisibleContentPosition={{
              minIndexForVisible: 1,
            }}
            onScroll={({ nativeEvent }) => {
              if (nativeEvent.contentOffset.y <= 50) {
                loadMoreChats();
              }
            }}
            scrollEventThrottle={16}
            ListHeaderComponent={
              loadingMore ? (
                <View
                  style={{
                    paddingVertical: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Loader size={size.iconSm} color={chatTheme.primary} />
                </View>
              ) : null
            }
          />

          <View
            style={[
              styles.chatInputBar,
              {
                backgroundColor: chatTheme.background,
                borderTopColor: chatTheme.tertiary,
              },
            ]}
          >
            <TextInput
              ref={inputRef}
              value={chatText}
              onChangeText={setChatText}
              placeholder="Type a message..."
              placeholderTextColor={chatTheme.secondary}
              style={[
                styles.input,
                {
                  color: chatTheme.onBackground,
                  borderColor: chatTheme.tertiary,
                },
              ]}
              returnKeyType="send"
              onSubmitEditing={sendMessage}
              editable={!sendingMessage}
            />

            {sendingMessage ? (
              <Loader
                size={size.btnIconSize}
                color={chatTheme.primary}
                style={styles.sendLoader}
              />
            ) : (
              <TouchableOpacity onPress={sendMessage}>
                <MaterialCommunityIcons
                  name="send"
                  size={size.btnIconSize}
                  color={
                    chatText.trim() ? chatTheme.primary : chatTheme.secondary
                  }
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default GroupChattingScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 2,
    zIndex: 10,
  },
  chatInputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendLoader: { marginHorizontal: 5 },
  chatsHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  chats: {
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    maxWidth: '80%',
  },
  timestampText: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.8,
  },
  itemName: {
    fontWeight: 'bold',
  },
});



// import { useContext, useEffect, useRef, useState, useCallback, useMemo } from 'react';
// import {
//   DeviceEventEmitter,
//   FlatList,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { useTheme } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useSelector } from 'react-redux';
// import { size } from '../../constants/size';
// import BaseUrl from '../../services/api/BaseApi';
// import { FetchGroupChats } from '../../services/api/ChatsApi';
// import { AuthContext } from '../../context/AuthContext';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import { useSnackbar } from '../../context/SnackbarContext';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Loader from '../../components/Loader';
// import { CHAT_THEMES } from '../../constants/theme/ChattingTheme';
// import { timestamp } from '../../services/helpers/timestamp';
// import { routes } from '../../navigation/routes/routes';

// const GroupChattingScreen = () => {
//   const route = useRoute();
//   const { groupId } = route.params;

//   const navigation = useNavigation();
//   const theme = useTheme();
//   const { user } = useContext(AuthContext);
//   const { showSnackbar } = useSnackbar();
//   const insets = useSafeAreaInsets();

//   const [groupData, setGroupData] = useState({});
//   const [chatText, setChatText] = useState('');
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [allChats, setAllChats] = useState([]);
//   const [loadingChats, setLoadingChats] = useState(true);
//   const [connectionStatus, setConnectionStatus] = useState('Connecting…');
//   const socketRef = useRef(null);
//   const inputRef = useRef(null);
//   const flatListRef = useRef(null);

//   const [pageNumber, setPageNumber] = useState(0);
//   const [hasMore, setHasMore] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);

//   const selectedTheme = useSelector(
//     state => state.chatBackground.selectedTheme,
//   );
//   const chatTheme = CHAT_THEMES[selectedTheme] || CHAT_THEMES.default;

//   const combinedChats = useMemo(() => [...allChats, ...messages].sort(
//     (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
//   ), [allChats, messages]);

//   useEffect(() => {
//     if (flatListRef.current) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [combinedChats.length]);

//   const fetchGroupDetails = useCallback(async () => {
//     try {
//       const response = await BaseUrl.get(`/social-media/fetchGroup/${groupId}`);
//       setGroupData(response.data);
//     } catch (error) {
//       showSnackbar('Error fetching group details!');
//     }
//   }, [groupId, showSnackbar]);

//   useEffect(() => {
//     if (groupId) {
//       fetchGroupDetails();
//       getChats(0);
//     }
//   }, [groupId, fetchGroupDetails]);

//   const getChats = async (page = 0) => {
//     if (loadingMore || !hasMore) return;

//     if (page === 0) {
//       setLoadingChats(true);
//     } else {
//       setLoadingMore(true);
//     }

//     try {
//       const response = await FetchGroupChats(groupId, 20, page);
//       const newChats = response.messages || [];

//       if (page === 0) {
//         setAllChats(newChats.reverse());
//       } else {
//         setAllChats(prev => [...newChats.reverse(), ...prev]);
//       }

//       setHasMore(page + 1 < (response.totalPages || 0));
//       setPageNumber(page);
//     } catch (error) {
//       showSnackbar('Error fetching group chats!');
//     } finally {
//       setLoadingChats(false);
//       setLoadingMore(false);
//     }
//   };

//   const loadMoreChats = () => {
//     if (hasMore && !loadingMore) {
//       getChats(pageNumber + 1);
//     }
//   };

//   // websocket setup
//   useEffect(() => {
//     setConnectionStatus('Connecting…');
//     const currentUserId = user?.id;
//     // const WS_URL = 'wss://7rgt77q5-8080.inc1.devtunnels.ms/social-media/ws';
//     const WS_URL = 'ws://72.61.173.6:8000/social-media/ws';
//     const socket = new W3CWebSocket(WS_URL);
//     socket.binaryType = 'arraybuffer';
//     socketRef.current = socket;

//     socket.onopen = () => {
//       setConnectionStatus('Connected');
//       // const connectFrame = `CONNECT\naccept-version:1.2\nhost:7rgt77q5-8080.inc1.devtunnels.ms\nlogin:${currentUserId}\nheart-beat:10000,10000\n\n\0`;
//       const connectFrame = `CONNECT\naccept-version:1.2\nhost:72.61.173.6:8000\nlogin:${currentUserId}\nheart-beat:10000,10000\n\n\0`;
//       socket.send(new TextEncoder().encode(connectFrame));
//     };

//     socket.onmessage = msg => {
//       let data;
//       if (msg.data instanceof ArrayBuffer) {
//         data = new TextDecoder('utf-8').decode(msg.data);
//       } else {
//         data = msg.data;
//       }

//       if (data.startsWith('CONNECTED')) {
//         // const subscribeFrame = `SUBSCRIBE\nid:sub-0\ndestination:/topic/group/${groupId}\nack:auto\n\n\0`;
//         const subscribeFrame = `SUBSCRIBE\nid:sub-0\ndestination:/queue/${groupId}\nack:auto\n\n\0`;
//         socket.send(new TextEncoder().encode(subscribeFrame));
//       } else if (data.startsWith('MESSAGE')) {
//         const bodyMatch = data.match(/{.*}/s);
//         if (bodyMatch) {
//           try {
//             const messageObj = JSON.parse(bodyMatch[0]);
//             if (messageObj.groupId === groupId && !allChats.some(m => m.id === messageObj.id)) {
//               setAllChats(prev => [...prev, messageObj]);
//             }
//             DeviceEventEmitter.emit('newMessage', {
//               userId: messageObj.senderId,
//               content: messageObj.content,
//               timestamp: messageObj.timestamp,
//             });
//           } catch (err) {
//             showSnackbar('Error messaging!');
//           }
//         }
//       } else if (data.startsWith('ERROR')) {
//         setConnectionStatus('Error');
//         showSnackbar('Connection error!');
//       }
//     };

//     socket.onerror = () => setConnectionStatus('Error');
//     socket.onclose = () => setConnectionStatus('Disconnected');

//     return () => {
//       setConnectionStatus('Disconnected');
//       if (socket.readyState === 1) socket.close();
//     };
//   }, [user?.id]);

//   const sendMessage = () => {
//     if (!chatText.trim() || sendingMessage) return;
//     setSendingMessage(true);

//     try {
//       const socket = socketRef.current;
//       const senderId = user?.id;
//       const numericGroupId = parseInt(groupId, 10);

//       if (socket && socket.readyState === 1) {
//         const messageBody = {
//           groupId: numericGroupId,
//           senderId: parseInt(senderId, 10),
//           content: chatText,
//           timestamp: new Date().toISOString(),
//         };

// //         const sendFrame = `SEND
// // destination:/app/sendGroupMessage
// // content-type:application/json

// // ${JSON.stringify(messageBody)}\0`;
// const sendFrame = `SEND\ndestination:/app/sendMessage\ncontent-type:application/json\n\n${JSON.stringify(
//           messageBody,
//         )}\0`;

//         socket.send(new TextEncoder().encode(sendFrame));

//         setMessages(prev => [...prev, messageBody]); // Optimistic update
//         DeviceEventEmitter.emit('newMessage', {
//           userId: messageBody.senderId,
//           content: messageBody.content,
//           timestamp: messageBody.timestamp,
//         });
//         setChatText('');
//       }
//     } catch (error) {
//       showSnackbar('sendMessage error');
//     } finally {
//       setSendingMessage(false);
//     }
//   };

//   const renderChats = ({ item }) => (
//     <View
//       style={[
//         {
//           alignSelf: item.senderId === user?.id ? 'flex-end' : 'flex-start',
//           backgroundColor:
//             item.senderId === user?.id ? chatTheme.primary : chatTheme.surface,
//         },
//         styles.chats,
//       ]}
//     >
//       {item.senderId !== user?.id && (
//         <Text
//           style={[
//             theme.fonts.labelMedium,
//             { color: chatTheme.secondary, marginBottom: 4, },
//           ]}
//         >
//           {item.senderName || 'Unknown'}
//         </Text>
//       )}

//       <Text
//         style={{
//           color:
//             item.senderId === user?.id
//               ? chatTheme.onPrimary
//               : chatTheme.onSurface,
//         }}
//       >
//         {item.content}
//       </Text>
//       <Text
//         style={[
//           styles.timestampText,
//           {
//             color:
//               item.senderId === user?.id
//                 ? theme.colors.onPrimary
//                 : theme.colors.secondary,
//             textAlign: 'right',
//           },
//         ]}
//       >
//         {timestamp(item.timestamp)}
//       </Text>
//     </View>
//   );

//   const renderStatusIndicator = () => {
//     if (connectionStatus === 'Connecting…') {
//       return <Loader size={size.iconSm} color={theme.colors.onPrimary} />;
//     }
//     const dotColor =
//       connectionStatus === 'Connected' ? chatTheme.success : chatTheme.error;

//     return <View style={[styles.dot, { backgroundColor: dotColor }]} />;
//   };

//   const Header = () => (
//     <View
//       style={[styles.headerContainer, { backgroundColor: chatTheme.primary }]}
//     >
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <MaterialCommunityIcons
//           name="arrow-left"
//           size={size.iconMd}
//           color={chatTheme.onPrimary}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.chatsHeader}
//         onPress={() =>
//           navigation.navigate(routes.GroupFeeds, {
//             groupId,
//           })
//         }
//       >
//         <Text
//           style={[
//             theme.fonts.titleMedium,
//             styles.itemName,
//             { color: chatTheme.onPrimary },
//           ]}
//         >
//           {groupData.name || 'Group Chat'}
//         </Text>
//         {renderStatusIndicator()}
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <MaterialCommunityIcons
//           name="cog"
//           size={size.iconMd}
//           color={chatTheme.onPrimary}
//           onPress={() => navigation.navigate(routes.ChatSetting, { groupId })}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   if (loadingChats) {
//     return (
//       <View
//         style={[
//           styles.loaderContainer,
//           { backgroundColor: chatTheme.background },
//         ]}
//       >
//         <Loader size={size.iconLg} color={chatTheme.primary} />
//       </View>
//     );
//   }

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 60 : 0}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View
//           style={[
//             styles.container,
//             {
//               backgroundColor: chatTheme.background,
//               paddingBottom: insets.bottom,
//             },
//           ]}
//         >
//           <Header />

//           <FlatList
//             ref={flatListRef}
//             data={combinedChats}
//             renderItem={renderChats}
//             keyExtractor={(item, index) =>
//               item?.id ? item.id.toString() : index.toString()
//             }
//             maintainVisibleContentPosition={{
//               minIndexForVisible: 1,
//             }}
//             onScroll={({ nativeEvent }) => {
//               if (nativeEvent.contentOffset.y <= 50) {
//                 loadMoreChats();
//               }
//             }}
//             scrollEventThrottle={16}
//             ListHeaderComponent={
//               loadingMore ? (
//                 <View
//                   style={{
//                     paddingVertical: 15,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <Loader size={size.iconSm} color={chatTheme.primary} />
//                 </View>
//               ) : null
//             }
//           />

//           <View
//             style={[
//               styles.chatInputBar,
//               {
//                 backgroundColor: chatTheme.background,
//                 borderTopColor: chatTheme.tertiary,
//               },
//             ]}
//           >
//             <TextInput
//               ref={inputRef}
//               value={chatText}
//               onChangeText={setChatText}
//               placeholder="Type a message..."
//               placeholderTextColor={chatTheme.secondary}
//               style={[
//                 styles.input,
//                 {
//                   color: chatTheme.onBackground,
//                   borderColor: chatTheme.tertiary,
//                 },
//               ]}
//               returnKeyType="send"
//               onSubmitEditing={sendMessage}
//               editable={!sendingMessage}
//             />

//             {sendingMessage ? (
//               <Loader
//                 size={size.btnIconSize}
//                 color={chatTheme.primary}
//                 style={styles.sendLoader}
//               />
//             ) : (
//               <TouchableOpacity onPress={sendMessage}>
//                 <MaterialCommunityIcons
//                   name="send"
//                   size={size.btnIconSize}
//                   color={
//                     chatText.trim() ? chatTheme.primary : chatTheme.secondary
//                   }
//                 />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default GroupChattingScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     paddingVertical: 30,
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     elevation: 2,
//     zIndex: 10,
//   },
//   chatInputBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     borderTopWidth: 1,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     marginRight: 10,
//   },
//   sendLoader: { marginHorizontal: 5 },
//   chatsHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
//   dot: { width: 10, height: 10, borderRadius: 5 },
//   chats: {
//     borderRadius: 10,
//     marginVertical: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     maxWidth: '80%',
//   },
//   timestampText: {
//     fontSize: 10,
//     marginTop: 4,
//     opacity: 0.8,
//   },
//   itemName: {
//     fontWeight: 'bold',
//   },
// });