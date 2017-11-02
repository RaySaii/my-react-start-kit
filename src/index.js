// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store, { history } from './store/index';
import App from './App';
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./assets/images/favicon.ico'); // Tell webpack to load favicon.ico
render(React.createElement(AppContainer, null,
    React.createElement(App, { store: store, history: history })), document.getElementById('app'));
if (module.hot) {
    module.hot.accept('./App', function () {
        var NewApp = require('./App').default;
        render(React.createElement(AppContainer, null,
            React.createElement(NewApp, { store: store, history: history })), document.getElementById('app'));
    });
}
//# sourceMappingURL=index.js.map