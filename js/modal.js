const modalwrite = document.querySelector('.contacts-button');
const modalPopup = document.querySelector('.modal');
const modalclose = modalPopup.querySelector('.button-close');

modalwrite.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.add('modal-show');
});

modalclose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('modal-show');

})