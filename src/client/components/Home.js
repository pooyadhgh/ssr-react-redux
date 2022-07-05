import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Hello World From React!</div>
      <button onClick={() => console.log('Clicked!')}>Press Me</button>
    </div>
  );
};

export default Home;
