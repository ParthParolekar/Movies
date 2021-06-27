const auth = "59441c8d9904e75ec235032cfdb2ea10";
const movies = document.querySelector(".movies");
const searchInput = document.querySelector("#search-input");
const form = document.querySelector(".search-form");
let fetchLink;
const imgURL = "https://image.tmdb.org/t/p/w500";
function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function popularMovies() {
  fetchLink = `https://api.themoviedb.org/3/movie/popular?api_key=59441c8d9904e75ec235032cfdb2ea10&language=en-US&page=1`;

  getMovies(fetchLink);
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

popularMovies();
// // async function fetchApi(url) {
// //   const dataFetch = await fetch(url, {
// //     method: "GET",
// //     headers: { Accept: "application/json", Authorization: auth },
// //   });
// //   data = await dataFetch.json();
// //   return data;
// // }

// function displayMovies(data) {
//   data.results.forEach((movie) => {
//     const movieCard = document.createElement("div");
//     movieCard.classList.add(".movie-card");
//     movieCard.innerHTML = `
//         <div class="poster">
//           <img
//             class="movie-poster"
//             src="C:\Users\prasad\Desktop\poster.jpg"
//             alt="Movie Poster"
//           />
//         </div>
//         <div class="movie-info">
//           <div class="movie-name-year">
//             <h2 class="movie-name">${movie.original_title}</h2>
//             <span class="movie-year">${movie.release_date}</span>
//           </div>
//           <div class="rating">
//             <span class="movie-rating">${movie.vote_average}</span>
//           </div>
//         </div>`;
//   });
// }

// async function popularMovies() {
//   fetchLink = `https://api.themoviedb.org/3/movie/popular?api_key=59441c8d9904e75ec235032cfdb2ea10&language=en-US&page=1`;

//   const film = await fetchApi(fetchLink);
//   console.log(film);
//   displayMovies(film);
// }

// popularMovies();
