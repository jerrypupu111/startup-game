import { Human } from "./People/Human";
import { Job } from "./Job/Job";
import { Study } from "./Job/StudyJob";

export class GameLoop {
  humans: Human[];
  jobs: Job[];
  start() {
    this.jobs = [new Study()];
    this.humans = [new Human(this.jobs[0])];
    setInterval(this.update, 100);
  }
  update = () => {
    this.humans.forEach(human => {
      human.turn();
    });
  };
}
