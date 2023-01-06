import getMoviesData from './getData.js';
import movieCardBuilder from './movieCardBuilder.js';
import getSingleShowLikeCount from './getSingleShowLike.js';
import getMoviesCount from './getMoviesCount.js';

const allCards = document.querySelector('.all-cards');
const numberOfMovies = document.querySelector('.number-of-shows');

const displayMoviesData = async () => {
  const data = await getMoviesData();

  data.forEach(async (movie, index) => {
    const likesCount = await getSingleShowLikeCount(index);
    const card = document.createElement('div');
    const moviesCount = await getMoviesCount();

    card.className = 'card';
    numberOfMovies.innerHTML = `${moviesCount} Tv Shows`;
    card.innerHTML = movieCardBuilder(movie, index, likesCount);
    allCards.insertAdjacentElement('beforeend', card);
  });
};

export default displayMoviesData;