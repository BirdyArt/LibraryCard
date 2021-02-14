import { FETCH_ICONS, REMOVE_ICONS } from '../constants/actionTypes';
import * as api from '../api';

export const getIcons = (searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.getIcons(searchTerm);

    dispatch({ type: FETCH_ICONS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const removeIcons = () => {
  return {
    type: REMOVE_ICONS
  }
}