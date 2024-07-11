import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './saga';
import todoReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSagas);

export default store;
