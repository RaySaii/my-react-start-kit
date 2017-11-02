import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Router from './router/index';

interface Props {
  store: any
  history: any
}

export default class App extends Component<Props, {}> {
  render() {
    const {store, history} = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router/>
        </ConnectedRouter>
      </Provider>
    );
  }
}
