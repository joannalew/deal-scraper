import React from 'react';

const addFollowClick = function(item, user, addFunc) {
    return () => { addFunc({item: item, user: user}) }
};

const removeFollowClick = function(item, user, removeFunc) {
    return () => { removeFunc({item: item, user: user}) }
};

const getButton = function(item, user, addFunc, removeFunc) {
    if (item.followers.includes(user.id)) {
        return (<button onClick={ removeFollowClick(item, user, removeFunc) }>Unfollow Item</button>);
    }
    else {
        return (<button onClick={ addFollowClick(item, user, addFunc) }>Follow Item</button>);
    }
};

const UserProfileItem = ( props ) => {
    return (
        <li>
            <div>{ props.idx }</div>
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <img src={ props.item.storeImg } />
            <div>
                { getButton(props.item, props.currentUser, props.addFollower, props.removeFollower) }
            </div>
        </li>
    )
};

export default UserProfileItem;