import React, { Component, Fragment } from 'react';

export default class Login extends Component {

    render() {
        return (
            <form>
                <input type="text" placeholder="Login" />
                <input type="text" placeholder="Password" />
                <button>Login</button>
            </form>
        );
    }
}
