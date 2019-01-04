import { RECEIVE_ITEM } from '../actions/item_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ITEM:
            return {[action.item._id]: action.item};
        default:
            return state;
    }
};