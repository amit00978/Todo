import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {Specs, palette} from 'Todo/src/theme/index';
import {Shadow} from '../index';

class FloatingLabelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: '',
      errorMessage: '',
      secureTextEntry: false,
      isFromMpin: false,
    };
    this.inputRef = null;
  }
  setValue(value) {
    this.setState({value});
  }
  setError(errorMessage: string) {
    this.setState({errorMessage});
  }
  componentDidMount() {
    if (this.props.href) {
      this.props.href(this);
    }
    if (this.props.initialValue) {
      this.setState({
        value: this.props.initialValue,
      });
    }
  }

  getValue() {
    if (this.state.value) {
      // If want to Apply minimum length than "minLength" key helps for that
      if (this.props.minLength) {
        if (this.state.value.length >= this.props.minLength) {
          return this.state.value;
        }

        this.setState({
          errorMessage: `Please enter the minimum  ${this.props.minLength} Words`,
        });

        return null;
      }
      return this.state.value;
    }
  }
  handleFocus = () => {
    this.props.handleFocus && this.props.handleFocus();
    this.setState({isFocused: true});
  };
  handleBlur = () => {
    this.props.handleBlur && this.props.handleBlur();
    this.setState({isFocused: false});
  };

  render() {
    const {
      label,
      value,
      textColor,
      headerName,
      index,
      formData,
      filter,
      keyboardType,
      returnKeyType,
      onSubmitEditing,
      docName,
      docPath,
      ...props
    } = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: -8,
      fontSize: !isFocused ? 20 : 14,
      color: !isFocused ? '#aaa' : '#000',
      marginLeft: '3%',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    };
    const PRIMARY_COlOR = '#0099da';
    const DULL_COlOR = '#aaa';
    const outerStyle = this.props.outterStyle ? this.props.outterStyle : {};
    const outerContainer: ViewStyle = {
      marginTop: 5,
      ...outerStyle,
    };
    const INPUT_CONTAINER: ViewStyle = {
      borderWidth: 1,
      borderColor: this.state.errorMessage
        ? 'red'
        : filter && this.state.value
        ? PRIMARY_COlOR
        : !isFocused
        ? '#e7eaf0'
        : PRIMARY_COlOR,
      ...this.props.containerStyle,
      borderRadius: 4,
      // marginTop: 10,
      marginTop: filter ? 10 : 0,
      marginBottom: formData ? (index === formData.length - 1 ? 6 : 0) : 0,
      justifyContent: 'center',
      backgroundColor: !this.props.editable ? palette.disabled : palette.white,
    };
    const UPPER_TEXT_STYLE: TextStyle = {
      fontSize: 10,
      color: PRIMARY_COlOR,
      ...Specs.fontRegular,
    };

    const TEXT_INPUT_STYLE = {
      height: 65,
      fontSize: 12,
      color: filter && this.state.value ? PRIMARY_COlOR : palette.DARKTEXTCOLOR,
      marginLeft: '5%',
      marginBottom: -20,
      marginTop: 4,
      paddingBottom: Platform.OS === 'ios' ? 25 : 34,
      lineHeight: 14,
      letterSpacing: 0,
      ...Specs.fontRegular,
      ...this.props.inputStyle,
    };
    const ERROR_TEXT_STYLE = {
      fontSize: 12,
      color: 'red',
      marginTop: 5,
      ...Specs.fontRegular,
    };
    const IMAGE_STYLE = {
      position: 'absolute',
      right: 13,
    };

    const headerText = {
      fontSize: 12,
      ...Specs.fontMedium,
      marginTop: 20,
      color: palette.DARKTEXTCOLOR,
    };

    const attachmentText = {
      fontSize: 12,
      textDecorationLine: 'underline',
      color: palette.LightRed,
      ...Specs.fontRegular,
      marginLeft: 8,
    };

    const MINIMUM_CHARACTER = {
      fontSize: 10,
      marginTop: 10,
      color: '#aaaaaa',

      ...Specs.fontRegular,
    };
    let focuesTextBackgroundColorUpper = this.props
      .focuesTextBackgroundColorUpper
      ? this.props.focuesTextBackgroundColorUpper
      : '#fff';

    return (
      <View style={{...outerContainer}}>
        <View>
          {this.props.isInputHide ? null : (
            <View
              style={[
                !filter ? Shadow : null,
                {
                  ...INPUT_CONTAINER,
                  height: filter ? 40 : 50,
                  ...this.props.inputContainer,
                },
              ]}>
              <TextInput
                underlineColorAndroid="transparent"
                {...props}
                // Margin is for the keyboard Avoid View and padding for shift the View up
                style={{
                  ...TEXT_INPUT_STYLE,
                }}
                placeholder={
                  this.props.placeholder ? this.props.placeholder : label
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                keyboardType={keyboardType}
                value={this.state.value}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={this.state.secureTextEntry}
                isFromMpin={this.state.isFromMpin}
                placeholderTextColor={palette.TEXT}
                onChangeText={val => {
                  this.setState({
                    errorMessage: null,
                  });
                  this.setValue(val);
                  if (this.props.onChange) {
                    this.props.onChange(val);
                  }
                  if (this.props.model) {
                    let model = this.props.model;
                    model[this.props.id] = val;
                  }
                  if (this.props.onChangeWithId) {
                    this.props.onChangeWithId(this.props.id, val);
                  }
                }}></TextInput>
              {this.props.secureTextEntry ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      secureTextEntry: !this.state.secureTextEntry,
                    });
                  }}
                  style={{...IMAGE_STYLE}}></TouchableOpacity>
              ) : null}
            </View>
          )}
        </View>
        {this.props.errorMessage ? (
          <Text style={{...ERROR_TEXT_STYLE}}>{this.props.errorMessage}</Text>
        ) : null}
        {this.state.errorMessage ? (
          <Text style={{...ERROR_TEXT_STYLE}}>{this.state.errorMessage}</Text>
        ) : null}
      </View>
    );
  }
}
export default FloatingLabelInput;
