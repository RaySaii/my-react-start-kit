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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, } from '../actions/index';
var mapStateToProps = function (state) { return ({
    todos: state.todos,
}); };
var mapDispatchToProps = {
    addTodo: addTodo,
};
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: ''
        };
        _this.handleChange = function (e) {
            _this.setState({ value: e.target.value });
        };
        _this.add = function () {
            var value = _this.state.value;
            _this.props.addTodo(value);
        };
        return _this;
    }
    TodoList.prototype.render = function () {
        var todos = this.props.todos;
        return (React.createElement("div", { className: "todo-list" },
            React.createElement("ul", null, todos.map(function (todo, index) { return React.createElement("li", { key: index }, todo); })),
            React.createElement("input", { onChange: this.handleChange }),
            React.createElement("button", { onClick: this.add }, "add")));
    };
    TodoList = __decorate([
        connect(mapStateToProps, mapDispatchToProps)
    ], TodoList);
    return TodoList;
}(React.Component));
export default TodoList;
//# sourceMappingURL=TodoList.js.map