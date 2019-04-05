import React, { Component, Fragment } from 'react';

export default class WelcomeModal extends Component {

    constructor() {
        super();

        this.state = {
            modal: false
        };
    }
    
    modalToggle(val) {
        this.setState({
            modal: val
        });
    }

    componentDidMount() {
        this.modalToggle(true);
    }

    modalClose() {
        this.modalToggle(false);
    }

    render() {
        const modalBlock = (
            <div className="modal">
                <h2>Добро пожаловать на наш блог!</h2>
                <button onClick={ this.modalClose.bind(this) } type="button">Закрыть</button>
            </div>
        );
        
        return (
            <Fragment>
                {this.state.modal ? modalBlock : null}
            </Fragment>
        );
    }
}