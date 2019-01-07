import React from 'react';

const handleClick = function(item, user, createFunc) {
    return () => { createFunc({item: item, user: user}) }
};

const SearchResultItem = ( props ) => {
    console.log('props', props);
    return (
        <li>
            <div>{ props.idx }</div>
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <div>{ props.currentUser.email }</div>
            <img src={props.item.storeImg} />
            <div>
                <button onClick={ handleClick(props.item, props.currentUser, props.createNewItem) }>Save Item</button>
            </div>
        </li>
    )
};

export default SearchResultItem;