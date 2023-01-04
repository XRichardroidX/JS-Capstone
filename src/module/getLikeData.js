const getLikeData = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/79GNnMRU0omJlbqTRG5O/likes/');
  const data = await response.json();
  return data;
};

export default getLikeData;