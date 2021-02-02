import axios from 'axios';

const url = 'http://localhost:5000/cards';
const urlIcons = 'http://localhost:5000/icons';

export const fetchCards = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (id, updatedCard) => axios.patch(`${url}/${id}`, updatedCard);
export const deleteCard = (id) => axios.delete(`${url}/${id}`);
export const getIcons = (searchTerm) => axios.get(urlIcons, { params: { searchTerm: `${searchTerm}`} });


