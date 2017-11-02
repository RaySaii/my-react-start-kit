import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchMovie, fetchPic, } from '../actions/index';
import { Action } from '../reducers/index';

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});
const mapDispatchToProps = {
  addTodo,
}

interface ReduxProps {
  todos: string[],
  addTodo(text: string): Action;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class TodoList extends React.Component<any & ReduxProps, any> {
  state = {
    value: ''
  }
  handleChange = (e: any) => {
    this.setState({value: e.target.value})
  }
  add = () => {
    const {value} = this.state
    this.props.addTodo(value)
  }

  render() {
    const {todos} = this.props
    return (
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <input onChange={this.handleChange}/>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}
