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
    const { formStore } = this.props;
    const { sections } = formStore;
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View>
          {sections.map((section, i) => {
            return (
              <Section
                key={i}
                title={section.title}
                fields={section.fields}
                job_num={this.props.navigation.state.params.item.job_num}
                store={formStore}
                navigation={this.props.navigation} // unsure about this, might be better to delegate
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Job;
