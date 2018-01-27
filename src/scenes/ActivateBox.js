import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ActivateBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Activate Box</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivateBox;
