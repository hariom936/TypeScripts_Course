import React from 'react'
import { connect } from 'react-redux';
import { Todo, getTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  getTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { loading: false };
  }

  hanldeOnClick = (): void => {
    this.props.getTodos();
    this.setState({ loading: true });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  renderList(): JSX.Element[] {
    return this.props?.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          <span style={{ fontWeight: 'bold' }}>Title: </span>{todo?.title}</div>
      )
    })
  }

  render() {
    console.log(this.props.todos)
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h3>ToDo List</h3>
          <button onClick={this.hanldeOnClick}>GET TODO LIST</button>
          {this.state.loading ? <h4>Loading...</h4> : null}
          {this.renderList()}
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
}

export const App = connect(mapStateToProps, { getTodos, deleteTodo })(_App);
