import getGenres from './getGenre';

export function createMarkup(data) {
  return data
    .map(({ genre_ids, title, release_date, poster_path }) => {
      return `<li class="list__item">
            <img src=" https://image.tmdb.org/t/p/original/${poster_path}" alt="" class="list__img" />
            <div class="list__text">
              <h2 class="list__title">${title}</h2>
              <p class="list__genre">${genersByIds(
                genre_ids
              )} | ${release_date.slice(0, 4)}</p>
            </div>
          </li>`;
    })
    .join('');
}

function genersByIds(genre_ids) {
  const geners = genre_ids.map(id => getGenres(id));
  if (geners.length > 2) {
    geners.splice(2, 15, 'Other');
    return geners;
  }
  return geners;
}
