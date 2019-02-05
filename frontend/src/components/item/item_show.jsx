import React from 'react';
import './item_show.css';
import PriceGraph from '../graph/price_graph';

class ItemShow extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getItem(id);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.item) { return; }

        if (prevProps.itemId !== this.props.itemId) {
            this.props.getItem(this.props.match.params.id);
        }
    }

    addFollowClick() {
        return () => { this.props.addFollower({item: this.props.item, user: this.props.user}) }
    }

    removeFollowClick() {
        return () => { this.props.removeFollower({item: this.props.item, user: this.props.user}) }
    }

    getButton() {
        if (this.props.user) {
            if (this.props.item.followers.includes(this.props.user.id)) {
                return (<button className="follow-btn" onClick={ this.removeFollowClick() }>Unfollow Item</button>);
            }
            else {
                return (<button className="follow-btn" onClick={ this.addFollowClick() }>Follow Item</button>);
            }
        }
        
    }

    render() {
        if (this.props.item) {
            return (
                <div className='item-show-wrapper'>
                    <div className='item-show-page'>
                        <h1 className='item-show-title'>{this.props.item.title}</h1>
                        <div className="item-info-and-graph">
                            <div className='item-image-wrapper'>
                                <div className="show"><img className='item-image' src={this.props.item.storeImg} alt=""/></div>
                                <div className='price-info'>
                                    <a className='store-link' href={this.props.item.storeUrl}>{this.props.item.store}:</a>
                                    <div className='item-price'>{this.props.item.price}</div>
                                </div>
                                { this.getButton() }
                            </div>
                            <div className="item-price-graph">
                                <div className="graph-title">Price Graph (30 Days)</div>
                                <div className="price-graph">
                                    <PriceGraph 
                                      priceHistory={this.props.item.priceHistory}
                                      itemPrice={this.props.item.price}
                                   />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return <div>No Item</div>
        }
    }
}

export default ItemShow;