import React from 'react';

const SearchResultItem = ({ item, idx }) => {
    return (
        <li>
            <div>{ idx }</div>
            <div>{ item.title }</div>
            <div>{ item.price }</div>
            <div>
                <button>Follow Item</button>
            </div>
        </li>
    )
};

export default SearchResultItem;