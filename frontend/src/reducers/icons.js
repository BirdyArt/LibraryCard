import { FETCH_ICONS, REMOVE_ICONS } from '../constants/actionTypes';

const iconsReducer = (state=null, action) => {
  switch(action.type) {
    case FETCH_ICONS:
      return action.payload;
    case REMOVE_ICONS:
      return null;
    default:
      return state;
  }
};

export default iconsReducer;