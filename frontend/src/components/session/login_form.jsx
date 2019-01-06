import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {

        return (
            <form className='session-login-form'>
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
                <button onClick={this.handleSubmit}>Login</button>
                {this.renderErrors()}
            </form>
        )
    }
}

export default withRouter(LoginForm);