import { ITodo } from '../models/todo.model';
import { TodoActionTypes } from './todo.actions.types';
import { TODO_ACTION_TYPES } from '../constants';

export const addTodo = (todo: ITodo): TodoActionTypes => ({
  type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
  payload: todo,
});

export const removeTodo = (todo: ITodo): TodoActionTypes => ({
  type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
  payload: todo,
});

export const toggleTodoStatus = (todo: ITodo): TodoActionTypes => ({
  type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
  payload: todo,
});
