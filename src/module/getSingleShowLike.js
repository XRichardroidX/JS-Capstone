import getLikeData from './getLikeData.js';

const getSingleShowLikeCount = async (index) => {
  const result = await getLikeData();
  const likesArr = await result.filter((item) => item.item_id === index);

  const likesCount = likesArr.length > 0 ? likesArr[0].likes : 0;
  return likesCount;
};

export default getSingleShowLikeCount;