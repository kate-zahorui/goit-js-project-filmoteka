import * as basicLightbox from 'basiclightbox';

const listRef = document.querySelector('.list__film');

listRef.addEventListener('click', onFilmClick);

function onFilmClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'UL') {
    return;
  }
  openModal();
}

function openModal() {
  // const moviesModalContent = modalLibraryMarkup(filmId);
  // ${moviesModalContent}
  const instance = basicLightbox.create(
    `
  <div class="movies-modal">
    <button type="button" class="movies-modal__close-btn" data-modal-close>
      <svg class="movies-modal__close-icon" width="30" height="30">
        <use href="images/icons.svg#icon-modal-close"></use>
      </svg>
    </button>

    <div class="modal__btns">
  <button type="button" class="modal__btns__button mr active js-addtowatched">
    add to watched
  </button>
  <button type="button" class="modal__btns__button js-addtoqueue">
    add to queue
  </button>
</div>
<div class="movies-lib"></div>
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
