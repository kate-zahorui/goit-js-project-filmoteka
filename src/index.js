import debounce from 'lodash.debounce';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Delivery from './js/Delivery';
import getGenres from './js/getGenre';
import { createMarkup } from './js/markupFilmCard';
import getPagination from './js/pagination';
import loading from './js/loadingSpinner';
import './js/modal';
const container = document.getElementById('tui-pagination-container');

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
    container.removeAttribute('style');
    const query = search.value.trim();
    delivery.query = query;
    const data = await getMovies();
    if (data.total_results) {
        instance = getPagination(data.total_results);
        instance.on('afterMove', loadPage);
    } else {
        container.setAttribute('style', 'display: none');
        Report.failure(
            'Search result not successful &#9785 ',
            'Enter the correct movie name and try again.',
            'Okay',
            {
                width: '400px',
                svgSize: '100px',
                titleFontSize: '20px',
                messageFontSize: '18px',
                buttonFontSize: '20px',
                borderRadius: '10px',
            }
        );
    }
}

async function getMovies() {
    loading.show();
    let data;
    try {
        data = delivery.query
            ? await delivery.search()
            : await delivery.trend();
        const markup = createMarkup(data.results);
        listRef.innerHTML = markup;
    } catch (error) {
        console.log('ERROR = ', error);
    }
    //console.log(data); // Не забыть удалить
    loading.close();
    return data;
}

function loadPage(event) {
    delivery.page = event.page;
    getMovies();
}
