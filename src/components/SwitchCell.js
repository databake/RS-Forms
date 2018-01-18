import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

class SwitchCell extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    const { key, switched, title } = this.props
    return (
      <ListItem
        key={key}
        switchButton
        switched={field.switched}
        hideChevron
        title={field.title}
      />
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

export default SwitchCell
