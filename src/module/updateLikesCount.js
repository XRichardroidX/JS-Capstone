const updateLikesCount = (index) => {
  const likesCount = document.querySelectorAll('[data-likes-count]');
  const likes = likesCount[index - 1].innerText;
  const updatedLikesCount = Number.parseInt(likes, 10) + 1;
  return updatedLikesCount;
};

export default updateLikesCount;