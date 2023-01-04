import './style.css';

const allCards = document.querySelector('.all-cards');
function removeTags(str) {
  if ((str === null) || (str === '')) return false;
  str = str.toString();
  return str.replace(/(<([^>]+)>)/ig, '');
}

let card;

function getData() {
  fetch('https://api.tvmaze.com/shows/1/episodes')
    .then((res) => res.json())
    .then((res) => {
      res.forEach((index) => {
        card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                <img src=${index.image.original} alt="">
                <h2 class="watch-name">${index.name}</h2>
                <h4 class="full-date"><b class="date">Date:</b>${index.airdate}</h4>
                <p class="full-summary"><b class="summary">Summary:</b>${removeTags(index.summary)}</p>
                    <button class="btn" data-comment-btn>Comment</button>
        `;
        allCards.appendChild(card);
      });
    });
}

getData();

window.addEventListener('load', () => {
  const moviesWrapper = document.querySelector('[data-movies-wrapper]');
  const modal = document.querySelector('.modal-content');
  const overlay = document.querySelector('.overlay');
  const modlaCloseBtn = document.querySelector('[data-modal-close]');

  moviesWrapper.addEventListener('click', (e) => {
    const isCommentsBtn = e.target.hasAttribute('data-comment-btn');

    if (isCommentsBtn) {
      overlay.classList.add('overlay-active');
      modal.classList.add('modal-active');
    }
  });

  modlaCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
  });
});