const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    runtime: 148,
    genres: ["Sci-Fi", "Thriller", "Action"],
    mood: "Mind-bending",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    keywords: ["dreams", "heist", "architecture", "layered"],
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    summary: "A thief enters dreams to plant an idea, turning a corporate mission into a maze of memory and guilt."
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    runtime: 100,
    genres: ["Comedy", "Adventure", "Drama"],
    mood: "Funny",
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
    keywords: ["hotel", "stylish", "friendship", "eccentric"],
    poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    summary: "A famed concierge and his lobby boy tumble through a jewel theft, a prison break, and a vanished Europe."
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    runtime: 169,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    mood: "Thoughtful",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    keywords: ["space", "family", "time", "survival"],
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    summary: "Explorers cross a wormhole to search for humanity's next home while time bends around love and sacrifice."
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    runtime: 132,
    genres: ["Thriller", "Drama", "Comedy"],
    mood: "Intense",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"],
    keywords: ["class", "family", "satire", "secrets"],
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    summary: "A struggling family infiltrates a wealthy household, and the arrangement curdles into a razor-sharp thriller."
  },
  {
    id: 5,
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    runtime: 128,
    genres: ["Romance", "Music", "Drama"],
    mood: "Romantic",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    keywords: ["jazz", "hollywood", "dreams", "bittersweet"],
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    summary: "Two artists fall in love while chasing their dreams through music, ambition, and the ache of timing."
  },
  {
    id: 6,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    runtime: 152,
    genres: ["Action", "Crime", "Drama"],
    mood: "Intense",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    keywords: ["hero", "chaos", "joker", "gotham"],
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    summary: "Batman faces a criminal force that wants to prove Gotham's order is only one bad day from collapse."
  },
  {
    id: 7,
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    runtime: 125,
    genres: ["Animation", "Fantasy", "Adventure"],
    mood: "Feel-good",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    keywords: ["magic", "coming-of-age", "spirits", "wonder"],
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    summary: "A young girl navigates a spirit bathhouse to rescue her parents and discover her own courage."
  },
  {
    id: 8,
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    runtime: 131,
    genres: ["Mystery", "Comedy", "Crime"],
    mood: "Funny",
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Ana de Armas", "Chris Evans"],
    keywords: ["detective", "family", "murder", "twist"],
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    summary: "A detective picks through lies and inheritance drama after a mystery novelist's suspicious death."
  },
  {
    id: 9,
    title: "Arrival",
    year: 2016,
    rating: 7.9,
    runtime: 116,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    mood: "Thoughtful",
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    keywords: ["language", "aliens", "space", "time", "communication"],
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    summary: "A linguist tries to understand alien visitors before fear turns first contact into catastrophe."
  },
  {
    id: 10,
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    runtime: 120,
    genres: ["Action", "Adventure", "Sci-Fi"],
    mood: "Intense",
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    keywords: ["desert", "chase", "survival", "rebellion"],
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    summary: "A desert escape becomes a roaring fight for freedom across a brutal wasteland."
  },
  {
    id: 11,
    title: "The Social Network",
    year: 2010,
    rating: 7.8,
    runtime: 121,
    genres: ["Drama", "Biography"],
    mood: "Thoughtful",
    director: "David Fincher",
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    keywords: ["startup", "ambition", "friendship", "betrayal"],
    poster: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    summary: "The birth of a social platform becomes a cold, brilliant story of ambition and fractured loyalty."
  },
  {
    id: 12,
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: 7.8,
    runtime: 140,
    genres: ["Action", "Comedy", "Sci-Fi"],
    mood: "Mind-bending",
    director: "Daniel Kwan and Daniel Scheinert",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
    keywords: ["multiverse", "family", "absurd", "identity"],
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    summary: "A laundromat owner tumbles through infinite selves while trying to hold her family together."
  },
  {
    id: 13,
    title: "Get Out",
    year: 2017,
    rating: 7.8,
    runtime: 104,
    genres: ["Horror", "Mystery", "Thriller"],
    mood: "Intense",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "LaKeith Stanfield"],
    keywords: ["satire", "suburbia", "race", "suspense"],
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    summary: "A weekend visit to meet the parents turns into a chilling social nightmare."
  },
  {
    id: 14,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    runtime: 136,
    genres: ["Action", "Sci-Fi"],
    mood: "Mind-bending",
    director: "Lana Wachowski and Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    keywords: ["simulation", "reality", "chosen one", "cyberpunk"],
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    summary: "A hacker discovers reality is a machine-built illusion and joins the fight to wake humanity."
  },
  {
    id: 15,
    title: "Paddington 2",
    year: 2017,
    rating: 7.8,
    runtime: 103,
    genres: ["Comedy", "Family", "Adventure"],
    mood: "Feel-good",
    director: "Paul King",
    cast: ["Ben Whishaw", "Hugh Grant", "Sally Hawkins"],
    keywords: ["kindness", "family", "london", "comfort"],
    poster: "https://image.tmdb.org/t/p/w500/1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg",
    summary: "A gentle bear searches for a stolen gift and leaves every corner of London warmer than he found it."
  },
  {
    id: 16,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    runtime: 107,
    genres: ["Drama", "Music"],
    mood: "Intense",
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    keywords: ["jazz", "obsession", "mentor", "pressure"],
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    summary: "A young drummer's hunger for greatness collides with a teacher's brutal idea of excellence."
  }
];

const state = {
  search: "",
  genres: new Set(),
  mood: "any",
  decade: "any",
  runtime: "any",
  minRating: 7,
  liked: new Set([3, 7])
};

const genreChips = document.querySelector("#genreChips");
const likedList = document.querySelector("#likedList");
const movieGrid = document.querySelector("#movieGrid");
const spotlight = document.querySelector("#spotlight");
const resultCount = document.querySelector("#resultCount");
const ratingRange = document.querySelector("#ratingRange");
const ratingValue = document.querySelector("#ratingValue");
const searchInput = document.querySelector("#searchInput");
const moodSelect = document.querySelector("#moodSelect");
const decadeSelect = document.querySelector("#decadeSelect");
const runtimeSelect = document.querySelector("#runtimeSelect");

const allGenres = [...new Set(movies.flatMap((movie) => movie.genres))].sort();

function decadeOf(year) {
  return Math.floor(year / 10) * 10;
}

function runtimeBucket(minutes) {
  if (minutes < 100) return "short";
  if (minutes <= 140) return "medium";
  return "long";
}

function movieSearchText(movie) {
  return [
    movie.title,
    movie.director,
    movie.mood,
    ...movie.cast,
    ...movie.genres,
    ...movie.keywords
  ]
    .join(" ")
    .toLowerCase();
}

function matchesSearch(movie) {
  return !state.search || movieSearchText(movie).includes(state.search.toLowerCase());
}

function scoreMovie(movie) {
  let score = movie.rating * 8;
  const reasons = [];
  const likedMovies = movies.filter((item) => state.liked.has(item.id));
  const searchable = movieSearchText(movie);

  if (state.search && searchable.includes(state.search.toLowerCase())) {
    score += 24;
    reasons.push("matches your search");
  }

  const genreMatches = movie.genres.filter((genre) => state.genres.has(genre));
  if (genreMatches.length) {
    score += genreMatches.length * 18;
    reasons.push(`${genreMatches.join(", ")} overlap`);
  }

  if (state.mood !== "any" && movie.mood === state.mood) {
    score += 18;
    reasons.push(`${movie.mood.toLowerCase()} mood`);
  }

  if (state.decade !== "any" && decadeOf(movie.year) === Number(state.decade)) {
    score += 12;
    reasons.push(`${state.decade}s pick`);
  }

  if (state.runtime !== "any" && runtimeBucket(movie.runtime) === state.runtime) {
    score += 8;
    reasons.push("runtime fits");
  }

  likedMovies.forEach((likedMovie) => {
    const sharedGenres = movie.genres.filter((genre) => likedMovie.genres.includes(genre));
    const sharedKeywords = movie.keywords.filter((keyword) => likedMovie.keywords.includes(keyword));
    score += sharedGenres.length * 7 + sharedKeywords.length * 5;
    if (sharedGenres.length >= 2 && movie.id !== likedMovie.id) {
      reasons.push(`similar to ${likedMovie.title}`);
    }
  });

  return {
    ...movie,
    score: Math.max(0, Math.round(score)),
    reasons: [...new Set(reasons)].slice(0, 3)
  };
}

function getRecommendations() {
  return movies
    .filter((movie) => movie.rating >= state.minRating)
    .filter((movie) => !state.liked.has(movie.id))
    .filter(matchesSearch)
    .filter((movie) => state.decade === "any" || decadeOf(movie.year) === Number(state.decade))
    .filter((movie) => state.runtime === "any" || runtimeBucket(movie.runtime) === state.runtime)
    .map(scoreMovie)
    .sort((a, b) => b.score - a.score || b.rating - a.rating);
}

function renderGenres() {
  genreChips.innerHTML = allGenres
    .map(
      (genre) => `
        <button class="chip" type="button" aria-pressed="${state.genres.has(genre)}" data-genre="${genre}">
          ${genre}
        </button>
      `
    )
    .join("");
}

function renderLikedList() {
  likedList.innerHTML = movies
    .slice(0, 8)
    .map(
      (movie) => `
        <button class="liked-chip" type="button" aria-pressed="${state.liked.has(movie.id)}" data-liked="${movie.id}">
          <span>${state.liked.has(movie.id) ? "★" : "☆"}</span>
          ${movie.title}
        </button>
      `
    )
    .join("");
}

function renderSpotlight(movie) {
  if (!movie) {
    spotlight.innerHTML = `<div class="empty-state">No movies matched. Try lowering the rating or clearing a filter.</div>`;
    return;
  }

  spotlight.innerHTML = `
    <article class="spotlight-card">
      <img class="spotlight-poster" src="${movie.poster}" alt="${movie.title} poster" />
      <div class="spotlight-body">
        <p class="eyebrow">Best match · score ${movie.score}</p>
        <h3>${movie.title}</h3>
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span>•</span>
          <span>${movie.rating.toFixed(1)} rating</span>
          <span>•</span>
          <span>${movie.runtime} min</span>
          <span>•</span>
          <span>${movie.director}</span>
        </div>
        <p>${movie.summary}</p>
        <div class="tag-list">
          ${movie.genres.map((genre) => `<span class="tag">${genre}</span>`).join("")}
          <span class="tag">${movie.mood}</span>
        </div>
        <p class="why">Why this: ${movie.reasons.length ? movie.reasons.join(", ") : "strong rating and broad fit"}.</p>
      </div>
    </article>
  `;
}

function renderMovies(recommendations) {
  movieGrid.innerHTML = recommendations
    .slice(1)
    .map(
      (movie) => `
        <article class="movie-card">
          <div class="poster-wrap">
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title} poster" loading="lazy" />
            <div class="poster-actions">
              <span class="score-badge">${movie.score}</span>
              <button class="like-button" type="button" aria-label="Toggle liked ${movie.title}" aria-pressed="${state.liked.has(movie.id)}" data-like="${movie.id}">
                ${state.liked.has(movie.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
          <div class="movie-card-body">
            <h3>${movie.title}</h3>
            <div class="score-row">
              <span>${movie.year} · ${movie.rating.toFixed(1)}</span>
              <span>${movie.mood}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function render() {
  const recommendations = getRecommendations();
  resultCount.textContent = recommendations.length;
  ratingValue.textContent = Number(state.minRating).toFixed(1);
  renderGenres();
  renderLikedList();
  renderSpotlight(recommendations[0]);
  renderMovies(recommendations);
}

function toggleSetValue(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

genreChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;
  toggleSetValue(state.genres, button.dataset.genre);
  render();
});

likedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-liked]");
  if (!button) return;
  toggleSetValue(state.liked, Number(button.dataset.liked));
  render();
});

movieGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-like]");
  if (!button) return;
  toggleSetValue(state.liked, Number(button.dataset.like));
  render();
});

document.querySelector("#clearGenres").addEventListener("click", () => {
  state.genres.clear();
  render();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.search = "";
  state.genres.clear();
  state.mood = "any";
  state.decade = "any";
  state.runtime = "any";
  state.minRating = 7;
  state.liked = new Set([3, 7]);
  searchInput.value = "";
  moodSelect.value = "any";
  decadeSelect.value = "any";
  runtimeSelect.value = "any";
  ratingRange.value = "7";
  render();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

moodSelect.addEventListener("change", (event) => {
  state.mood = event.target.value;
  render();
});

decadeSelect.addEventListener("change", (event) => {
  state.decade = event.target.value;
  render();
});

runtimeSelect.addEventListener("change", (event) => {
  state.runtime = event.target.value;
  render();
});

ratingRange.addEventListener("input", (event) => {
  state.minRating = Number(event.target.value);
  render();
});

render();
