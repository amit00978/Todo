import {
  ADD_TODO,
  UPDATE_TODO,
  INITAL_TODO,
  UPDATE_TODO_DATA,
  DELETE_TODO,
  MARK_COMPLETE,
  ARCHIEVE_TODO,
} from 'Todo/src/redux/type/Todo.type';

export const AddTodo = data => {
  return {
    type: ADD_TODO,
    data: data,
  };
};
export const updateTodo = todoList => {
  return {
    type: UPDATE_TODO,
    payload: todoList,
  };
};

export const intialGetTodo = () => {
  return {
    type: INITAL_TODO,
  };
};
export const updateTodoData = data => {
  return {
    type: UPDATE_TODO_DATA,
    data,
  };
};
export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    index,
  };
};

export const markCompleteTodo = index => {
  return {
    type: MARK_COMPLETE,
    index,
  };
};

export const archieveMark = index => {
  return {
    type: ARCHIEVE_TODO,
    index,
  };
};

ARCHIEVE_TODO;
