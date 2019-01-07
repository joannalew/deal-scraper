import React from 'react';

const handleClick = function(item, user, createFunc) {
    return () => { createFunc({item: item, user: user}) }
};

const SearchResultItem = ( props ) => {
    return (
        <li className="search-result-item">
            <img src={props.item.storeImg} />
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <div>
                <button onClick={ handleClick(props.item, props.currentUser, props.createNewItem) }>Save Item</button>
            </div>
        </li>
    )
};

export default SearchResultItem;