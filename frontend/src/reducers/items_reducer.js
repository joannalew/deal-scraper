import { RECEIVE_ITEM, RECEIVE_NEW_ITEM, RECEIVE_ITEMS } from '../actions/item_actions';
import { merge } from 'lodash';

const ItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_NEW_ITEM:
            return merge({}, state, {[action.item._id]: action.item});
        case RECEIVE_ITEM:
            let newState = merge({}, state);
            delete newState[action.item._id];
            return merge({}, newState, {[action.item._id]: action.item});
        case RECEIVE_ITEMS: 
            return action.items;
        default:
            return state;
    }
}

export default ItemsReducer;
