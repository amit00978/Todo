import React from 'react';
import Props from 'prop-types';
import {FlatList} from 'react-native';

class ListView extends React.Component {
  _keyExtractor = (_, index) => {
    return `key::${index}`;
  };

  render() {
    return (
      <FlatList
        {...this.props}
        keyExtractor={
          this.props.keyExtractor ? this.props.keyExtractor : this._keyExtractor
        }
        data={this.props.items}
        renderItem={this.props.mapItem}
        style={this.props.style}
        numColumns={this.props.numColumns}
        ListFooterComponent={this.props.ListFooterComponent}
        ListHeaderComponent={this.props.ListHeaderComponent}
      />
    );
  }
}

ListView.propTypes = {
  mapItem: Props.func.isRequired,
  color: Props.string,
  keyExtractor: Props.func,
  numColumns: Props.number,
};

export {ListView};
