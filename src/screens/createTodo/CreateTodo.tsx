import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  VerticalLayout,
  Header,
  FilterRow,
  Form,
  Button,
  Text,
} from 'Todo/src/components/index';
import {back} from 'Todo/src/assets/index';
import {palette} from 'Todo/src/theme/index';
import {FormData} from './CreateTodoFormData';
import customStyle from './Style';
import {AddTodo, updateTodoData} from '../../redux/action/Todo.action';

function CreateTodo(props) {
  const [form, setForm] = useState([]);
  const [ref, setRef] = useState('');

  const submitTodo = () => {
    let data = ref.getForm();
    props.AddTodoData(data);
    props.navigation.goBack();
  };
  const updateTodo = () => {
    let data = ref.getForm();
    let index = props?.route?.params.index;
    props.UpdateTodo({
      data,
      index,
    });
    props.navigation.goBack();
  };
  useEffect(() => {
    let form1 = [...FormData];
    if (props?.route?.params?.type == 'edit') {
      let data = props.route.params.data;
      form1[0].initialValue = data.title;
      form1[1].initialValue = data.des;
      setForm(form1);
    } else {
      setForm([...FormData]);
    }
  }, []);
  const renderComponentFooter = () => {
    return (
      <VerticalLayout style={{marginTop: 10}}>
        <Button
          title={
            props?.route?.params?.type == 'edit' ? 'Update TODO' : 'ADD TODO'
          }
          onPress={() =>
            props?.route?.params?.type == 'edit' ? updateTodo() : submitTodo()
          }
          color={palette.PRIMARY}
          style={customStyle.button}
        />
      </VerticalLayout>
    );
  };
  return (
    <VerticalLayout style={{flex: 1}}>
      <Header />
      <VerticalLayout style={{marginTop: 10}}>
        <FilterRow
          leftText={
            props?.route?.params?.type == 'edit' ? 'Update Todo' : 'Create Todo'
          }
          leftImage={back}
          onLeftImagePress={() => props.navigation.goBack()}
        />
      </VerticalLayout>
      <VerticalLayout
        style={{flex: 1, backgroundColor: palette.white, margin: 15}}>
        <Form
          handleRef={ref => setRef(ref)}
          formData={form}
          renderFooterComponent={renderComponentFooter()}
          enableAutomaticScroll={true}></Form>
      </VerticalLayout>
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
      AddTodoData: data => {
        dispatch(AddTodo(data));
      },
      UpdateTodo: data => {
        dispatch(updateTodoData(data));
      },
    };
  },
)(CreateTodo);
