export function modalLibraryMarkup({
  poster_path,
  title,
  original_title,
  genre_ids,
  vote_average,
  vote_count,
  popularity,
  overview,
}) {
  let genres = getGenres(genre_ids);
  if (genres.length > 2) {
    genres = `${genres[0]}, ${genres[1]}, Other`;
    return /*html*/ `<div class="movie-modal__content"><img class="movie-modal__img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}"></img>
    <h2 class="movie-modal__title">${title}</h2>
    <div class="movie-modal__figures"><ul>
        <li>Vote / Votes</li>
        <li>Popularity</li>
        <li>Original Title</li>
        <li>Genre</li>
    </ul>
    <ul>
        <li>${vote_average} / ${vote_count}</li>
        <li>${popularity}</li>
        <li>${original_title}</li>
        <li>${genres}</li>
    </ul></div>
    <p class="movie-modal__about"><span class="movie-modal__about--span">ABOUT</span>${overview}</p>
    </div>
    `;
  }
}
