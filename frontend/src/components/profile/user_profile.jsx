import React from 'react';
import './user_profile.css';
import UserProfileItemContainer from './user_profile_item_container';

class UserProfile extends React.Component {
    componentDidMount() {
        this.props.getFollows({ user: this.props.user });
    }

    render() {
        let results = (<div></div>);
        let numFollows = 0;

        if (!(Object.keys(this.props.items).length === 0)) {
            const itemsArray = Object.values(this.props.items);

            results = itemsArray.map((item, idx) => {
                return (
                    <UserProfileItemContainer key={item.storeId} item={item} idx={idx + 1} />
                )
            });
            numFollows = itemsArray.length;
        }

        return (
            <div className='user-profile'>
                <div className='user-profile-info'>
                    <div >
                        <img className='user-profile-img' src="https://profiles.utdallas.edu/img/default.png" alt=""/>
                    </div>
                    <div className='user-profile-details'>
                        <div className='user-profile-username'>{this.props.user.username}</div>
                        <div className='user-profile-email'>{this.props.user.email}</div>
                        <div className='user-profile-watch-count'>Number of items watched: { numFollows }</div>
                    </div>
                </div>
                <div className='user-profile-watchlist'>
                    { results }
                </div>
            </div>
        )
    }
}

export default UserProfile