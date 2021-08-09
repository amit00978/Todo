import React from 'react';
import {connect} from 'react-redux';
import {
  VerticalLayout,
  FloatingButton,
  Header,
  TitleComponent,
  TodoList,
  Text,
  FilterRow,
} from 'Todo/src/components/index';
import {back} from 'Todo/src/assets/index';

function ArchiveList(props) {
  let todoList = props.todo.TodoList.filter(el => el.showArchieve);
  return (
    <VerticalLayout>
      <Header />
      <VerticalLayout style={{marginTop: 10}}>
        <FilterRow
          leftText="Archive List"
          leftImage={back}
          onLeftImagePress={() => props.navigation.goBack()}
        />
      </VerticalLayout>
      <TodoList data={todoList} navigation={props.navigation} />
    </VerticalLayout>
  );
}

export default connect(
  state => {
    return {
      todo: state.todoReducer,
    };
  },
  dispatch => {
    return {
      dispatch: dispatch,
    };
  },
)(ArchiveList);
