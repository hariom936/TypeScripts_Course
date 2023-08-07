import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  getTodos,
  deleteTodos,
}

export type Action = FetchTodosAction | DeleteTodoAction;
