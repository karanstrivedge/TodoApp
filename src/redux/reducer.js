import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  MARK_DONE,
  SET_TODOS,
} from './actionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? {...todo, ...action.payload} : todo,
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case MARK_DONE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? {...todo, done: true} : todo,
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
