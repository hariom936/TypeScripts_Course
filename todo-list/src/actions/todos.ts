import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Optional Error Checking
export interface FetchTodosAction {
  type: ActionTypes.getTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodos;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.getTodos,
      payload: response.data,
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodos,
    payload: id,
  }
}
