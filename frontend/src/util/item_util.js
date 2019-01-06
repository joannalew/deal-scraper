import axios from 'axios';

export const createItem = data => {
    return axios.post('/api/items/create', data);
};