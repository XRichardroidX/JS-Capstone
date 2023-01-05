import removeTags from './removeTags.js';

const movieCardBuilder = (data, index, likesCount) => `
  <img src=${data.image.original} alt="">
  <h2 class="watch-name">${data.name}</h2>
  <h4 class="full-date"><b class="date">Date:</b>${data.premiered}</h4>
  <h4 class="full-like"><b class="date">Like: ${likesCount}</b><img id="${index + 1}" data-like-btn src="./assets/images/like.png" alt="">
  </h4>
  <p class="full-summary"><b class="summary">Summary:</b>${removeTags(data.summary).substring(0, 150)}...</p>
  <button id="${index + 1}" class="btn" data-comment-btn>Comment</button>
`;
export default movieCardBuilder;
