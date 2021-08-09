import React from 'react';
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import {
  HorizontalLayout,
  Image,
  ViewStyle,
  TouchableOpacity,
  Shadow,
} from 'Todo/src/components/index';
import {edit, del, tick, archive} from 'Todo/src/assets';
import commonStyle from 'Todo/src/styles/commomStyle';
import {palette} from 'Todo/src/theme/index';

import {
  deleteTodo,
  markCompleteTodo,
  archieveMark,
} from '../../redux/action/Todo.action';

const ViewEdit = props => {
  const showEdit = props.showEdit ? props.showEdit : false;
  const markComplete = props.markComplete ? props.markComplete : false;
  const showArchieve = props.showArchieve ? props.showArchieve : false;
  let canCancel = props.showCancel ? props.showCancel : false;
  let showIntimation = props.showIntimation ? props.showIntimation : false;
  let width = markComplete ? 135 : 90;
  width = showArchieve ? width + 45 : width;
  if (canCancel) {
    width = width + 30;
  }
  if (showIntimation) {
    width = width + 30;
  }
  const CONTAINER: ViewStyle = {
    width: width,
    height: 30,
    backgroundColor: palette.background,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(181, 183, 188, 0.5)',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  };
  const VIEW_WRAPPER: ViewStyle = {
    ...commonStyle.flexOne,

    ...commonStyle.center,
  };
  const EDIT_WRAPPER: ViewStyle = {
    ...commonStyle.flexOne,
    ...commonStyle.center,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(181, 183, 188, 0.5)',
  };
  const IMAGE_STYLE = {
    width: 15,
    height: 10.2,
    tintColor: 'black',
  };
  return (
    <HorizontalLayout
      style={{
        ...CONTAINER,
        ...props.style,
        ...Shadow,
      }}>
      <TouchableOpacity
        style={{
          ...VIEW_WRAPPER,
        }}
        onPress={() => {
          if (props.navigation) {
            props.navigation.navigate(props.editNavigation, {
              ...props,
              type: 'edit',
            });
          } else {
            Alert.alert('Alert Title', 'Feature under Progress', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }
        }}>
        <Image
          source={edit}
          style={{...IMAGE_STYLE}}
          resizeMode="contain"></Image>
      </TouchableOpacity>
      {canCancel ? (
        <TouchableOpacity
          style={{
            ...EDIT_WRAPPER,
          }}
          onPress={() => {
            let newProps = {...props, withdraw: true};
            if (props.navigation && props.viewNavigation) {
              props.navigation.navigate(props.viewNavigation, {
                ...newProps,
                type: 'cancel',
              });
            } else {
              Alert.alert('Alert Title', 'Feature under Progress', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            }
          }}>
          <Image
            source={edit}
            style={{width: 22, height: 20, tintColor: '#000000'}}
            resizeMode="contain"></Image>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={{
          ...EDIT_WRAPPER,
        }}
        onPress={() => {
          Alert.alert('Alert Title', 'Do You want to delete ?', [
            {
              text: 'OK',
              onPress: () => {
                props.dispatch(deleteTodo(props.index));
              },
            },
            {text: 'Cancel', onPress: () => console.log('OK Pressed')},
          ]);
        }}>
        <Image
          source={del}
          style={{...IMAGE_STYLE}}
          resizeMode="contain"></Image>
      </TouchableOpacity>

      {markComplete ? (
        <TouchableOpacity
          style={{
            ...EDIT_WRAPPER,
          }}
          onPress={() => {
            Alert.alert('Alert Title', 'Do You want to Mark Complete ?', [
              {
                text: 'OK',
                onPress: () => {
                  props.dispatch(markCompleteTodo(props.index));
                },
              },
              {text: 'Cancel', onPress: () => console.log('OK Pressed')},
            ]);
          }}>
          <Image
            source={tick}
            style={{...IMAGE_STYLE}}
            resizeMode="contain"></Image>
        </TouchableOpacity>
      ) : null}

      {showArchieve ? (
        <TouchableOpacity
          style={{
            ...EDIT_WRAPPER,
          }}
          onPress={() => {
            Alert.alert('Alert Title', 'Do You want to Archive ?', [
              {
                text: 'OK',
                onPress: () => {
                  props.dispatch(archieveMark(props.index));
                },
              },
              {text: 'Cancel', onPress: () => console.log('OK Pressed')},
            ]);
          }}>
          <Image
            source={archive}
            style={{...IMAGE_STYLE}}
            resizeMode="contain"></Image>
        </TouchableOpacity>
      ) : null}
    </HorizontalLayout>
  );
};

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
)(ViewEdit);
