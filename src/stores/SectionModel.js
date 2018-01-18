import { observable } from 'mobx';
import FieldModel from './FieldModel';

export default class SectionModel {
  @observable title;
  @observable fields = [];

  constructor({ ...props  }) {
    this.title = props.title;
    this.fields = props.fields.map(field => {
      return new FieldModel(field);
    });
  }
}
