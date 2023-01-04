import getMoviesData from './getData.js';
import movieCardBuilder from './movieCardBuilder.js';
import getSingleShowLikeCount from './getSingleShowLike.js';

const allCards = document.querySelector('.all-cards');
const numberOfMovies = document.querySelector('.number-of-shows');

const displayMoviesData = async () => {
  const data = await getMoviesData();

  data.forEach(async (movie, index) => {
    const likesCount = await getSingleShowLikeCount(index);
    const card = document.createElement('div');

    card.className = 'card';
    numberOfMovies.innerHTML = `${data.length} Tv Shows`;
    card.innerHTML = movieCardBuilder(movie, index, likesCount);
    allCards.insertAdjacentElement('beforeend', card);
  });
};

export default displayMoviesData;