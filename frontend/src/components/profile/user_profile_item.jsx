import React from 'react';
import { Link } from 'react-router-dom';

const addFollowClick = function(item, user, addFunc) {
    return () => { addFunc({item: item, user: user}) }
};

const removeFollowClick = function(item, user, removeFunc) {
    return () => { removeFunc({item: item, user: user}) }
};

const getButton = function(item, user, addFunc, removeFunc) {
    if (item.followers.includes(user.id)) {
        return (<button className="follow-btn" onClick={ removeFollowClick(item, user, removeFunc) }>Unfollow Item</button>);
    }
    else {
        return (<button className="follow-btn" onClick={ addFollowClick(item, user, addFunc) }>Follow Item</button>);
    }
};

const UserProfileItem = ( props ) => {
    return (
        <li>
        <Link to={`/item/${props.item._id}`}>
            <div className='image'>
                <img src={ props.item.storeImg } alt="item"/>
            </div>
            <div className="user-item-title">{ props.item.title }</div>
            <div className="user-item-price">{ props.item.price }</div>
        </Link>
            <div className="follow-btn-container">
                { getButton(props.item, props.currentUser, props.addFollower, props.removeFollower) }
            </div>
        </li>
    )
};

export default UserProfileItem;