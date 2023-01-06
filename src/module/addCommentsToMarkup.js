import commentsBuilder from './commentsBuilder.js';

const commentsWrapper = document.querySelector('[data-comments-list]');

const addCommentsToMarkup = (commentData) => {
  const date = new Date();
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();
  const commentDate = `${year}-${month}-${day}`;

  console.log(commentDate)

  const updatedCommentData = {
    ...commentData,
    creation_date: commentDate,
  };

  commentsWrapper.insertAdjacentHTML('beforeend', commentsBuilder(updatedCommentData));
};

export default addCommentsToMarkup;