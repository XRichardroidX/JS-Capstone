import removeTags from './removeTags.js';

const movieCardBuilder = (data, index) => `
        <img src=${data.image.original} alt="">
        <h2 class="watch-name">${data.name}</h2>
        <h4 class="full-date"><b class="date">Date:</b>${data.premiered}</h4>
        <p class="full-summary"><b class="summary">Summary:</b>${removeTags(data.summary)}</p>
        <button id="${index + 1}" class="btn" data-comment-btn>Comment</button>
  `;
export default movieCardBuilder;