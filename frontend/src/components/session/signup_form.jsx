import React from 'react';
import { withRouter } from 'react-router-dom';
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
                        <label className='session-form-header'>Signup</label>
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
                        <input id='form-submit' type="submit" value="Signup"/>
                        {this.renderErrors()}
                    </form>
                    <div className='session-form-image-wrapper'>
                        <div className='session-form-image'>
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(SignupForm);