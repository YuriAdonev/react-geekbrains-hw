import React, { Component } from 'react';

export default class MenuItem extends Component {
    render() {
        const { href, label } = this.props;

        return (
            <li>
                <a href={href}>{label}</a>
            </li>
        );
    }
}