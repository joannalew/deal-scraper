import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session.css';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            password2: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    demoLogin(e) {
        e.preventDefault();
        let user = {
            email: 'demouser@demo.com',
            password: 'password'
        }

        this.props.login(user)
    }

    renderErrors() {

        return (
            <ul className='session-errors-list'>
                {this.props.errors.map((err, idx) => {
                    return (
                        <li key={idx} className='session-error-item'>
                            {err}
                        </li>
                    )
                })}
            </ul>
        )
    }


    render() {

        return (
            <div className='session-form-wrapper'>
                <div className='session-form'>
                    <form className='session-login-form' onSubmit={this.handleSubmit}>
                        <label className='session-form-header'>Sign Up</label>
                        <input
                            required
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder='Username'
                            />
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
                        <input
                            required
                            value={this.state.password2}
                            type="password"
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <button id='form-submit'>Sign Up</button>
                        <button id='form-demo-login' onClick={this.demoLogin}>Demo Log In</button>

                        {this.renderErrors()}
                    </form>
                    <div className='session-form-image-wrapper'>
                        <div className='session-form-image'>
                            <Link to='/'><img className="shopping-photo" src="https://i.imgur.com/hC7SvUC.jpg"></img></Link>
                        </div>
                    </div>
                </div>
                <div className='filler'></div>
            </div>
        )
    }

}

export default withRouter(SignupForm);