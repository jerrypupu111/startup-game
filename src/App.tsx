import * as React from "react";
import "./App.css";
import { GameLoop } from "./GameEngine/GameLoop";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  gameLoop = new GameLoop();
  componentWillMount() {
    this.gameLoop.start();
  }

  render() {
    return (
      <div className="App">
        {this.gameLoop.humans.map(human => {
          return (
            <div key={human.id}>
              <button
                onClick={() => {
                  human.click();
                }}
              >
                {human.name}
              </button>
              <p>{human.id}</p>
              <p>能量：{human.energy.value}</p>
              <p>創意：{human.professioness.value}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
