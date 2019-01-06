import { createItem } from '../util/item_util';

export const RECEIVE_NEW_ITEM = "RECEIVE_NEW_ITEM";

export const receiveNewItem = item => ({
    type: RECEIVE_NEW_ITEM,
    item
});

export const createNewItem = data => dispatch => (
    createItem(data)
        .then(item => dispatch(receiveNewItem(item)))
        .catch(err => console.log(err))
);