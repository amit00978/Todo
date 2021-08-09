import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  VerticalLayout,
  FloatingButton,
  Header,
  TitleComponent,
  TodoList,
  Text,
  TouchableOpacity,
} from 'Todo/src/components/index';
import {intialGetTodo} from '../../redux/action/Todo.action';

function Dashboard(props) {
  useEffect(() => {
    props.dispatch(intialGetTodo());
  });
  let todoList = props.todo.TodoList.filter(el => !el.showArchieve);
  return (
    <VerticalLayout style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <VerticalLayout style={{marginTop: 10, marginLeft: 20}}>
        <TitleComponent
          title={`Hello Abhishek`}
          des={`What do you want to add Today ?`}
        />
      </VerticalLayout>
      <TodoList data={todoList} navigation={props.navigation} />
      <FloatingButton
        onActionPress={() => {
          props.navigation.navigate('CreateTodo', {
            type: 'add',
          });
        }}
      />
      <TouchableOpacity
        style={{
          height: 50,
          width: '100%',
          position: 'absolute',
          bottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          props.navigation.navigate('archiveList');
        }}>
        <Text style={{fontSize: 20}}>Archive</Text>
      </TouchableOpacity>
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
)(Dashboard);
