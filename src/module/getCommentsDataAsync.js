import { COMMENTS_URL } from './appResources.js';
import ItemCounter from './ItemCounter.js';

const getCommentsDataAsync = async (index) => {
  const response = await fetch(`${COMMENTS_URL}/?item_id=${index}`);
  if (!response.ok && response.status !== 201) {
    return;
  }
  const data = await response.json();
  return data;
};

export default getCommentsDataAsync;