import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="session_links">
                    <Link to={'/profile'}>Profile</Link>
                    <button className="session_links_button"onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="session_links">
                    <Link to={'/search'}>Search</Link>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar_header_wrapper">
                <div className="navbar_header">
                    <Link to='/' ><i className="fas fa-hand-holding-usd"></i></Link>
                    {this.getLinks()}
                </div>
            </div>
        );
    }
}

export default NavBar;