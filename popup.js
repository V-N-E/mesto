const modal = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.popup__close-button');
const editForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_enter_name');
const descriptionInput = document.querySelector('.popup__input_enter_description');
const textName = document.querySelector('.profile__name');
const textDescription = document.querySelector('.profile__description');

editButton.addEventListener('click', edit);
function edit() {
  modal.classList.remove('popup_closed');

  nameInput.value = textName.textContent;
  descriptionInput.value = textDescription.textContent;
}

closeModalButton.addEventListener('click', close);
function close() {
  modal.classList.add('popup_closed');
}

editForm.addEventListener('submit', form); 
function form(e) {
  e.preventDefault();
  textName.textContent = nameInput.value;
  textDescription.textContent = descriptionInput.value;

  modal.classList.add('popup_closed');
}
