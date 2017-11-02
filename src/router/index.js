var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import asyncImport from './AsyncImport';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
var HomePage = asyncImport(function () { return import('../pages/HomePage'); });
var TodoPage = asyncImport(function () { return import('../pages/TodoPage'); });
var SagaPage = asyncImport(function () { return import('../pages/SagaPage'); });
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Router.prototype.render = function () {
        var activeStyle = { color: 'blue' };
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(NavLink, { exact: true, to: "/", activeStyle: activeStyle }, "Home"),
                ' | ',
                React.createElement(NavLink, { to: "/todo", activeStyle: activeStyle }, "Todo"),
                ' | ',
                React.createElement(NavLink, { to: "/saga", activeStyle: activeStyle }, "Saga")),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/", component: HomePage }),
                React.createElement(Route, { path: "/todo", component: TodoPage }),
                React.createElement(Route, { path: "/saga", component: SagaPage }))));
    };
    return Router;
}(React.Component));
export default Router;
//# sourceMappingURL=index.js.map