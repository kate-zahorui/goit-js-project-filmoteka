import Delivery from './Delivery';
import { createMarkup } from './markupFilmCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { addFilter } from '../index';

export const refs = {
    listRef: document.querySelector('.list__film'),
    inputRef: document.querySelector('#range'),
    rangeSlider: document.getElementById('range'),
    rangeBullet: document.getElementById('rs-bullet'),
    resetBtnRef: document.querySelector('.reset__btn'),
    forAdult: document.querySelector('#i'),
    delivery: new Delivery(),
};

refs.rangeSlider.addEventListener('input', showSliderValue, false);
// refs.resetBtnRef.addEventListener('click', resetFilters);

refs.inputRef.addEventListener('mouseup', event => {
    const year = event.currentTarget.value;
    if (refs.forAdult.checked) {
        let bool = true;
        addFilter(year, bool);
    } else {
        addFilter(year);
    }
});

refs.forAdult.addEventListener('change', () => {
    if (refs.forAdult.checked) {
        Confirm.prompt(
            'Confirm your age',
            'Put your age',
            '',
            'Answer',
            'Cancel',
            function okCb(clientAnswer) {
                if (clientAnswer >= 18) {
                    addFilter(refs.inputRef.value, true);
                } else {
                    refs.forAdult.checked = false;
                    Notify.warning('Sorry, but not today');
                }
            },
            function cancelCb() {
                refs.forAdult.checked = false;
            }
        );
    } else if (!refs.forAdult.checked) {
        addFilter(refs.inputRef.value, false);
    }
});

function showSliderValue() {
    refs.rangeBullet.innerHTML = refs.rangeSlider.value;
}

// async function resetFilters() {
//     let data;
//     refs.forAdult.checked = false;
//     refs.rangeSlider.value = 2022;
//     refs.rangeBullet.innerHTML = refs.rangeSlider.value;
//     try {
//         data = await refs.delivery.trend();
//         const markup = createMarkup(data.results);
//         refs.listRef.innerHTML = markup;
//     } catch (error) {
//         console.log('ERROR = ', error);
//     }
//     return data;
// }
