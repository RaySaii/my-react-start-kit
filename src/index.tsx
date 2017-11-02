// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store, { history } from './store/index';
import App from './App';
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./assets/images/favicon.ico'); // Tell webpack to load favicon.ico

render(
  <AppContainer>
    <App store={store} history={history}/>
  </AppContainer>,
  document.getElementById('app')
);

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(
      <AppContainer>
        <NewApp store={store} history={history}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
