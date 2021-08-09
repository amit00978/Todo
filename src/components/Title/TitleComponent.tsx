import React from "react"
import {VerticalLayout, Text} from 'Todo/src/components/index';
import Props from "prop-types"
import {palette} from 'Todo/src/theme/index';

class TitleComponent extends React.Component {
  render() {
    return (
      <VerticalLayout style={this.props.style}>
        <Text
          style={{
            fontSize: 15,
            color: palette.PRIMARYBORDER,
          }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
          }}>
          {this.props.des}
        </Text>
      </VerticalLayout>
    );
  }
}


TitleComponent.propTypes = {
  title: Props.string.isRequired,
  des: Props.string.isRequired,
  style: Props.object,
}


export { TitleComponent }
