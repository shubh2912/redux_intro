import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Form from './Form';
import Display from './Display';


const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Form}></Route>
      <Route path="/display" component={Display}></Route>
    </BrowserRouter>
  )
}

export default Router;