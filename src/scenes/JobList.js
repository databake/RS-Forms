//@flow

import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MockJobs from '../../data/MockJobs.json';
import JobListItem from '../components/JobListItem';

class JobList extends Component {
  state = { selected: (new Map(): Map<string, boolean>) };

  _keyExtractor = (item, index) => item.job_num;

  _onPressItem = item => {
    const { job_num } = item;
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(job_num, !selected.get(job_num)); // toggle
      //   return { selected }
    });
    Actions.job({ item });
  };

  _renderItem = ({ item }) => (
    <JobListItem
      id={item.job_num}
      onPressItem={() => this._onPressItem(item)}
      selected={!!this.state.selected.get(item.job_num)}
      name={item.name}
      job_type={item.job_type}
      make={item.make}
      model={item.model}
      company={item.company}
      address1={item.address1}
      postcode={item.postcode}
    />
  );

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={MockJobs}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default JobList;
