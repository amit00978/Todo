import {all} from 'redux-saga/effects';
import {
  waitForUpdateTodo,
  waitForInitalTodo,
  watchUpdateTodo,
  watchDeleteTodo,
  watchMarkCompleted,
  watcharchive,
} from './Todo.saga';

export default function* rootSaga() {
  yield all([
    waitForUpdateTodo(),
    waitForInitalTodo(),
    watchUpdateTodo(),
    watchDeleteTodo(),
    watchMarkCompleted(),
    watcharchive(),
  ]);
}
