import React from 'react';
import PropTypes from 'prop-types';
import { Counter } from './counter.js';
import "./app.css";

const App = () => {
  return (
    <React.Fragment>
      <WelcomeMessage title={'Hello World!'} subTitle={'I am Yuhi.'} />
      <WelcomeMessage title={"G's Academy"} subTitle={'世界を変えるGEEKになろう'} />
      <WelcomeMessage />
      <Counter />
    </React.Fragment>
  );
}

const WelcomeMessage = (props) => {
  const dom = <h1 className='title'>{props.title}</h1>;
  const text = props.subTitle;
  return (
    <React.Fragment>
      {dom}
      <p>{text}</p>
      <p>------------------------------------------------------</p>
    </React.Fragment>
  );
}

// propsのデフォルト値をセットする
WelcomeMessage.defaultProps = {
  title: 'デフォルトタイトル',
  subTitle: 'デフォルトサブタイトル'
}

// propsの型を定義する
WelcomeMessage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string.isRequired
}

export default App;
