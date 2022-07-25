import './js/buttonsMyLibHeader';
import './js/modal';
import lsAPI from './js/localestorage';
import { watchedBtnClick, queueBtnClick } from './js/buttonsMyLibHeader';
import './js/modalSingUp';

const LS_LIBRARY_STATE = 'library-state';

let libraryState = lsAPI.load(LS_LIBRARY_STATE);
libraryState = libraryState ? libraryState : [];

if (libraryState === 'queue') {
  queueBtnClick();
} else {
  watchedBtnClick();
}
