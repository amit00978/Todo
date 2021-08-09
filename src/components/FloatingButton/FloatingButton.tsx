import React, { Component } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {VerticalLayout, Image} from 'Todo/src/components/index';
import {palette} from 'Todo/src/theme/index';
import Draggable from './Draggable';
import { add } from "Todo/src/assets/index"

const { width, height } = Dimensions.get('window');

export default class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  } 

  render() {

    const { onActionPress } = this.props;
    let newHeight = this.props.height ? this.props.height : 120;
    let newWidth = this.props.width ? this.props.width : 80;
      return (
        <Draggable y={height - newHeight} x={width - newWidth}>
          <VerticalLayout>
            <TouchableOpacity onPress={() => onActionPress()}>
              <VerticalLayout style={styles.actionButton}>
                <Image
                  source={add}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
              </VerticalLayout>
            </TouchableOpacity>
          </VerticalLayout>
        </Draggable>
      );
    
  }
}

const styles = StyleSheet.create({
  floatButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    width: 30,
    height: 30,
    left: 7,
    borderRadius: 15,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: palette.PRIMARY,
    alignItems:'center',
    justifyContent:'center'
  },
  imageStyle:  {
    width: 24,
    height: 24,
  }
})