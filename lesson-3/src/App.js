import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';
import Menu from './Menu';

class App extends Component {
    render() {
        const menuItems = [
            {href: "/", label: "Главная"},
            {href: "/products", label: "Продукция"},
            {href: "/services", label: "Услуги"},
            {href: "/about", label: "О компании"},
            {href: "/contacts", label: "Контакты"}
        ];
        
        return (
            <Fragment>
                <Login />
                <Menu menuTitle="Меню:" items={menuItems} />
            </Fragment>
        )
    }
}

ReactDOM.render( <App /> , document.getElementById('root'));