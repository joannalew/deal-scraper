import React from 'react';

const handleClick = function(item, user, createFunc, props) {
    return () => { 
        createFunc({item: item, user: user})
        props.history.push('/profile')
     }
};

const getButton = function(item, user, createFunc, props) {
    if (!user || Object.keys(user).length === 0) {
        return (<div></div>);
    }
    else {
        return (<button className="follow-btn" onClick={ handleClick(item, user, createFunc, props) }>Save Item</button>);
    }
}


const SearchResultItem = ( props ) => {
    return (
        <li className="search-result-item">
            <div className='image-container'>
                <a href={props.item.storeUrl} target='_blank' rel="noopener noreferrer"><img src={props.item.storeImg} alt="item"/></a>
            </div>
            <div className="search-item-title">{ props.item.title }</div>
            <div className="search-item-price">{ props.item.price }</div>
            <div className="follow-btn-container">
                { getButton(props.item, props.currentUser, props.createNewItem, props) }
            </div>
        </li>
    )
};

export default SearchResultItem;