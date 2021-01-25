let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__editButton');
let popupClose = document.querySelector('.popup__closeButton');
let popupSaveAndClose = document.querySelector('.popup__saveButton');

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

let nameInput = document.querySelector('.popup__nameInput');
let descriptionInput = document.querySelector('.popup__descriptionInput');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameValue = document.querySelector('.popup__nameInput').value;
    let descriptionValue = document.querySelector('.popup__descriptionInput').value;

    let name = document.querySelector('.profile__name');
    let description = document.querySelector('.profile__description');

    name.textContent = nameValue;
    description.textContent = descriptionValue;
}

formElement.addEventListener('submit', formSubmitHandler);