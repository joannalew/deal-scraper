import React from 'react';
import { withRouter } from 'react-router-dom';
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
            <form className='session-login-form' onSubmit={this.handleSubmit}>
                <input 
                    required
                    value={this.state.email}
                    type="email"
                    onChange={this.update('email')}
                    placeholder='Email'
                />
                <input
                    required
                    value={this.state.password}
                    type="password"
                    onChange={this.update('password')}
                    placeholder="Password"
                />
                <button className='demo-user-login' onClick={this.demoLogin}>Demo</button>
                <input type='submit' value='Login'/>
                {this.renderErrors()}
            </form>
        )
    }
}

export default withRouter(LoginForm);