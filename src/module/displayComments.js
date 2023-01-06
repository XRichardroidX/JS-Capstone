import commentsBuilder from './commentsBuilder.js';
import getCommentsDataAsync from './getCommentsDataAsync.js';
import ItemCounter from './ItemCounter.js';

const displayComments = async (index) => {
  const commentsWrapper = document.querySelector('[data-comments-list]');
  const commentsCountWrapper = document.querySelector('[data-tv-show-comments]');

  commentsWrapper.innerHTML = '';
  const comments = await getCommentsDataAsync(index);

  if (comments) {
    comments.forEach((comment) => {
      commentsWrapper.insertAdjacentHTML('beforeend', commentsBuilder(comment));
    });
  }

  commentsCountWrapper.innerText = ItemCounter(commentsWrapper);
};

export default displayComments;