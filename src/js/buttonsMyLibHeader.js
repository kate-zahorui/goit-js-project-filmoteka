import lsAPI from './localestorage';
import { Notify } from 'notiflix';
import libraryMarkup from './libraryMarkup';
import getGenres from './getGenre';

const libraryEl = document.querySelector('.js-library');
const watchedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');

watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);

const LS_WATCHED_KEY = 'watched';
const LS_QUEUE_KEY = 'queue';
const LS_LIBRARY_STATE = 'library-state';

let watchList = lsAPI.load(LS_WATCHED_KEY);
watchList = watchList ? watchList : [];

let queueList = lsAPI.load(LS_QUEUE_KEY);
queueList = queueList ? queueList : [];

export function watchedBtnClick() {
  const markup = libraryMarkup(watchList);
  libraryEl.innerHTML = markup;
  watchedBtn.classList.add('active');
  queueBtn.classList.remove('active');
  lsAPI.save(LS_LIBRARY_STATE, 'watched');
}

export function queueBtnClick() {
  const markup = libraryMarkup(queueList);
  libraryEl.innerHTML = markup;
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');
  lsAPI.save(LS_LIBRARY_STATE, 'queue');
}
