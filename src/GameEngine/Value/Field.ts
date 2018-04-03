import { observable } from "mobx";

export class Field {
  constructor(value: number) {
    this.value = value;
  }
  @observable value: number = 0;
}
