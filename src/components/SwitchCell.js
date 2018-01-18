import React from 'react';
import { ListItem } from 'react-native-elements';

class SwitchCell extends React.Component {
  render() {
    const { key, switched, title } = this.props;
    return <ListItem key={key} switchButton switched={switched} hideChevron title={title} />;
  }
}

export default SwitchCell;
