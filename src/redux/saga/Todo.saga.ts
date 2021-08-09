import {takeEvery, call, put} from 'redux-saga/effects';
import {
  ADD_TODO,
  INITAL_TODO,
  UPDATE_TODO_DATA,
  DELETE_TODO,
  MARK_COMPLETE,
  ARCHIEVE_TODO,
} from 'Todo/src/redux/type/Todo.type';
import {
  addTodo,
  intialTodoData,
  updateTodoData,
  deleteTodo,
  markComplete,
  archiveComplete,
} from '../../services/Todo.service';
import {updateTodo} from '../action/Todo.action';

function* addTodoData(payload) {
  try {
    const todoList = yield call(addTodo, payload.data);
    yield put(updateTodo(todoList));
  } catch (e) {}
}
export function* waitForUpdateTodo() {
  yield takeEvery(ADD_TODO, addTodoData);
}

function* intialTodoFill() {
  try {
    const todoList = yield call(intialTodoData);
    yield put(updateTodo(todoList));
  } catch (e) {}
}
export function* waitForInitalTodo() {
  yield takeEvery(INITAL_TODO, intialTodoFill);
}

function* updateTodoList(payload) {
  try {
    const todoList = yield call(updateTodoData, payload.data);
    yield put(updateTodo(todoList));
  } catch (e) {}
}
export function* watchUpdateTodo() {
  yield takeEvery(UPDATE_TODO_DATA, updateTodoList);
}

function* deleteTodoInList(payload) {
  try {
    const todoList = yield call(deleteTodo, payload.index);
    yield put(updateTodo(todoList));
  } catch (e) {}
}

export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodoInList);
}

function* markCompleteTodo(payload) {
  try {
    const todoList = yield call(markComplete, payload.index);
    yield put(updateTodo(todoList));
  } catch (e) {}
}

export function* watchMarkCompleted() {
  yield takeEvery(MARK_COMPLETE, markCompleteTodo);
}

function* archiveTodo(payload) {
  try {
    const todoList = yield call(archiveComplete, payload.index);
    yield put(updateTodo(todoList));
  } catch (e) {}
}
export function* watcharchive() {
  yield takeEvery(ARCHIEVE_TODO, archiveTodo);
}
