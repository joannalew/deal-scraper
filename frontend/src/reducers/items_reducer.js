import { RECEIVE_ITEM, RECEIVE_NEW_ITEM } from '../actions/item_actions';

const ItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_NEW_ITEM:
            return action.item.data;
        case RECEIVE_ITEM:
            return {[action.item._id]: action.item};
        default:
            return state;
    }
}

export default ItemsReducer;
