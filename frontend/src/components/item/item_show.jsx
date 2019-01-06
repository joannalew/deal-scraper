import React from 'react';

class ItemShow extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getItem(id);
    }

    render() {
        if (this.props.item) {
        
            return (
                <div className='item-show-page'>
                    <h1 className='item-show-title'>{this.props.item.title}</h1>
                    <img src={this.props.item.storeImg} alt=""/>
                    <a className='store-link' href={this.props.item.storeUrl}>{this.props.item.store}</a>
                    <div className='item-price'>{this.props.item.price}</div>
                </div>
            )
        } else {
            return <div>No Item</div>
        }
    }
}

export default ItemShow;