import getLikeData from './getLikeData.js';

const getSingleShowLikeCount = async (index) => {
  let likeCount = 0;

  const result = await getLikeData();
  const likesArr = await result.filter((item) => item.item_id === index);

  if (likesArr[0].item_id) {
    likeCount = likesArr[0].item_id;
  }
  console.log(likeCount);
  return likeCount;
};

export default getSingleShowLikeCount;