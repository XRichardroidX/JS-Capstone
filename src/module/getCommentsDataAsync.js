import { COMMENTS_URL } from './appResources.js';

const getCommentsDataAsync = async (index) => {
  const response = await fetch(`${COMMENTS_URL}/?item_id=${index}`);
  const data = await response.json();
  return data;
};

export default getCommentsDataAsync;