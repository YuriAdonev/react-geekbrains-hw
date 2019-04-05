import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        const { title, text, date } = this.props;

        return ( 
            <article className="article">
                <h2 className="article__title">{title}</h2>
                <p className="article__text">{text}</p>
                <span className="article__date">{date}</span>
            </article>
        );
    }
}