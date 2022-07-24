import getGenres from './getGenre';

export function createMarkup(data) {
  return data
    .map(({ genre_ids, title, release_date, poster_path, id }) => {
      let genres = genre_ids.map(id => getGenres(id));
      if (genres.length > 2) {
        genres = `${genres[0]}, ${genres[1]}, Other`;
      }
      return /*html*/ `<li class="list__item" id="${id}">
            <img src=" https://image.tmdb.org/t/p/original/${poster_path}" alt="" class="list__img" />
            <div class="list__text">
              <h2 class="list__title">${title}</h2>
              <p class="list__genre">${genres} | ${release_date.slice(0, 4)}</p>
            </div>
          </li>`;
    })
    .join('');
}

// function g(genre_ids) {
//     if (genre_ids.length > 3) {
//       const geners = genre_ids;
//   }
//   const geners = genre_ids.map(id => getGenres(id));
// }
