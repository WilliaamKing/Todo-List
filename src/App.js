import React, {Fragment}from 'react';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import './App.css';

const App = () =>(
  <Fragment>
    <Header />
    <Todo />
  </Fragment>
);

export default App;
