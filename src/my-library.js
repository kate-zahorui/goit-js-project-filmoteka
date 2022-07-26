import './js/buttonsMyLibHeader';
import './js/modal';
import './js/modalSingUp';
import lsAPI from './js/localestorage';
import { btnClick } from './js/buttonsMyLibHeader';
import { clickFirebase, btnClickFirebase } from './js/btnFromFirebase';
import './js/authentication';
import { logOutForm, registerOpen } from './js/authentication';

const LS_LIBRARY_STATE = 'library-state';
const signUp = document.querySelector('#user');
const watchedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');
signUp.addEventListener('isLogedIn', userLogin);

let libraryState = lsAPI.load(LS_LIBRARY_STATE);
libraryState = libraryState ? libraryState : [];
const user = JSON.parse(sessionStorage.getItem('user'));

if (user) {
    signUp.textContent = user.displayName || 'Anonymous';
    signUp.removeEventListener('click', registerOpen);
    signUp.addEventListener('click', logOutForm);
    watchedBtn.addEventListener('click', clickFirebase);
    queueBtn.addEventListener('click', clickFirebase);
    btnClickFirebase();
} else {
    signUp.removeEventListener('click', logOutForm);
    signUp.addEventListener('click', registerOpen);
    signUp.textContent = 'Login | Join';
    watchedBtn.addEventListener('click', btnClick);
    queueBtn.addEventListener('click', btnClick);
    btnClick(libraryState);
}

function userLogin() {
    watchedBtn.addEventListener('click', clickFirebase);
    queueBtn.addEventListener('click', clickFirebase);
    watchedBtn.removeEventListener('click', btnClick);
    queueBtn.removeEventListener('click', btnClick);
    btnClickFirebase();
}
