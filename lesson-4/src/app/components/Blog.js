import React, { Component } from 'react';

import Post from './Post';

export default class Blog extends Component {
    render() {
        const { posts } = this.props;

        const postItems = posts.map((item, index) => {
            return <Post key={index} title={item.title} text={item.text} date={item.date} />;
        });

        return (
            <section className="blog">
                {postItems}
            </section>
        );
    }
}