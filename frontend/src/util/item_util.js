import axios from 'axios';

export const getItem = (id) => {

    return axios.get(`/api/items/${id}`);
};

export const createItem = data => {
    return axios.post('/api/items/create', data);
};