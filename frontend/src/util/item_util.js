import axios from 'axios';

export const getItem = (id) => {

    return axios.get(`/api/items/${id}`);
};