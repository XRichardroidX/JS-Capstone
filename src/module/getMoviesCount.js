import getMoviesData from './getData.js';

const getMoviesCount = async () => {
  const data = await getMoviesData();
  const numberOfMovies = data.length > 0 ? data.length : 0;
  return numberOfMovies;
};

export default getMoviesCount;