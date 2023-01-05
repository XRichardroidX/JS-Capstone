import { COMMENTS_URL } from './appResources.js';

const saveCommentDataAsync = async (commentsData) => {
  const response = await fetch(COMMENTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentsData),
  });

  return response;
};

export default saveCommentDataAsync;