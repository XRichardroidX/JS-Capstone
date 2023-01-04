import getMoviesData from './getData.js';
import movieCardBuilder from './movieCardBuilder.js';

const allCards = document.querySelector('.all-cards');

const displayMoviesData = async () => {
  const data = await getMoviesData();
  data.forEach((movie, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = movieCardBuilder(movie, index);
    allCards.insertAdjacentElement('beforeend', card);
  });
};

export default displayMoviesData;