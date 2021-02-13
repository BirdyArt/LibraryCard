import axios from 'axios';

const API = axios.create({ baseUrl: 'https://librarycard.herokuapp.com' });

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchCards = () => API.get('/cards');
export const createCard = (newCard) => API.post('/cards', newCard);
export const updateCard = (id, updatedCard) => API.patch(`/cards/${id}`, updatedCard);
export const deleteCard = (id) => API.delete(`/cards/${id}`);
export const getIcons = (searchTerm) => API.get('/icons', { params: { searchTerm: `${searchTerm}`} });
export const login = (formData) => API.post('/user/login', formData);
export const register = (formData) => API.post('/user/register', formData);


