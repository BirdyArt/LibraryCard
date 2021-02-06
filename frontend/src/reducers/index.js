import cardsReducer from'./cards';
import {combineReducers} from 'redux';
import iconsReducer from './icons';
import authReducer from './auth';

const allReducer = combineReducers({
  cards: cardsReducer,
  icons: iconsReducer,
  auth: authReducer
});

export default allReducer;