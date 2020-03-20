import React from 'react';

const App = () => {
  return <WelcomeMessage />;
}

const WelcomeMessage = () => {
  const dom = <h1>Hello World!</h1>;
  const text = 'I ma React.';
  return (
    <React.Fragment>
      {dom}
      <p>{text}</p>
      <input type='text' onChange={() => { console.log('i am clicked!') }} />
    </React.Fragment>
  );
}

export default App;
