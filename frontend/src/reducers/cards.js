import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';


const cardsReducer = (cards =[], action) => {
  switch(action.type) {
    case UPDATE:
      return cards.map((card) => card._id === action.payload._id ? action.payload : card);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...cards, action.payload];
    case DELETE:
      return cards.filter((card) => card._id !== action.payload);
    default:
      return cards;
  }
};

export default cardsReducer;