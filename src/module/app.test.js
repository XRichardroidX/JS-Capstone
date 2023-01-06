import getMoviesCount from './getMoviesCount.js';
import itemCounter from './ItemCounter.js';

jest.mock('./getMoviesCount.js');
jest.mock('./getSingleShowLike.js');

document.body.innerHTML = `
<ul id="comments-wrapper" data-comments-list>
  <li  data-comment-item>
    <p>Comment 1</p>
  </li>
  <li  data-comment-item>
    <p>Comment 2</p>
  </li>
</ul>
`;
const itemWrapper = document.querySelector('[data-comments-list]');

describe('Validate the number of tv shows and the number of comments on a tv show', () => {
  test('Expect the no. of tv shows to be 3', async () => {
    const numberOfTVShows = await getMoviesCount();
    expect(numberOfTVShows).toBe(3);
  });

  test('Expect no. of comments to be 2', () => {
    const numberOfComments = itemCounter(itemWrapper);
    expect(numberOfComments).toEqual(2);
  });
});