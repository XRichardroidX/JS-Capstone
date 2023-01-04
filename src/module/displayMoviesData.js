import getMoviesData from './getData.js';
import movieCardBuilder from './movieCardBuilder.js';

const allCards = document.querySelector('.all-cards');
const numberOfMovies = document.querySelector('.number-of-shows');

const displayMoviesData = async () => {
  const data = await getMoviesData();
  data.forEach((movie, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    numberOfMovies.innerHTML = `${data.length} Tv Shows`;
    card.innerHTML = movieCardBuilder(movie, index);
    allCards.insertAdjacentElement('beforeend', card);
  });
};

export default displayMoviesData;