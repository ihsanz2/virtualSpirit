import images from '../../images';

const initialState = {
  items: [
    {id: '1', image: images.Image1, like: 0},
    {id: '2', image: images.Image2, like: 0},
    {id: '3', image: images.Image3, like: 0},
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.id) {
          const newLikeValue =
            action.action === 'add' ? item.like + 1 : item.like - 1;
          return {
            ...item,
            like: newLikeValue < 0 ? 0 : newLikeValue,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'DISLIKE': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.id) {
          const newLikeValue =
            action.action === 'add' ? item.like + 1 : item.like - 1;
          return {
            ...item,
            like: newLikeValue < 0 ? 0 : newLikeValue,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'LIKE_ALL': {
      const updatedItems = state.items.map(item => ({
        ...item,
        like: item.like + 1,
      }));
      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'DISLIKE_ALL': {
      const updatedItems = state.items.map(item => {
        const newLikeValue = item.like - 1;
        return {
          ...item,
          like: newLikeValue < 0 ? 0 : newLikeValue,
        };
      });
      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'RESET_ALL': {
      const updatedItems = state.items.map(item => ({
        ...item,
        like: 0,
      }));
      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
