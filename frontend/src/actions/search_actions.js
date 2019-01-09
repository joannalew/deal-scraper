import { getSearchResults } from '../util/search_util';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveResults = items => ({
    type: RECEIVE_RESULTS,
    items
});

export const fetchResults = data => dispatch => (
    getSearchResults(data)
        .then(items => dispatch(receiveResults(items)))
        .catch(err => console.log(err))
);