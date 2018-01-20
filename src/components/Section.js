import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { Card, List, ListItem, Icon, FormInput, FormLabel, Button } from 'react-native-elements';
import { observer } from 'mobx-react/native';
import { FileSystem } from 'expo';

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
  const iconName = required ? (value ? 'check-circle' : 'cancel') : 'check-circle';
  const iconColor = required ? (value ? '#4cd963' : '#bdc6cf') : '#4cd963';
  return <Icon name={iconName} size={50} color={iconColor} iconStyle={{ paddingRight: 10 }} />;
};

@observer
class Section extends Component {
  state = { photos: [], loading: true };

  constructor(props) {
    super(props);
    this._onPressScan = this._onPressScan.bind(this);
    this._renderTitle = this._renderTitle.bind(this);
    this._handleRowPress = this._handleRowPress.bind(this);
  }

  componentDidMount() {
    FileSystem.readDirectoryAsync(FileSystem.documentDirectory).then(photos => {
      this.setState({
        photos,
        loading: false,
      });
    });
  }

  _onPressScan = () => {
    this.props.navigation.navigate('Scanner');
  };

  _renderTitle = (title, type, placeholder) => {
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
      return (
        <Button
          title={title}
          large
          backgroundColor={'#313438'}
          borderRadius={4}
          onPress={this._onPressScan}
        />
      );
    }
    return title;
  };

  _renderRightIcon = (type, job_num, photoId) => {
    const iconName = type === 'signature' ? 'security' : 'photo-camera';
    const { photos } = this.state;
    const photo = photos.filter(photo => {
      return photo === `${job_num}${photoId}`;
    });
    if (photo[0] !== undefined) {
      return (
        <Image
          style={{
            width: 100,
            height: 80,
            resizeMode: 'contain',
          }}
          source={{
            uri: `${FileSystem.documentDirectory}${photo[0]}`,
          }}
          onPress={() => this._handleOnPressRightIcon(type, job_num)}
        />
      );
    } else {
      return (
        <Icon
          name={iconName}
          size={50}
          color={'#bdc6cf'}
          onPress={() => this._handleOnPressRightIcon(type, job_num)}
        />
      );
    }
  };

  _takePhoto = () => {
    this.props.navigation.navigate('CameraViewFinder');
  };

  _getPhotoFromAlbum = job_num => {
    this.props.navigation.navigate('PhotoPicker', { job_num });
  };

  _handleOnPressRightIcon = (type, job_num) => {
    console.log('job', job_num);
    switch (type) {
      case 'photoCell':
        Alert.alert(
          'Options',
          'What do you want to do?',
          [
            { text: 'Take Photo', onPress: () => this._takePhoto() },
            { text: 'Add additional Photo', onPress: () => console.log('Add additional') },
            { text: 'Remove Photo', onPress: () => console.log('Remove') },
            { text: 'Photo from Album', onPress: () => this._getPhotoFromAlbum(job_num) },
            { text: 'Cancel', style: 'cancel', onPress: () => console.log('Cancel') },
          ],
          { cancelable: true }
        );
        break;
      case 'signature':
        {
          const { navigate } = this.props.navigation;
          navigate('Signature');
        }
        break;

      default:
        break;
    }
  };

  _optionSelected = (id, option) => {
    const { store } = this.props;
    store.update(id, option);
  };

  _handleRowPress = field => {
    const { type, options, id } = field;
    switch (type) {
      case 'option':
        Alert.alert(
          'Select one',
          '',
          options.map(option => {
            return {
              text: option,
              onPress: () => this._optionSelected(id, option),
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
            const { id, type, value, title, placeholder } = field;
            return (
              <ListItem
                key={id}
                switchButton={type === 'SwitchCell'}
                type={type}
                name={id}
                hideChevron={!field.rightIcon}
                switched={type === 'SwitchCell' && field.value}
                title={this._renderTitle(title, type, placeholder)}
                rightIcon={this._renderRightIcon(type, this.props.job_num, id)}
                containerStyle={{
                  height: type === 'SwitchCell' ? 50 : 80,
                  justifyContent: 'center',
                  borderBottomColor: '#eef2f5',
                }}
                leftIcon={renderLeftIcon(field.required, type, value)}
                rightTitle={renderRightTitle(type, value, field.noValueText)}
                onPress={() => this._handleRowPress(field)}
              />
            );
          })}
        </List>
      </Card>
    );
  }
}

// make this component available to the app
export default Section;
