import commentsBuilder from './commentsBuilder.js';
import getCommentsDataAsync from './getCommentsDataAsync.js';

const commentsWrapper = document.querySelector('[data-comments-list]');
const commentsCountWrapper = document.querySelector('[data-tv-show-comments]');

const displayComments = async (index) => {
  commentsWrapper.innerHTML = '';
  const comments = await getCommentsDataAsync(index);
  commentsCountWrapper.innerText = comments.length ? comments.length : 0;

  comments.forEach((comment) => {
    commentsWrapper.insertAdjacentHTML('beforeend', commentsBuilder(comment));
  });
};

export default displayComments;