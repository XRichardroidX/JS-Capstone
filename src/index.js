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
      console.log(res[1]);

      res.forEach((index) => {
        card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                <img src=${index.image.original} alt="">
                <h2 class="watch-name">${index.name}</h2>
                <h4 class="full-date"><b class="date">Date:</b>${index.airdate}</h4>
                <p class="full-summary"><b class="summary">Summary:</b>${removeTags(index.summary)}</p>
                    <button class="btn">Comment</button>
        `;
        allCards.appendChild(card);
      });
    });
}

getData();
