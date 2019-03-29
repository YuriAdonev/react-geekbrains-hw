import React, { Component, Fragment } from 'react';

export default class Developer extends Component {
    constructor() {
        super();
        this.info = {
            name: "Yuri",
            department: "WEB - dev"
        };
    }

    render() {
        return (
            <Fragment>
                <p>{this.info.name}</p>
                <p>{this.info.department}</p>
            </Fragment>
        );
    }
}
