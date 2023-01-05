import './style.css';
import displayMoviesData from './module/displayMoviesData.js';
import displayDataInModal from './module/displayDataInModal.js';
import getMoviesData from './module/getData.js';
import postLikeData from './module/postLike.js';
import saveCommentDataAsync from './module/saveCommentDataAsync.js';
import getCommentsDataAsync from './module/getCommentsDataAsync.js';
import displayComments from './module/displayComments.js';

window.onload = displayMoviesData();

window.addEventListener('load', () => {
  const moviesWrapper = document.querySelector('[data-movies-wrapper]');
  const modal = document.querySelector('.modal-content');
  const overlay = document.querySelector('.overlay');
  const modlaCloseBtn = document.querySelector('[data-modal-close]');

  moviesWrapper.addEventListener('click', (e) => {
    const isCommentsBtn = e.target.hasAttribute('data-comment-btn');
    const isLikeBtn = e.target.hasAttribute('data-like-btn');

    if (isCommentsBtn) {
      overlay.classList.add('overlay-active');
      modal.classList.add('modal-active');
      const index = Number.parseInt(e.target.getAttribute('id'), 10);
      getMoviesData().then((data) => displayDataInModal(data, index));
      displayComments(index);
    }

    if (isLikeBtn) {
      const index = Number.parseInt(e.target.getAttribute('id'), 10);
      getMoviesData().then(() => postLikeData(index - 1));
    }
  });

  modlaCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
  });

  const commentsForm = document.querySelector('[ data-comments-form]');
  const username = document.querySelector('[data-username]');
  const comment = document.querySelector('[data-user-comment]');

  let userComment = {
    username: '',
    comment: '',
  };

  username.addEventListener('input', (e) => {
    userComment = {
      ...userComment,
      username: e.target.value.trim(),
    };
  });

  comment.addEventListener('input', (e) => {
    userComment = {
      ...userComment,
      comment: e.target.value.trim(),
    };
  });

  commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const modalContent = document.querySelector('[data-modal-content]');
    const tvShowId = Number.parseInt(modalContent.getAttribute('data-modal-id'), 10);
    userComment = {
      ...userComment,
      item_id: tvShowId,
    };

    saveCommentDataAsync(userComment);
    commentsForm.reset();
  });
});

getCommentsDataAsync(1);