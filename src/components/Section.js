// import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Card, List, ListItem, Icon, FormInput, FormLabel, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';

// create a component

const renderRightIcon = type => {
  const iconName = type === 'signature' ? 'security' : 'photo-camera';
  return (
    <Icon
      name={iconName}
      size={50}
      color={'#bdc6cf'}
      onPress={() => handleOnPressRightIcon(type)}
    />
  );
};

const renderRightTitle = (type, value, placeholder) => {
  if (type === 'option') {
    if (value) {
      return value;
    } else {
      return placeholder;
    }
  }
};

const renderLeftIcon = (required, type, value) => {
  if (type === 'SwitchCell' || type === 'button') {
    return null;
  }
  // if not required then 'check-circle'
  // if required and value then 'check-circle'
  const iconName = required ? (value ? 'check-circle' : 'cancel') : 'check-circle';
  const iconColor = required ? (value ? '#4cd963' : '#bdc6cf') : '#4cd963';
  return <Icon name={iconName} size={50} color={iconColor} iconStyle={{ paddingRight: 10 }} />;
};

const handleOnPressRightIcon = type => {
  switch (type) {
    case 'photoCell':
      Alert.alert(
        'Options',
        'What do you want to do?',
        [
          { text: 'Take Photo', onPress: () => console.log('Camera') },
          { text: 'Add additional Photo', onPress: () => console.log('Album') },
          { text: 'Remove Photo', onPress: () => console.log('Remove') },
          {
            text: 'Photo from Album',
            onPress: () => console.log('Photo Album'),
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => console.log('Cancel'),
          },
        ],
        { cancelable: true }
      );
      // Actions.camera()
      break;
    case 'signature':
      Actions.signature();
      break;

    default:
      break;
  }
};

const renderTitle = (title, type, placeholder) => {
  if (type === 'text') {
    return (
      <View>
        <FormLabel containerStyle={{ marginLeft: 0 }} labelStyle={{ marginLeft: 0 }}>
          {title}
        </FormLabel>
        <FormInput placeholder={placeholder || 'enter text'} containerStyle={{ marginLeft: 0 }} />
      </View>
    );
  } else if (type === 'button') {
    return <Button title={title} large backgroundColor={'#313438'} borderRadius={4} />;
  }
  return title;
};

@observer
class Section extends Component {
  optionSelected = (id, option) => {
    const { store } = this.props;
    store.update(id, option);
  };

  handleRowPress = field => {
    const { type, options, id } = field;
    switch (type) {
      case 'option':
        Alert.alert(
          'Select one',
          '',
          options.map(option => {
            return {
              text: option,
              onPress: () => this.optionSelected(id, option),
            };
          }),
          { cancelable: true }
        );
        break;

      default:
        break;
    }
  };

  render() {
    const { title, fields } = this.props;
    return (
      <Card title={title} dividerStyle={{ marginBottom: 0 }}>
        <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
          {fields.map((field, i) => {
            const { id, type, value } = field;
            return (
              <ListItem
                key={id}
                switchButton={type === 'SwitchCell'}
                type={type}
                name={id}
                hideChevron={!field.rightIcon}
                switched={type === 'SwitchCell' && field.value}
                title={renderTitle(field.title, type, field.placeholder)}
                rightIcon={renderRightIcon(type)}
                containerStyle={{
                  height: type === 'SwitchCell' ? 50 : 80,
                  justifyContent: 'center',
                  borderBottomColor: '#eef2f5',
                }}
                leftIcon={renderLeftIcon(field.required, type, value)}
                rightTitle={renderRightTitle(type, value, field.noValueText)}
                onPress={() => this.handleRowPress(field)}
              />
            );
          })}
        </List>
      </Card>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default Section;
