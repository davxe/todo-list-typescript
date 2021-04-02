import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login, Todo } from './Component';

const App:React.FC=()=> {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact={true} component={Login}/>
        <Route path='/todo/:name' exact={true} component={Todo}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
