import axios from 'axios';

export const getSearchResults = ({ query }) => {
    let keywords = query.replace(/ /g, "%20");
    return axios.get(`/api/search/ebay/${keywords}`)
}