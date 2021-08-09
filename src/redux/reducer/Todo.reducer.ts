import {UPDATE_TODO} from 'Todo/src/redux/type/Todo.type';

export const initialState = {
  TodoList: [],
  addSuccess: false,
};

const todoReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case UPDATE_TODO:
      return {...state, TodoList: data};
    default:
      return state;
  }
};

export default todoReducer;
