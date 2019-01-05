import { RECEIVE_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESULTS:
            return action.items.data;
        default:
            return state;
    }
};

export default SearchReducer;
