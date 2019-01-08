import * as APIUtil from '../util/item_util';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';
export const RECEIVE_NEW_ITEM = "RECEIVE_NEW_ITEM";

export const getItem = id => dispatch => {
    return APIUtil.getItem(id)
                  .then((res) => dispatch(receiveItem(res)))
                  .catch(err => console.log(err));
};

export const recentlyViewed = () => dispatch => {

    return APIUtil.recentlyViewed()
        .then((res) => dispatch(receiveItems(res)))
        .catch(err => console.log(err));
}

export const createNewItem = data => dispatch => (
    APIUtil.createItem(data)
           .then(item => dispatch(receiveNewItem(item)))
           .catch(err => console.log(err))
);

export const addFollower = data => dispatch => (
    APIUtil.addFollower(data)
           .then(item => dispatch(receiveItem(item)))
           .catch(err => console.log(err))
);

export const removeFollower = data => dispatch => (
    APIUtil.deleteFollower(data)
           .then(item => dispatch(receiveItem(item)))
           .catch(err => console.log(err))
);

export const getFollows = user => dispatch => (
    APIUtil.getFollowing(user)
           .then(items => dispatch(receiveItems(items)))
           .catch(err => console.log(err))
)
    
const receiveNewItem = item => ({
    type: RECEIVE_NEW_ITEM,
    item: item.data
});
    
const receiveErrors = errors => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
});

const receiveItem = res => ({
    type: RECEIVE_ITEM,
    item: res.data
});

const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items: items.data
});


