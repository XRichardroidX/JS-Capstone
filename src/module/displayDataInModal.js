const imgSrc = document.querySelector('[data-modal-image]');
const title = document.querySelector('[data-show-title]');
const premierDate = document.querySelector('[data-show-date]');
const modalContent = document.querySelector('[data-modal-content]');

const displayDataInModal = (shows, index) => {
  const show = shows[index - 1];

  modalContent.setAttribute('data-modal-id', show.id);
  imgSrc.setAttribute('src', `${show.image.original}`);
  title.innerText = show.name;
  premierDate.innerText = show.premiered;
};

export default displayDataInModal;