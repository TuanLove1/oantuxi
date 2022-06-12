import React, { Component } from "react";
import Computer from "./computer";
import InfoGame from "./infoGame";
import Player from "./player";

export default class GameOanTuXi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <InfoGame />
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
