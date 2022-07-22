function libraryMarkup(moviesSet) {
  return moviesSet
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
      }) => /*html*/ `<li>
        <img class="movies-lib__img" src="${poster_path}" alt="${title}"></img>
        <h3 class="movies-lib__title">${title}</h3>
        <p class="movies-lib__genre">${genre_ids}</p>
        <p class="movies-lib__year">${release_date}</p>
        <p class="movies-lib__rate">${vote_average}</p>
      </li>`
    )
    .join('');
}
