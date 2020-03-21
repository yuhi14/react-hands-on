import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <React.Fragment>
      <WelcomeMessage title={'Hello World!'} sub={'I ma React.'} />
      <WelcomeMessage title={'Hello japan!'} sub={'I ma React.'} />
      <WelcomeMessage />
      <p>------------------------------------------------------</p>
      <Counter />
    </React.Fragment>
  );
}

const WelcomeMessage = (props) => {
  const dom = <h1>{props.title}</h1>;
  const text = props.sub;
  return (
    <React.Fragment>
      {dom}
      <p>{text}</p>
      <input type='text' onChange={() => { console.log('i am clicked!') }} />
    </React.Fragment>
  );
}

class Counter extends Component {
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
      <div>count: {this.state.count}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>);
  }
}

WelcomeMessage.defaultProps = {
  title: 'デフォルトタイトル',
  sub: 'デフォルトサブ'
}

WelcomeMessage.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string.isRequired
}

export default App;
