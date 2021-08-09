import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/Root.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/Root.saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
