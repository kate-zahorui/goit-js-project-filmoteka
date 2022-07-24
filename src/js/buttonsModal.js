import lsAPI from './localestorage';
import { Notify } from 'notiflix';
import getGenres from './getGenre';

const LS_WATCHED_KEY = 'watched';
const LS_QUEUE_KEY = 'queue';

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

  if (isInWatchList !== -1) {
    addToWatchedBtn.textContent = 'remove from watched';
  }
  if (isInQueueList !== -1) {
    addToQueueBtn.textContent = 'remove from queue';
  }
}

function addToWatchedBtnClick() {
  console.log(movieModal);
  let watchList = lsAPI.load(LS_WATCHED_KEY);
  console.log(watchList);

  watchList = watchList ? watchList : [];
  console.log(watchList);

  const isInWatchList = watchList.findIndex(
    movie => movie.id === movieModal.id
  );
  console.log(isInWatchList);

  if (isInWatchList === -1) {
    Notify.success('Movie is added to Watched!');
    watchList.push(movieModal);
    lsAPI.save(LS_WATCHED_KEY, watchList);
    addToWatchedBtn.textContent = 'remove from watched';
    return;
  }

  Notify.info('Movie is removed from Watched!');
  addToWatchedBtn.textContent = 'add to watched';

  watchList.splice(watchList[isInWatchList], 1);
  console.log(watchList);
  lsAPI.save(LS_WATCHED_KEY, watchList);
  console.log(lsAPI.load(LS_WATCHED_KEY));
}

function addToQueueBtnClick() {
  let queueList = lsAPI.load(LS_QUEUE_KEY);
  console.log(queueList);

  queueList = queueList ? queueList : [];
  console.log(queueList);

  const isInQueueList = queueList.findIndex(
    movie => movie.id === movieModal.id
  );
  console.log(isInQueueList);

  if (isInQueueList === -1) {
    Notify.success('Movie is added to Queue!');
    queueList.push(movieModal);
    lsAPI.save(LS_QUEUE_KEY, queueList);
    addToQueueBtn.textContent = 'remove from queue';
    return;
  }

  Notify.info('Movie is removed from Queue!');
  addToQueueBtn.textContent = 'add to queue';

  queueList.splice(queueList[isInQueueList], 1);
  console.log(queueList);
  lsAPI.save(LS_QUEUE_KEY, queueList);
  console.log(lsAPI.load(LS_QUEUE_KEY));
}
