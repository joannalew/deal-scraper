import * as APIUtil from '../util/item_utils';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';


export const getItem = (id) => dispatch => {

    return APIUtil.getItem(id).then((item) => dispatch(receiveItem(item))),
    err => dispatch(receiveErrors(err.response.json));
};

const receiveErrors = (errors) => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
})


const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});