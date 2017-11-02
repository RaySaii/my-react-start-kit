"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var HomePage = function () {
    return (<div>
      <h1>React is great!!!</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <react_router_dom_1.Link to="/Todo">Todo</react_router_dom_1.Link></li>
      </ol>
    </div>);
};
exports.default = HomePage;
