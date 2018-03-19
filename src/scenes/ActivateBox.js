import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import sections from '../../data/MockActivate.json';
import APISection from '../components/APISection';

class ActivateBox extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          {sections.map((section, i) => {
            return (
              <APISection
                key={i}
                title={section.title}
                fields={section.fields}
                navigation={this.props.navigation}
                onPress={this.props.onPress}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default ActivateBox;
