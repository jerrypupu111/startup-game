import { Human } from "../People/Human";
import { Field } from "../Value/Field";

// interface JobInterface {}
export class Job {
  constructor(cost?: number, enhance?: number) {
    // this.cost = cost;
    // this.enhance = enhance;
  }
  cost: number = 2;
  enhance: number = 1;
  consume(field: Field, human: Human) {
    if (field.value > 0) field.value -= this.cost;
    this.reward(human);
  }
  reward(human: Human) {}
}
