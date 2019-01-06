import * as APIUtil from '../util/item_util';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';
export const RECEIVE_NEW_ITEM = "RECEIVE_NEW_ITEM";


export const getItem = (id) => dispatch => {

    return APIUtil.getItem(id).then((res) => dispatch(receiveItem(res))),
    err => dispatch(receiveErrors(err.response.json));
};

export const createNewItem = data => dispatch => (
    APIUtil.createItem(data)
    .then(item => dispatch(receiveNewItem(item)))
    .catch(err => console.log(err))
);
    
const receiveNewItem = item => ({
    type: RECEIVE_NEW_ITEM,
    item
});
    
const receiveErrors = (errors) => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
});


const receiveItem = (res) => ({
    type: RECEIVE_ITEM,
    item: res.data
});


