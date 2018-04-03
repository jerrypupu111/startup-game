import { Field } from "../Value/Field";
import { Job } from "../Job/Job";
export class Human {
  constructor(job: Job) {
    this.assginJob(job);
  }
  id: number;
  name: string = "人";
  professioness = new Field(0);
  productivity = 1;
  creativity = new Field(0);
  energy = new Field(100);

  //
  currentJob: Job;
  assginJob(job: Job) {
    this.currentJob = job;
  }
  turn() {
    this.currentJob.consume(this.energy, this);
    this.recover();
  }
  click() {
    this.currentJob.reward(this);
  }
  recover() {
    this.energy.value++;
  }
}
