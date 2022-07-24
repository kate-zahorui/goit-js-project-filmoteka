import * as basicLightbox from 'basiclightbox';
import Delivery from './Delivery';
import { modalLibraryMarkup } from './modalLibraryMarkup';
import './buttonsModal';
import { addModalButtons, getMovie } from './buttonsModal';

const delivery = new Delivery();
let modalRef = {};

const listRef = document.querySelector('.list__film');

listRef.addEventListener('click', onFilmClick);

async function onFilmClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'UL') {
    return;
  }
  const movieCard = e.target.closest('li[id]');
  const movieId = getId(movieCard);
  const movie = await getMovieById(movieId);

  openModal(movie);
  getMovie(movie);
  addModalButtons();
}

function getId(movieCard) {
  return movieCard.id;
}

async function getMovieById(movieId) {
  try {
    const movie = await delivery.fetchById(movieId);
    return movie;
  } catch (error) {
    console.log('ERROR = ', error);
  }
  console.log(data);
}

function openModal(movie) {
  const moviesModalContent = modalLibraryMarkup(movie);
  const instance = basicLightbox.create(
    `
  <div class="movies-modal">
    <button type="button" class="movies-modal__close-btn" data-modal-close>
    </button>
  ${moviesModalContent}
</div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('button[data-modal-close]').onclick =
          instance.close;

        document.addEventListener('keydown', modalCloseByEsc);
      },
      onClose: () => {
        document.removeEventListener('keydown', modalCloseByEsc);
      },
    }
  );
  instance.show();
  return (modalRef = instance);
}

function modalCloseByEsc(event) {
  event.preventDefault();
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    modalRef.close();
  }
}

{
  /* <svg class="movies-modal__close-icon" width="30" height="30">
  <use href="./images/icons.svg#icon-modal-close"></use>
</svg>; */
}
