import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
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
            <form className='session-login-form'>
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
                <button onClick={this.handleSubmit}>Signup</button>
                {this.renderErrors()}
            </form>
        )
    }

}

export default withRouter(SignupForm);