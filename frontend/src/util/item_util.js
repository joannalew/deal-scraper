import axios from 'axios';

export const getItem = id => {
    return axios.get(`/api/items/${id}`);
};

export const createItem = data => {
    return axios.post('/api/items/create', data);
};

export const addFollower = data => {
    return axios.post('/api/items/follow', data);
};

export const deleteFollower = data => {
    return axios.post('/api/items/unfollow', data);
};

export const getFollowing = user => {
    return axios.post('/api/items/following', user);
};