let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close-button');
let popupSaveAndClose = document.querySelector('.popup__save-button');

popupOpen.onclick = function() {
  popup.style.display="block";
}

popupClose.onclick = function() {
  popup.style.display="none";
}

popupSaveAndClose.onclick = function() {
  popup.style.display="none";
}

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__name-input');
let descriptionInput = document.querySelector('.popup__description-input');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameValue = document.querySelector('.popup__name-input').value;
    let descriptionValue = document.querySelector('.popup__description-input').value;

    let name = document.querySelector('.profile__name');
    let description = document.querySelector('.profile__description');

    name.textContent = nameValue;
    description.textContent = descriptionValue;
}

formElement.addEventListener('submit', formSubmitHandler);