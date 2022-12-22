export const like = (id, action) => {
  return {
    type: 'LIKE',
    id,
    action,
  };
};

export const dislike = (id, action) => {
  return {
    type: 'DISLIKE',
    id,
    action,
  };
};

export const likeAll = () => {
  return {
    type: 'LIKE_ALL',
  };
};

export const dislikeAll = () => {
  return {
    type: 'DISLIKE_ALL',
  };
};

export const resetAll = () => {
  return {
    type: 'RESET_ALL',
  };
};
