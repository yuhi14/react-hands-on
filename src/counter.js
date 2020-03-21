import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handlePlusButton = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleMinusButton = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (<React.Fragment>
            <h1 className='title'>カウンター</h1>
            <div>count: {this.state.count}</div>
            <button onClick={this.handlePlusButton}>+1</button>
            <button onClick={this.handleMinusButton}>-1</button>
            <p>------------------------------------------------------</p>
        </React.Fragment>);
    }
}
