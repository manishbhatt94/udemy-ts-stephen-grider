import React from "react";
import { connect } from "react-redux";

import { Todo, deleteTodo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: () => void;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: Readonly<AppProps>): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onFetchClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoDeleteClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): React.JSX.Element {
    return (
      <ul>
        {this.props.todos.map((todo: Todo) => {
          return (
            <li key={todo.id}>
              <button
                type="button"
                onClick={() => this.onTodoDeleteClick(todo.id)}
              >
                &times;
              </button>
              {todo.title}
            </li>
          );
        })}
      </ul>
    );
  }

  render(): React.ReactNode {
    return (
      <article>
        <button type="button" onClick={this.props.fetchTodos}>
          Fetch
        </button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </article>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
