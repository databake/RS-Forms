import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class JobListItem extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'white',
            flex: 1,
          }}>
          <Text style={{ color: textColor }}>{this.props.name}</Text>
          <Text>{this.props.job_type}</Text>
          <Text>{`${this.props.make} ${this.props.model}`}</Text>
          <Text>{this.props.company}</Text>
          <Text>{`${this.props.address1} ${this.props.postcode}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default JobListItem;
