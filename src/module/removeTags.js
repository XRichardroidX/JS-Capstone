const removeTags = (str) => {
  if ((str === null) || (str === '')) return false;
  str = str.toString();
  return str.replace(/(<([^>]+)>)/ig, '');
};

export default removeTags;