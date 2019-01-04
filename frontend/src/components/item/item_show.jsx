import React from 'react';

class ItemShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getItem(id);
    }

    render() {
        return (
            <div className='item-show-page'>
                <h1>This is the item show page</h1>
            </div>
        )
    }
}

export default ItemShow;