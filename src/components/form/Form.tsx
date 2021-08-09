import React from 'react';
import {
  ListView,
  VerticalLayout,
  Input as FloatingLabelInput,
} from 'Todo/src/components/index';
import {Specs, palette} from 'Todo/src/theme/index';
import styles from './Styles';
import Props from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.getForm = this.getForm.bind(this);
  }

  componentDidMount() {
    if (this.props.handleRef) this.props.handleRef(this);
  }

  // Get form value by response
  getForm = cb => {
    let data = {};
    for (let i = 0; i < this.props.formData.length; i++) {
      // Selcted current form for get item
      let item = this.props.formData[i];

      let value = this[`input_${item.id}`].getValue();
      data[`${item.id}`] = value;
      // we are not gettting data from View and button
      //   if (item.type !== 'View' && item.type !== 'button') {
      //     // getting data from particular component
      //     let value = this[`input_${item.id}`].getValue();
      //     // if data coming from from to date component
      //     if (item.type === 'from_to_date') {
      //       if (value[item.fromKey] && value[item.toKey]) {
      //         data = {...data, ...value};
      //       }
      //     }
      //     // if data coming from reason component
      //     else if (item.type === 'reason') {
      //       data = {...data, ...value};
      //     } else {
      //       if (value) {
      //         data[`${item.id}`] = value;
      //       } else if (item.required) {
      //         alert(`${item.name} is marked required.`);
      //         return;
      //       }
      //     }
      //   }
    }
    return data;
  };

  onSubmitPress(buttonType, formData, index) {
    this.props.onPress(buttonType, formData, index);
  }
  // Render item on basic of there type
  mapItem = data => {
    const {item, index} = data;
    switch (item.type) {
      case 'input':
        return (
          <FloatingLabelInput
            {...item}
            index={index}
            label={item.placeHolder}
            href={ref => {
              this[`input_${item.id}`] = ref;
            }}
            maxLength={item.maxLength ? item.maxLength : 500}
            placeholderTextColor={palette.DARKTEXTCOLOR}
            keyboardType={item.keyboardType ? item.keyboardType : 'default'}
            editable={item.editable ? false : true}
            TopHeaderTitleHide={true}
          />
        );
    }
  };

  render() {
    return (
      <VerticalLayout>
        <ListView
          items={this.props.formData}
          mapItem={this.mapItem}
          style={{...styles.flatListStyle, ...this.props.formStyle}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={this.props.renderHeaderComponent}
          ListFooterComponent={this.props.renderFooterComponent}
          scrollEnabled={false}
          keyExtractor={this.props.keyExtractor}
        />
      </VerticalLayout>
    );
  }
}

Form.propTypes = {
  formData: Props.array,
  handleRef: Props.func.isRequired,
};
export {Form};
