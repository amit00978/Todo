import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import CustomStyle from './Style';
import {HorizontalLayout, Image, Text} from 'Todo/src/components/index';

const FilterRow = ({leftImage, leftText, onLeftImagePress}) => {
  return (
    <HorizontalLayout
      style={{justifyContent: 'space-between', marginHorizontal: 14.8}}>
      <HorizontalLayout>
        {leftImage ? (
          <TouchableOpacity
            onPress={() => onLeftImagePress()}
            style={{height: 10.7, alignSelf: 'center'}}>
            <Image
              source={leftImage}
              style={{marginRight: 13}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
        <Text style={{...CustomStyle.textStyle}}>{leftText} </Text>
      </HorizontalLayout>
    </HorizontalLayout>
  );
};

export default FilterRow;
