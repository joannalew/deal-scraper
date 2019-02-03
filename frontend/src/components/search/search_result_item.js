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
        return (<button onClick={ handleClick(item, user, createFunc, props) }>Save Item</button>);
    }
}


const SearchResultItem = ( props ) => {
    return (
        <li className="search-result-item">
            <div className='image-container'>
                <a href={props.item.storeUrl} target='_blank'><img src={props.item.storeImg} alt="item"/></a>
            </div>
            <div>{ props.item.title }</div>
            <div>{ props.item.price }</div>
            <div>
                { getButton(props.item, props.currentUser, props.createNewItem, props) }
            </div>
        </li>
    )
};

export default SearchResultItem;