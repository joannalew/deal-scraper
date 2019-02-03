import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session.css';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {

        return (
            <ul className='session-errors-list'>
                {this.props.errors.map((err, idx) => {
                    return (
                        <li key ={idx} className='session-error-item'>
                            {err}
                        </li>
                    )
                })}
            </ul>
        )
    }

    demoLogin(e) {
        e.preventDefault();
        let user = {
            email: 'demouser@demo.com',
            password: 'password'
        }

        this.props.login(user)
    }

    render() {

        return (
            <div className='session-form-wrapper'>
                <div className='session-form'>
                    <form className='session-login-form' onSubmit={this.handleSubmit}>
                        <label className='session-form-header'>Log In</label>
                        <input 
                            className='session-form-input'
                            required
                            value={this.state.email}
                            type="email"
                            onChange={this.update('email')}
                            placeholder='Email'
                            />
                        <input
                            required
                            className='session-form-input'
                            value={this.state.password}
                            type="password"
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                        <button id='form-submit'>Log In</button>
                        <button id='form-demo-login' onClick={this.demoLogin}>Demo Log In</button>
                        {this.renderErrors()}
                    </form>
                    <div className='session-form-image-wrapper'>
                        <div className='session-form-image'>
                            <Link to='/'><i className="fas fa-hand-holding-usd"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='filler'></div>
            </div>
        )
    }
}

export default withRouter(LoginForm);