import './style.css';

const allCards = document.querySelector('.all-cards');

const show = [
  {
    imageURL: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg',
    name: 'Watch Pilot',
    date: '2013-06-24',
    summary: "The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.",
  },
  {
    imageURL: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg',
    name: 'Watch Pilot',
    date: '2013-06-24',
    summary: "The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.",
  },
  {
    imageURL: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg',
    name: 'Watch Pilot',
    date: '2013-06-24',
    summary: "The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.",
  },
  {
    imageURL: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg',
    name: 'Watch Pilot',
    date: '2013-06-24',
    summary: "The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.",
  },
];

let card;

const display = () => {
  show.forEach((index) => {
    card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
                <h2 class="watch-name">${index.name}</h2>
                <h4 class="full-date"><b class="date">Date:</b>${index.date}</h4>
                <p class="full-summary"><b class="summary">Summary:</b>${index.summary}</p>
                    <button class="btn">Comment</button>
        `;
    allCards.appendChild(card);
  });
};

display();