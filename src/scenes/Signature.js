import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Signature extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>I am Signature</Text>
      </View>
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

export default Signature
