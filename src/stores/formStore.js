import { observable, action } from 'mobx';
import MockTemplate from '../../data/MockTemplate.json';
import SectionModel from './SectionModel';

export default class ObservableFormStore {
  @observable sections = [];

  constructor() {
    MockTemplate.map(section => {
      this.sections.push(new SectionModel({ ...section }));
    });
  }

  @action
  update(fieldId, value) {
    this.sections.map(section => {
      section.fields.map(field => {
        if (field.id === fieldId) {
          field.value = value;
        }
      });
    });
  }
}
