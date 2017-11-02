/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import asyncImport from './AsyncImport';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const HomePage = asyncImport(() => import('../pages/HomePage'))
const TodoPage = asyncImport(() => import('../pages/TodoPage'))
const SagaPage = asyncImport(() => import('../pages/SagaPage'))

export default class Router extends React.Component<any, {}> {
  render() {
    const activeStyle = {color: 'blue'};
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/todo" activeStyle={activeStyle}>Todo</NavLink>
          {' | '}
          <NavLink to="/saga" activeStyle={activeStyle}>Saga</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/todo" component={TodoPage}/>
          <Route path="/saga" component={SagaPage}/>
        </Switch>
      </div>
    );
  }
}
