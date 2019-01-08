import React from 'react';
import { Link } from 'react-router-dom';

class RecentlyViewedItems extends React.Component {

    componentDidMount() {
        this.props.recentlyViewed();
    }

    render () {

        const items = this.props.items.map((item, idx) => {
            
            return (
                <Link key={idx} to={`item/${item._id}`}>
                    <div className='image'>
                        <img src={item.storeImg} alt=""/>
                    </div>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                </Link>
            )
        });

        return (
            <ul>
                {items}
            </ul>
        )
    }
}

export default RecentlyViewedItems;