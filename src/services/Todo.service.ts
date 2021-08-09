import {ADD} from '../utils/Constant';
import * as AsyncStore from 'Todo/src/utils/AsyncStorageUtils';
export async function addTodo(todo) {
  let todoList;
  let todoD = await AsyncStore.get(ADD);
  todoList = (todoD && JSON.parse(todoD)) || [];
  todoList.push(todo);
  await AsyncStore.set(ADD, JSON.stringify(todoList));
  return todoList;
}

export async function intialTodoData() {
  let todoList;
  let todoD = await AsyncStore.get(ADD);
  todoList = (todoD && JSON.parse(todoD)) || [];
  await AsyncStore.set(ADD, JSON.stringify(todoList));
  return todoList;
}

export async function updateTodoData(data) {
  let data1 = data;
  let todoList;
  let todoD = await AsyncStore.get(ADD);
  todoList = (todoD && JSON.parse(todoD)) || [];
  let updateIndexValue = todoList[data1.index];
  updateIndexValue.title = data1.data.title;
  updateIndexValue.des = data1.data.des;
  todoList[data1.index] = updateIndexValue;
  await AsyncStore.set(ADD, JSON.stringify(todoList));
  return todoList;
}

export async function deleteTodo(index) {
  let todoList;
  let todoD = await AsyncStore.get(ADD);
  todoList = (todoD && JSON.parse(todoD)) || [];
  todoList.splice(index, 1);
  await AsyncStore.set(ADD, JSON.stringify(todoList));
  return todoList;
}

export async function markComplete(index) {
  let todoList;
  let todoD = await AsyncStore.get(ADD);
  todoList = (todoD && JSON.parse(todoD)) || [];
  let todoData = todoList[index];
  todoData.markComplete = true;
  todoList[index] = todoData;
  await AsyncStore.set(ADD, JSON.stringify(todoList));
  return todoList;
}

export async function archiveComplete(index) {
  let todoList;
  let todoD = await AsyncStore.get(ADD);
  todoList = (todoD && JSON.parse(todoD)) || [];
  let todoData = todoList[index];
  todoData.showArchieve = true;
  todoList[index] = todoData;
  await AsyncStore.set(ADD, JSON.stringify(todoList));
  return todoList;
}
