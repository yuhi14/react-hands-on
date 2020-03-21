import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <React.Fragment>
      <WelcomeMessage title={'Hello World!'} sub={'I ma React.'} />
      <WelcomeMessage title={'Hello japan!'} sub={'I ma React.'} />
      <WelcomeMessage />
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

WelcomeMessage.defaultProps = {
  title: 'デフォルトタイトル',
  sub: 'デフォルトサブ'
}

WelcomeMessage.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string.isRequired
}

export default App;
