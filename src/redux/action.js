import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  MARK_DONE,
  LOAD_TODOS,
  SET_TODOS,
} from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = todo => ({
  type: EDIT_TODO,
  payload: todo,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const markDone = id => ({
  type: MARK_DONE,
  payload: id,
});

export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos,
});
