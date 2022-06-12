import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomComputer${Date.now()} {
        0% {top:-100px}
        25% {top:40px}
        50% {top:-100px}
        75% {top:40px}
        100% {top:0px}
    }`;

    return (
      <div className="player">
        <style>{keyframe}</style>
        <div className="box" style={{ position: "relative" }}>
          <img
            className="mt-4"
            width={150}
            height={150}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
            style={{
              position: "absolute",
              top: 0,
              left: 80,
              animation: `randomComputer${Date.now()} .5s `,
            }}
          />
        </div>
        <div className="speech-bubble "></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/playerComputer.png"
          alt="..."
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.gameReducer.computer,
  };
};
export default connect(mapStateToProps, null)(Computer);
