import React from 'react';

const createClick = function(item, user, createFunc) {
    return () => { createFunc({item: item, user: user}) }
};

const addFollowClick = function(item, user, addFunc) {
    return () => { addFunc({item: item, user: user}) }
};

const removeFollowClick = function(item, user, removeFunc) {
    return () => { removeFunc({item: item, user: user}) }
};

const getButton = function(item, user, createFunc, addFunc, removeFunc) {

}

const SearchResultItem = ( props ) => {
    return (
        <li>
            <div>{ props.idx }</div>
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <img src={ props.item.storeImg } />
            <div>
            </div>
        </li>
    )
};

export default SearchResultItem;