import axios from 'axios';

export const getSearchResults = ({ query, store }) => {
    let keywords = query.replace(/ /g, "%20");
    return axios.get(`/api/search/${store}/${keywords}`)
}