import React from 'react';
import { Link } from 'react-router-dom';
var HomePage = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "React is great!!!"),
        React.createElement("h2", null, "Get Started"),
        React.createElement("ol", null,
            React.createElement("li", null,
                "Review the ",
                React.createElement(Link, { to: "/Todo" }, "Todo")))));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map