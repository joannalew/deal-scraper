import React from 'react';
import './user_profile.css';

class UserProfile extends React.Component {

    render() {

        return (
            <div className='user-profile'>
                <div className='user-profile-info'>
                    <div >
                        <img className='user-profile-img' src="https://profiles.utdallas.edu/img/default.png" alt=""/>
                    </div>
                    <div className='user-profile-details'>
                        <div className='user-profile-username'>{this.props.user.username}</div>
                        <div className='user-profile-email'>{this.props.user.email}</div>
                        <div className='user-profile-watch-count'>Number of items watched:</div>
                    </div>
                </div>
                <div className='user-profile-watchlist'>

                </div>
            </div>
        )
    }
}

export default UserProfile