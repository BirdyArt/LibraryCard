import loggedReducer from './isLogged';
import cardsReducer from'./cards';
import {combineReducers} from 'redux';
import iconsReducer from './icons';

const allReducer = combineReducers({
  isLogged: loggedReducer,
  cards: cardsReducer,
  icons: iconsReducer
});

export default allReducer;