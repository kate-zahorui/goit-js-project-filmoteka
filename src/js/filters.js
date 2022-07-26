import Delivery from './Delivery';
import { createMarkup } from './markupFilmCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const listRef = document.querySelector('.list__film');
const inputRef = document.querySelector('#range');
const rangeSlider = document.getElementById('range');
const rangeBullet = document.getElementById('rs-bullet');
const resetBtnRef = document.querySelector('.reset__btn');
const forAdult = document.querySelector('#i');
const delivery = new Delivery();

rangeSlider.addEventListener('input', showSliderValue, false);
resetBtnRef.addEventListener('click', reset);

inputRef.addEventListener('mouseup', event => {
    const year = event.currentTarget.value;
    getMoviesByYear(year);
});

async function getMoviesByYear(year) {
    delivery.query = 'all';
    delivery.primary_release_year = year;
    let data;
    try {
        data = await delivery.search();
        console.log(delivery.primary_release_year);
        const markup = createMarkup(data.results);
        listRef.innerHTML = markup;
    } catch (error) {
        console.log('ERROR = ', error);
    }
    return data;
}

forAdult.addEventListener('change', () => {
    console.log(forAdult.checked);
    if (forAdult.checked) {
        Confirm.prompt(
            'Confirm your age',
            'Put your age',
            '',
            'Answer',
            'Cancel',
            function okCb(clientAnswer) {
                if (clientAnswer >= 18) {
                    getMoviesForAdult(true);
                } else {
                    forAdult.checked = false;
                    Notify.warning('Sorry you are to young');
                }
            },
            function cancelCb() {
                forAdult.checked = false;
            }
        );
    } else if (!forAdult.checked) {
        getMoviesForAdult(false);
    }
});

async function getMoviesForAdult(boolean) {
    delivery.query = 'all';
    delivery.include_adult = boolean;
    let data;
    try {
        data = await delivery.search();
        console.log(delivery.include_adult);
        const markup = createMarkup(data.results);
        listRef.innerHTML = markup;
    } catch (error) {
        console.log('ERROR = ', error);
    }
    return data;
}

function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
}

async function reset() {
    let data;
    forAdult.checked = false;
    rangeSlider.value = 2022;
    rangeBullet.innerHTML = rangeSlider.value;
    try {
        data = await delivery.trend();
        console.log(delivery.include_adult);
        const markup = createMarkup(data.results);
        listRef.innerHTML = markup;
    } catch (error) {
        console.log('ERROR = ', error);
    }
    return data;
}
