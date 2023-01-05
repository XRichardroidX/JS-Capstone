import commentsBuilder from './commentsBuilder.js';
import getCommentsDataAsync from './getCommentsDataAsync.js';

const commentsWrapper = document.querySelector('[data-comments-list]');

const displayComments = async (index) => {
  commentsWrapper.innerHTML = '';
  const comments = await getCommentsDataAsync(index);

  comments.forEach((comment) => {
    commentsWrapper.insertAdjacentHTML('beforeend', commentsBuilder(comment));
  });
};

export default displayComments;