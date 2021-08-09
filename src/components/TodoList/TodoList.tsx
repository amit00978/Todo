import React from 'react';
import {
  VerticalLayout,
  Header,
  FilterRow,
  Form,
  Button,
  Text,
  ViewEdit,
  HorizontalLayout,
  TouchableOpacity,
} from 'Todo/src/components/index';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {Shadow} from '../Shadow/Shadow';
function TodoList({data = [], navigation}) {
  const renderItem = ({item, index, drag}) => {
    return (
      <TouchableOpacity
        onLongPress={drag}
        style={{
          height: 100,
          width: '90%',
          marginLeft: '5%',
          marginTop: 20,
          backgroundColor: '#f6f6f6',
          borderRadius: 10,
          ...Shadow,
        }}>
        <HorizontalLayout style={{flex: 1}}>
          <VerticalLayout
            style={{
              width: 20,
              backgroundColor: item.markComplete ? 'green' : 'red',
              height: '100%',
            }}></VerticalLayout>
          <VerticalLayout
            style={{
              flex: 1,
              paddingLeft: 10,
              marginTop: 15,
            }}>
            <Text style={{color: '#616161'}}>{item.title}</Text>
            <Text style={{color: '#383530', fontWeight: 'bold'}}>
              {item.des}
            </Text>
          </VerticalLayout>
        </HorizontalLayout>

        <VerticalLayout style={{position: 'absolute', right: 10, bottom: 5}}>
          <ViewEdit
            index={index}
            data={item}
            navigation={navigation}
            showEdit={true}
            showArchieve={!item.showArchieve}
            editNavigation="CreateTodo"
            deleteNavigation="BriefCaseReimburseForm"
            style={{left: 10}}
            markComplete={!item.markComplete}
          />
        </VerticalLayout>
      </TouchableOpacity>
    );
  };
  return (
    <VerticalLayout style={{height: '65%'}}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onDragEnd={({data}) => {}}
      />
    </VerticalLayout>
  );
}
export default TodoList;
