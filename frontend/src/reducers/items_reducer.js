import { RECEIVE_NEW_ITEM } from '../actions/items_actions';

const ItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_NEW_ITEM:
            return action.item.data;
        default:
            return state;
    }
}

export default ItemsReducer;