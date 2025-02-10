import React from "react";
import { connect } from "react-redux";

import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): React.JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render(): React.ReactNode {
    return (
      <article>
        <button type="button" onClick={this.props.fetchTodos}>
          Fetch
        </button>
        {this.renderList()}
      </article>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
