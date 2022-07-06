import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <Helmet>
        <title>SSR React Redux App</title>
      </Helmet>
      <div>Hello World From React!</div>
      <button onClick={() => console.log('Clicked!')}>Press Me</button>
      <button onClick={() => history.push('/users')}>
        Go to the Users Page
      </button>
    </div>
  );
};

export default { component: HomePage };
