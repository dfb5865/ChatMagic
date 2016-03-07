import React from 'react';
import { IndexRoute, Route } from 'react-router';

import  App from '../App';
import Hello from '../components/dumb/Hello';

const FourOhFour = () => {
  return (
    <div style={{ color: 'white', textAlign: 'center', fontSize: 36 }}>
      404 not found
    </div>
  );
};

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Hello}/>
    <Route path="*" component={FourOhFour}/>
  </Route>
);