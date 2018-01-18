import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import {Button} from 'react-native-elements';
import Modal from '../components/BaseModal';

class Options extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <Modal verticalPercent={0.6} horizontalPercent={0.3}>
      <View flex={1} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
        <Text>Error Modal</Text>
        <Text>Slides up from the bottom, and covers the half screen with no transparency</Text>
      </View>
    </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Options
