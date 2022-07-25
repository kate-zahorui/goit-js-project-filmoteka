import lsAPI from './localestorage';
import { Notify } from 'notiflix';

const LS_WATCHED_KEY = 'watched';
const LS_QUEUE_KEY = 'queue';
const LS_LIBRARY_STATE = 'library-state';

let currentPage = lsAPI.load(LS_LIBRARY_STATE);

let addToWatchedBtn = document.querySelector('.js-addtowatched');
let addToQueueBtn = document.querySelector('.js-addtoqueue');

let watchList = lsAPI.load(LS_WATCHED_KEY);
watchList = watchList ? watchList : [];

let queueList = lsAPI.load(LS_QUEUE_KEY);
queueList = queueList ? queueList : [];

let movieModal = {};

export function getMovie(movieFromModal) {
    movieModal = movieFromModal;
    return movieModal;
}

export function addModalButtons() {
    watchList = lsAPI.load(LS_WATCHED_KEY);
    queueList = lsAPI.load(LS_QUEUE_KEY);
    watchList = watchList ? watchList : [];
    queueList = queueList ? queueList : [];
    addToWatchedBtn = document.querySelector('.js-addtowatched');
    addToQueueBtn = document.querySelector('.js-addtoqueue');

    addToWatchedBtn.addEventListener('click', addToWatchedBtnClick);
    addToQueueBtn.addEventListener('click', addToQueueBtnClick);

    const isInWatchList = watchList.findIndex(
        movie => movie.id === movieModal.id
    );
    const isInQueueList = queueList.findIndex(
        movie => movie.id === movieModal.id
    );

    addToWatchedBtn.textContent =
        isInWatchList < 0 ? 'Add to watched' : 'remove from watched';
    addToQueueBtn.textContent =
        isInQueueList < 0 ? 'Add to queue' : 'remove from queue';
}

function addToWatchedBtnClick() {
    currentPage = lsAPI.load(LS_LIBRARY_STATE);
    watchList = lsAPI.load(LS_WATCHED_KEY);

    watchList = watchList ? watchList : [];

    const isInWatchList = watchList.findIndex(
        movie => movie.id === movieModal.id
    );

    if (isInWatchList === -1) {
        Notify.success('Movie is added to Watched!');
        watchList.push(movieModal);

        ////////////////

        lsAPI.save(LS_WATCHED_KEY, watchList);
        addToWatchedBtn.textContent = 'remove from watched';

        return;
    }

    Notify.info('Movie is removed from Watched!');
    addToWatchedBtn.textContent = 'add to watched';

    watchList.splice(isInWatchList, 1);
    if (currentPage === 'watched') {
        document.querySelector(`[id="${movieModal.id}"]`).remove();
    }
    lsAPI.save(LS_WATCHED_KEY, watchList);
}

function addToQueueBtnClick() {
    currentPage = lsAPI.load(LS_LIBRARY_STATE);
    queueList = lsAPI.load(LS_QUEUE_KEY);

    queueList = queueList ? queueList : [];

    const isInQueueList = queueList.findIndex(
        movie => movie.id === movieModal.id
    );

    if (isInQueueList === -1) {
        Notify.success('Movie is added to Queue!');
        queueList.push(movieModal);
        lsAPI.save(LS_QUEUE_KEY, queueList);
        addToQueueBtn.textContent = 'remove from queue';
        return;
    }

    Notify.info('Movie is removed from Queue!');
    addToQueueBtn.textContent = 'add to queue';

    queueList.splice(isInQueueList, 1);
    if (currentPage === 'queue') {
        document.querySelector(`[id="${movieModal.id}"]`).remove();
    }
    lsAPI.save(LS_QUEUE_KEY, queueList);
}
