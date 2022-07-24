import getGenres from './getGenre';

export default function libraryMarkup(moviesSet) {
  return moviesSet
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => {
        let genres = genre_ids.map(id => getGenres(id));
        if (genres.length > 2) {
          genres = `${genres[0]}, ${genres[1]}, Other`;
        }
        return /*html*/ `<li id="${id}">
        <img class="list__img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}"></img>
        <div class="list__text">
        <h2 class="list__title">${title}</h2>
        <p class="list__genre">${genres} | ${release_date.slice(0, 4)}&nbsp&nbsp
        <span class="list__vote">${vote_average.toFixed(1)}</span></p>
        </div>
      </li>`;
      }
    )
    .join('');
}
