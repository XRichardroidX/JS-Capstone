const imgSrc = document.querySelector('[data-modal-image]');
const title = document.querySelector('[data-show-title]');
const premierDate = document.querySelector('[data-premiered]');
const modalContent = document.querySelector('[data-modal-content]');
const showLanguage = document.querySelector('[data-language]');
const showStatus = document.querySelector('[data-status]');
const showGenres = document.querySelector('[data-genres]');
const showSummary = document.querySelector('[data-show-summary]');

const displayDataInModal = (shows, index) => {
  const show = shows[index - 1];

  modalContent.setAttribute('data-modal-id', show.id);
  imgSrc.setAttribute('src', `${show.image.original}`);
  title.innerText = show.name;
  premierDate.innerText = show.premiered;
  showLanguage.innerText = show.language;
  showStatus.innerText = show.status;
  showGenres.innerText = show.genres;
  showSummary.innerHTML = show.summary;
};

export default displayDataInModal;