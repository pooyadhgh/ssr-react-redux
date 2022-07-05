import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/UsersList';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={Users} />
    </div>
  );
};

export default App;
