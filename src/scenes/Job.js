import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import Section from '../components/Section';
import formStore from '../stores/formStore';

class Job extends Component {
  render() {
    const { sections } = formStore;
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View>
          {sections.map((section, i) => {
            return (
              <Section key={i} title={section.title} fields={section.fields} store={formStore} />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Job;
