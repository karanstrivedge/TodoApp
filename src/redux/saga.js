import {put, takeLatest, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  MARK_DONE,
  LOAD_TODOS,
} from './actionTypes';
import {setTodos} from './action';

function* loadTodosSaga() {
  const todos = yield AsyncStorage.getItem('todos');
  if (todos) {
    yield put(setTodos(JSON.parse(todos)));
  }
}

function* saveTodosSaga(action) {
  const todos = yield select(state => state.todos.todos);
  yield AsyncStorage.setItem('todos', JSON.stringify(todos));
}

function* todoSagas() {
  yield takeLatest(LOAD_TODOS, loadTodosSaga);
  yield takeLatest(
    [ADD_TODO, EDIT_TODO, DELETE_TODO, MARK_DONE],
    saveTodosSaga,
  );
}

export default todoSagas;
