import iconsModel from '../models/iconsModel.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const options = {
  headers : { 'Authorization' : process.env.ICONFINDER_API }
};

export const getIcons = async (req, res) => {
  const searchTerm = req.query.searchTerm;

  try {
    const { data:response } = await axios.get('https://api.iconfinder.com/v4/icons/search?query=' + searchTerm + '&count=12&premium=0&style=flat', options);
    const newIcons = new iconsModel({icons: response.icons});
    res.status(201).json(newIcons);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

