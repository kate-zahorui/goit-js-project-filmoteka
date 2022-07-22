const watchedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');

const savedWatched = localStorage.getItem('watched');
const savedQueue = localStorage.getItem('queue');

watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);

function watchedBtnClick(movie_id) {
  console.log(1);

  let watchList = localStorage.getItem('watched');

  if (watchList) {
    watchList = JSON.parse(watchList);
  }
  console.log(watchList);
}

function queueBtnClick(movie_id) {
  console.log(2);

  let queueList = localStorage.getItem('queue');

  if (queueList) {
    queueList = JSON.parse(queueList);
  }

  console.log(queueList);
}

const addToWatchedBtn = document.querySelector('.js-addtowatched');
const addToQueueBtn = document.querySelector('.js-addtoqueue');

addToWatchedBtn.addEventListener('click', addToWatchedBtnClick);
addToQueueBtn.addEventListener('click', addToQueueBtnClick);

function addToWatchedBtnClick(movie_id) {
  console.log(3);

  let watchList = [1, 2, 3, 4, 5];
  //   watchList += movie_id;
  localStorage.setItem('watched', JSON.stringify(watchList));
}

function addToQueueBtnClick(movie_id) {
  console.log(4);
  let queueList = [1, 2, 3, 4, 5];
  //   queueList += movie_id;
  localStorage.setItem('queue', JSON.stringify(queueList));
}
