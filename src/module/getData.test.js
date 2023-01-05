import getMoviesData from './getData.js';

jest.mock('./getData.js');
jest.mock('./getSingleShowLike.js');

describe('Validate the number of tv shows and the number of comments on a tv show', () => {
  test('Expect the no. of tv shows to be 240', async () => {
    const numberOfTVShows = await getMoviesData().length;
    expect(numberOfTVShows).toBe(3);
  });
});