import lsAPI from './localestorage';
import { Notify } from 'notiflix';
import libraryMarkup from './libraryMarkup';
import getGenres from './getGenre';

const testMovie = {
  adult: false,
  backdrop_path: '/2u1YBNBlSwvBReyvI7i5z5ykQXP.jpg',
  id: 725201,
  title: 'The Gray Man',
  original_language: 'en',
  original_title: 'The Gray Man',
  overview:
    "When the CIA's most skilled mercenary known as Court Gentry, aka Sierra Six, accidentally uncovers dark agency secrets, he becomes a primary target and is hunted around the world by psychopathic former colleague Lloyd Hansen and international assassins.",
  poster_path: '/13r1DFhfL0qufFjXnrvWuh6qKqH.jpg',
  media_type: 'movie',
  genre_ids: [28, 53],
  popularity: 185.958,
  release_date: '2022-07-13',
  video: false,
  vote_average: 6.775,
  vote_count: 138,
};

const libraryEl = document.querySelector('.js-library');
const watchedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');
const addToWatchedBtn = document.querySelector('.js-addtowatched');
const addToQueueBtn = document.querySelector('.js-addtoqueue');

watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);
addToWatchedBtn.addEventListener('click', addToWatchedBtnClick);
addToQueueBtn.addEventListener('click', addToQueueBtnClick);

const LS_WATCHED_KEY = 'watched';
const LS_QUEUE_KEY = 'queue';

let watchList = lsAPI.load(LS_WATCHED_KEY);
watchList = watchList ? watchList : [];

let queueList = lsAPI.load(LS_QUEUE_KEY);
queueList = queueList ? queueList : [];

const isInWatchList = watchList.findIndex(movie => movie.id === testMovie.id);
const isInQueueList = queueList.findIndex(movie => movie.id === testMovie.id);

if (isInWatchList !== -1) {
  addToWatchedBtn.textContent = 'remove from watched';
}
if (isInQueueList !== -1) {
  addToQueueBtn.textContent = 'remove from queue';
}

function watchedBtnClick(movie_id) {
  let watchList = localStorage.getItem(LS_WATCHED_KEY);

  if (watchList) {
    watchList = JSON.parse(watchList);
  }
  const markup = libraryMarkup(watchList);
  libraryEl.innerHTML = markup;
  console.log(markup);
  console.log('watchList', watchList);
}

function queueBtnClick(movie_id) {
  let queueList = localStorage.getItem(LS_QUEUE_KEY);

  if (queueList) {
    queueList = JSON.parse(queueList);
  }

  const markup = libraryMarkup(queueList);
  libraryEl.innerHTML = markup;
  console.log(markup);
  console.log('queueList', queueList);
}

function addToWatchedBtnClick(movie_id) {
  let watchList = lsAPI.load(LS_WATCHED_KEY);
  console.log(watchList);

  watchList = watchList ? watchList : [];
  console.log(watchList);

  const isInWatchList = watchList.findIndex(movie => movie.id === testMovie.id);
  console.log(isInWatchList);

  if (isInWatchList === -1) {
    Notify.success('Movie is added to Watched');
    watchList.push(testMovie);
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

function addToQueueBtnClick(movie_id) {
  let queueList = lsAPI.load(LS_QUEUE_KEY);
  console.log(queueList);

  queueList = queueList ? queueList : [];
  console.log(queueList);

  const isInQueueList = queueList.findIndex(movie => movie.id === testMovie.id);
  console.log(isInQueueList);

  if (isInQueueList === -1) {
    Notify.success('Movie is added to Queue');
    queueList.push(testMovie);
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
