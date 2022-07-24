export function modalLibraryMarkup({
  poster_path,
  title,
  original_title,
  genres,
  vote_average,
  vote_count,
  popularity,
  overview,
}) {
  let movieGenres = genres.map(genre => genre.name);
  console.log(movieGenres);
  if (movieGenres.length > 2) {
    movieGenres = `${movieGenres[0]}, ${movieGenres[1]}, Other`;
  }
  return /*html*/ `<div class="movie-modal__content">
  <img class="movie-modal__img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}"></img>
  <div class="movie-modal__text">
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
        <li>${movieGenres}</li>
      </ul></div>
      <p class="movie-modal__about"><span class="movie-modal__about--span">ABOUT</span>${overview}</p>
      <div class="modal__btns">
        <button type="button" class="modal__btns__button mr active js-addtowatched">add to watched</button>
        <button type="button" class="modal__btns__button js-addtoqueue">add to queue</button>
      </div>
  </div>
</div>
    `;
}
