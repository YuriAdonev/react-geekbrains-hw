import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    render() {
        const { menuTitle, items } = this.props;

        const menuItems = items.map((item, index) => {
            return <MenuItem key={index} href={item.href} label={item.label} />
        });

        return (
            <nav>
                <p>{menuTitle}</p>
                <ul>
                    {menuItems}
                </ul>
            </nav>
        );
    }
}