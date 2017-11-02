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
import React from 'react';
export default function asyncImport(getComponent) {
    return /** @class */ (function (_super) {
        __extends(AsyncComponent, _super);
        function AsyncComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                component: null
            };
            return _this;
        }
        AsyncComponent.prototype.componentDidMount = function () {
            var _this = this;
            Promise.resolve(getComponent()).then(function (module) {
                return module.default || module;
            }).then(function (component) {
                return _this.setState({ component: component });
            });
        };
        AsyncComponent.prototype.render = function () {
            var component = this.state.component;
            return component ? React.createElement(component, Object.assign({}, this.props)) : React.createElement("h1", null, "Loading...");
        };
        return AsyncComponent;
    }(React.Component));
}
//# sourceMappingURL=AsyncImport.js.map