const postLikeData = async (movieId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/79GNnMRU0omJlbqTRG5O/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: movieId }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  await response.text();
};

export default postLikeData;