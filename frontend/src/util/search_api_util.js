import axios from 'axios';

export const getSearchResults = keywords => {
    return axios.get(`/api/search/ebay/${keywords}`)
}