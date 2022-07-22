function modalLibraryMarkup(moviesSet) {
  return moviesSet
    .map(
      ({
        poster_path,
        title,
        original_title,
        genre_ids,
        release_date,
        vote_average,
        vote_count,
        popularity,
        overview,
      }) => /*html*/ `<li>
        <img class="movies-modal__img" src="${poster_path}" alt="${title}"></img>
        <h2 class="movies-modal__title">${title}</h2>
        <div class="movies-modal__figures"><ul>
            <li>Vote / Votes</li>
            <li>Popularity</li>
            <li>Original Title</li>
            <li>Genre</li>
        </ul>
        <ul>
            <li>${vote_average} / ${vote_count}</li>
            <li>${popularity}</li>
            <li>${original_title}</li>
            <li>${genre_ids}</li>
        </ul></div>
        <p class="movies-modal__about"><span class="movies-modal__about--span">ABOUT</span>${overview}</p>
      </li>`
    )
    .join('');
}
