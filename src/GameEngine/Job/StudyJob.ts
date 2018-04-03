import { Job } from "./Job";
import { Human } from "../People/Human";

export class Study extends Job {
  reward(human: Human) {
    human.professioness.value += 1;
  }
}
