const auth = "59441c8d9904e75ec235032cfdb2ea10";
const movies = document.querySelector(".movies");
let searchInput = document.querySelector("#search-input");
let searchValue;
let currentSearch;
const form = document.querySelector(".search-form");
let fetchLink;
const imgURL = "https://image.tmdb.org/t/p/w500";
const moreBtn = document.querySelector(".more-btn");
let page = 1;

//event listeners
moreBtn.addEventListener("click", showMore);
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchMovies(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
  page = 1;
}

function searchMovies(search) {
  clearSearch();
  fetchLink = `https://api.themoviedb.org/3/search/movie?api_key=59441c8d9904e75ec235032cfdb2ea10&language=en-US&query=${search}&page=${page}&include_adult=false`;
  getMovies(fetchLink);
}

function showMore() {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.themoviedb.org/3/search/movie?api_key=59441c8d9904e75ec235032cfdb2ea10&language=en-US&query=${currentSearch}&page=${page}&include_adult=false`;
  } else {
    fetchLink = `https://api.themoviedb.org/3/movie/popular?api_key=59441c8d9904e75ec235032cfdb2ea10&language=en-US&page=${page}`;
  }
  getMovies(fetchLink);
}

function popularMovies() {
  fetchLink = `https://api.themoviedb.org/3/movie/popular?api_key=59441c8d9904e75ec235032cfdb2ea10&language=en-US&page=1`;

  getMovies(fetchLink);
}

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  data.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add(".movie-card");
    movieCard.innerHTML = `
        <div class="poster">
          <img
            class="movie-poster"
            src=${imgURL + movie.poster_path}
            alt="Movie Poster"
          />
        </div>
        <div class="movie-info">
          <h2 class="movie-name">${movie.original_title}</h2>
          <span class="movie-rating">${movie.vote_average}</span>
        </div>`;
    movies.appendChild(movieCard);
  });
}

function clearSearch() {
  movies.innerHTML = "";
  searchInput.value = "";
}

popularMovies();
