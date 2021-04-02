import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login, Todo } from './Component';

const App:React.FC=()=> {
  return (
    <div>
      <h1>Welcome To ToDo App</h1>
      <BrowserRouter>
        <Route path='/' exact={true} component={Login}/>
        <Route path='/todo/:name' exact={true} component={Todo}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
