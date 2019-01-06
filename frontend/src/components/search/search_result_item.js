import React from 'react';

const handleClick = function(item, createFunc) {
    return () => { createFunc(item) }
};

const SearchResultItem = ( props ) => {
    console.log('props', props);
    return (
        <li>
            <div>{ props.idx }</div>
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <img src={props.item.storeImg} />
            <div>
                <button onClick={ handleClick(props.item, props.createNewItem) }>Save Item</button>
            </div>
        </li>
    )
};

export default SearchResultItem;