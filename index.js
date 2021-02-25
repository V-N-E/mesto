const modal = document.getElementById('popupInfo');
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

/****************************************************************************************************/

const initialCards = [
  {
    id: 0,
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    id: 1,
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    id: 2,
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    id: 3,
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    id: 4,
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    id: 5,
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementsTemplate = document.querySelector('.elements__template');
const elements = document.querySelector('.elements');

function getElement(item, index) {
  const newElement = elementsTemplate.content.cloneNode(true).querySelector('.elements__element');

  const image = newElement.querySelector('.elements__image');
  const title = newElement.querySelector('.elements__name');
  title.textContent = item.name;
  image.setAttribute('src', item.link);
  image.setAttribute('alt', item.name);

  newElement.setAttribute('data-card-id', item.id)
  return newElement;
}

function renderElement() {
  const map = initialCards.map(getElement);
  elements.append(...map);
}

renderElement();

/****************************************************************************************************/

document.querySelectorAll('[data-like]')
  .forEach(like => {
    like.addEventListener('click', () => {
      like.classList.toggle('elements__like_liked')
    })
  })

/****************************************************************************************************/

document.querySelectorAll('[data-delete-button]')
  .forEach(deleteBtn => {
    deleteBtn.addEventListener('click', () => {

      const reallyDelete = confirm('Вы действительно хотите удалить карточку?')

      if (reallyDelete) {
        const { cardId } = deleteBtn.closest(`[data-card-id]`).dataset
        cards = initialCards.filter(card => card.id !== +cardId)
        document.querySelector(`[data-card-id="${cardId}"]`).remove()
      }
    })
  })

/****************************************************************************************************/

const modalForCard = document.getElementById('popupCard');
const plusButton = document.querySelector('.profile__add-button');
const closeModalForCardButton = document.getElementById('popup__close-button');
const editFormCard = document.getElementById('popup-form');
const titleInput = document.getElementById('popup__input_enter_title');
const urlInput = document.getElementById('popup__input_enter_url');
const title = document.querySelector('.elements__name');
const image = document.querySelector('.elements__image');
  
plusButton.addEventListener('click', plus);
function plus() {
  modalForCard.classList.remove('popup_closed');
  titleInput.value = "Название";
  urlInput.value = "Ссылка на картинку";
}
  
closeModalForCardButton.addEventListener('click', closePopup);
function closePopup() {
  modalForCard.classList.add('popup_closed');
}
  
editFormCard.addEventListener('submit', form); 
function form(e) {
  e.preventDefault();
  title.textContent = titleInput.value;
  image.setAttribute('src', urlInput.value);

  modalForCard.classList.add('popup_closed');
}

/****************************************************************************************************/

const popupTemplate = document.querySelector('.imgpopup')

document.querySelectorAll('[data-card-id]').forEach(elements__element => {
  elements__element.addEventListener('click', (e) => {
    
    const imgpopup = popupTemplate.content.cloneNode(true).querySelector('.imgpopup__imgtext')

    imgpopup.querySelector('[data-button-close]').addEventListener('click', () => {
      imgpopup.remove()
    })

    const isDeleteButton = e.target.dataset.deleteButton || e.target.closest('[data-delete-button]')

    if (isDeleteButton) {
      return;
    }
    
    const { cardId } = elements__element.dataset
    const cardData = initialCards.find(elements__element => elements__element.id === +cardId)
    console.log(cardId)
    console.log(cardData)

    const img = imgpopup.querySelector('.imgpopup__img')
    const title = imgpopup.querySelector('.imgpopup__text')
    img.setAttribute('src', cardData.link)
    img.setAttribute('alt', cardData.name)
    title.textContent = cardData.name

    document.body.append(imgpopup)
  })
})