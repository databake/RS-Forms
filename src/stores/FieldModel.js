import { observable } from 'mobx';

export default class FieldModel {
  type;
  title;
  id;
  rightIcon;
  required = true;
  @observable value;
  noValueText;
  options = [];

  constructor({ ...props }) {
    this.type = props.type;
    this.title = props.title;
    this.id = props.id;
    this.rightIcon = props.rightIcon;
    this.required = props.required;
    this.value = props.value;
    this.noValueText = props.novaluetext;
    this.options = props.options;
  }
}
