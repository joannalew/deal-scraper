import React from 'react';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: this.props.item};
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getItem(id);
    }

    componentDidUpdate(preProps) {
        if (preProps.item !== this.props.item) {
            this.setState({item: this.props.item})
        }
    }

    addFollowClick() {
        return () => { this.props.addFollower({item: this.props.item, user: this.props.user}) }
    }

    removeFollowClick() {
        return () => { this.props.removeFollower({item: this.props.item, user: this.props.user}) }
    }

    getButton() {
        if (this.props.item.followers.includes(this.props.user.id)) {
            return (<button onClick={ this.removeFollowClick() }>Unfollow Item</button>);
        }
        else {
            return (<button onClick={ this.addFollowClick() }>Follow Item</button>);
        }
    }

    render() {
        console.log('state', this.state);
        console.log('props', this.props);
        if (this.props.item) {
            return (
                <div className='item-show-page'>
                    <h1 className='item-show-title'>{this.props.item.title}</h1>
                    <img src={this.props.item.storeImg} alt=""/>
                    <a className='store-link' href={this.props.item.storeUrl}>{this.props.item.store}</a>
                    <div className='item-price'>{this.props.item.price}</div>
                    { this.getButton() }
                </div>
            )
        } else {
            return <div>No Item</div>
        }
    }
}

export default ItemShow;