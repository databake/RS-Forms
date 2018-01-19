import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { observer, inject } from 'mobx-react';

import Section from '../components/Section';

@inject('formStore')
@observer
class Job extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.item.job_type} | ${navigation.state.params.item.job_num}`,
  });
  render() {
    console.log(this.props);
    const { formStore } = this.props;
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
