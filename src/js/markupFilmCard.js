import getGenres from './getGenre';

export function createMarkup(data) {
  return data
    .map(({ genre_ids, title, release_date, poster_path }) => {
      const geners = genre_ids.map(id => getGenres(id));
      console.log(geners);
      return `<li class="list__item">
            <img src=" https://image.tmdb.org/t/p/original/${poster_path}" alt="" class="list__img" />
            <div class="list__text">
              <h2 class="list__title">${title}</h2>
              <p class="list__genre">${geners} | ${release_date}</p>
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
