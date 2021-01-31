const $modal = document.getElementById('popup');
const $editButton = document.getElementById('profileEdit');
const $closeModalButton = document.getElementById('closePopup');
const $editForm = document.getElementById('popupForm');
const $inputs = {
  $name: $modal.querySelector('#popupName'),
  $description: $modal.querySelector('#popupDescription'),
};

const $textName = document.getElementById('profileName');
const $textDescription = document.getElementById('profileDescription');

console.log({$modal, $editButton});

$editButton.addEventListener('click', e => {
  $modal.classList.remove('popup_closed');
  const initialNameTextContent = $textName.textContent;
  const initialDescriptionTextContent = $textDescription.textContent;
  
  $inputs.$name.value = initialNameTextContent;
  $inputs.$description.value = initialDescriptionTextContent;
  console.log({initialNameTextContent, initialDescriptionTextContent})
});

$closeModalButton.addEventListener('click', e => {
  $modal.classList.add('popup_closed');
});

$editForm.addEventListener('submit', e => {
  e.preventDefault();
  $textName.textContent = $inputs.$name.value;
  $textDescription.textContent = $inputs.$description.value;

  $modal.classList.add('popup_closed');
})

$modal.addEventListener('click', event => {
  if (event.target.id === 'popup') {
      $modal.classList.add('popup_closed');
  }
})