import React, { Component } from 'react';
import { Card, List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class APISection extends Component {
  _handleRowPress = field => {
    const setParamsAction = NavigationActions.back({
      params: { field },
    });
    return this.props.navigation.dispatch(setParamsAction);
  };

  render() {
    const { title, fields } = this.props;

    return (
      <Card title={title} dividerStyle={{ marginBottom: 0 }}>
        <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
          {fields.map((field, i) => {
            const { id, title, response } = field;
            return (
              <ListItem
                key={id}
                name={id}
                title={title}
                subtitle={response}
                containerStyle={{
                  height: 80,
                  justifyContent: 'center',
                  borderBottomColor: '#eef2f5',
                }}
                onPress={() => this._handleRowPress(field)}
              />
            );
          })}
        </List>
      </Card>
    );
  }
}
