"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var mapStateToProps = function (state) { return ({
    todos: state.todos,
}); };
var mapDispatchToProps = {
    addTodo: actions_1.addTodo,
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
        return (<div className="todo-list">
        <ul>
          {todos.map(function (todo, index) { return <li key={index}>{todo}</li>; })}
        </ul>
        <input onChange={this.handleChange}/>
        <button onClick={this.add}>add</button>
      </div>);
    };
    TodoList = __decorate([
        react_redux_1.connect(mapStateToProps, mapDispatchToProps)
    ], TodoList);
    return TodoList;
}(React.Component));
exports.default = TodoList;
