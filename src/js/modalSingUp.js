import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import photo1 from '../images/photo_1.jpg'
import photo2 from '../images/photo_2.jpg'
import photo3 from '../images/photo_3.jpg'
import photo4 from '../images/photo_4.jpg'
import photo5 from '../images/photo_5.jpg'
import close from '../images/close.svg'



const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),

};
  
    function openModal(event) {
        event.preventDefault()
        modal.show()
    }

    refs.openModalBtn.addEventListener("click", openModal);

    
    
const modal = basicLightbox.create(
        `<div class="modal" data-modal>
            <button type="button" class="btn__modal__close" data-modal-close>
           
                <svg class="modal__svg__image">
                    <use class="modal__svg__icon" href="${close}#icon-close"></use>
                </svg>
            </button>
            <div class="modal__photos">
             <div class="modal__images">
            <img class="modal__photo" src="${photo3}" width="100" alt="Kate photo"/>
                <h3>Катерина Загоруй</h3>
                <h4>Team Lead</h4>
                <p>Frontend Developer</p>
            </div>

            <div class="modal__images">
            <img class="modal__photo" src="${photo2}" width="100" alt="Serg photo"/>
                <h3>Сергій Соловйов</h3>
                <h4>Scram Masper</h4>
                <p>Frontend Developer</p>
            </div>

            <div class="modal__images">
                <img class="modal__photo" src="${photo1}" width="100"  alt="Oleg photo"/>
                <h3>Олег Чучин</h3>
                <p>Frontend Developer</p>     
                
            </div>
            
            <div class="modal__images">
            <img class="modal__photo" src="${photo4}" width="100" alt="Andrey photo">
                <h3>Андрій Макаров</h3>
                <p>Frontend Developer</p>
            </div>

            <div class="modal__images">
            <img class="modal__photo" src="${photo5}" width="100" alt="Alex photo">
                <h3>Олександр Алемаев</h3>
                <p>Frontend Developer</p>
            </div>
           </div>
        </div> `
        , {
            onShow: () => window.addEventListener("keydown", clickEsc),
            onClose: () => window.removeEventListener("keydown", clickEsc),

        });
    
function clickEsc(event) {
    if (event.key === "Escape") {
        modal.close();
    }
}







// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", openModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//     function openModal(event) {
//         event.preventDefault()
//         modal.show()
//     }

//     function toggleModal(event) {
//         event.preventDefault()
//       console.log(event.target)
//     refs.modal.classList.toggle("visually-hidden");
//   }
// })();