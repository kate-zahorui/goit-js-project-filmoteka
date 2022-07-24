import debounce from 'lodash.debounce';
import Delivery from './js/Delivery';
import getGenres from './js/getGenre';
import { createMarkup } from './js/markupFilmCard';
import getPagination from './js/pagination';
import './js/modal';

const listRef = document.querySelector('.list__film');

const search = document.querySelector('#search-box');
const delivery = new Delivery();

search.addEventListener('input', debounce(searchMovies, 500));
let instance;
searchMovies();

async function searchMovies() {
  if (instance) {
    instance.reset();
  }

  const query = search.value.trim();
  delivery.query = query;
  const data = await getMovies();
  instance = getPagination(data.total_results);
  instance.on('afterMove', async event => {
    delivery.page = event.page;
    getMovies();
  });
}

async function getMovies() {
  console.log(delivery.page);
  let data;
  try {
    data = delivery.query ? await delivery.search() : await delivery.trend();
    const markup = createMarkup(data.results);
    listRef.innerHTML = markup;
  } catch (error) {
    console.log('ERROR = ', error);
  }
  console.log(data);
  return data;
}

// instance.on('afterMove', async event => {
//   const currentPage = event.page;
//   delivery.page = currentPage;
//   console.log(delivery.page);
//   let data;
//   try {
//     data = delivery.query ? await delivery.search() : await delivery.trend();
//     const markup = createMarkup(data.results);
//     listRef.innerHTML = markup;
//     window.scroll(0, 0);
//   } catch (error) {
//     console.log('ERROR = ', error);
//   }
// });
