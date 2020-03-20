import React from 'react';

function App() {
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
