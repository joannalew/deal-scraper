import React from 'react';

const handleClick = function(item, user, createFunc) {
    return () => { createFunc({item: item, user: user}) }
};

const getButton = function(item, user, createFunc) {
    if (Object.keys(user).length === 0) {
        return (<div></div>);
    }
    else {
        return (<button onClick={ handleClick(item, user, createFunc) }>Save Item</button>);
    }
}


const SearchResultItem = ( props ) => {
    return (
        <li className="search-result-item">
            <img src={props.item.storeImg} />
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <div>
                { getButton(props.item, props.currentUser, props.createNewItem) }
            </div>
        </li>
    )
};

export default SearchResultItem;