import debounce from 'lodash.debounce';
import Delivery from './js/Delivery';
import getGenres from './js/getGenre';

const search = document.querySelector('#search-box');
const delivery = new Delivery();

search.addEventListener('input', debounce(searchMovies, 500));

getMovies('');

async function searchMovies() {
  const query = search.value.trim();
  delivery.query = query;
  getMovies(query);
}

async function getMovies(query) {
  let data;
  try {
    data = query ? await delivery.search() : await delivery.trend();
  } catch (error) {
    console.log('ERROR = ', error);
  }
  console.log(data);
}
