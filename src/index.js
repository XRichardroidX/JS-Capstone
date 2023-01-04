import './style.css';
import displayMoviesData from './module/displayMoviesData.js';
import displayDataInModal from './module/displayDataInModal.js';
import getMoviesData from './module/getData.js';

window.onload = displayMoviesData();

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
      const index = Number.parseInt(e.target.getAttribute('id'), 10);
      getMoviesData().then((data) => displayDataInModal(data, index));
    }
  });

  modlaCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
  });
});