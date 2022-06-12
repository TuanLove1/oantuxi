import React, { Component } from "react";
import { connect } from "react-redux";
import { actEndGame, actRandomComputer } from "../redux/action/game";

class InfoGame extends Component {
  render() {
    return (
      <div>
        <h1 className="text-success">{this.props.ketQua}</h1>
        <h2 className="text-info">
          Số bàn thắng:{" "}
          <span className="text-danger">{this.props.soBanThang}</span>
        </h2>
        <h2 className="text-info">
          Số bàn chơi:{" "}
          <span className="text-danger">{this.props.soBanChoi}</span>
        </h2>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.randomComputer();
          }}
        >
          Play Game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.gameReducer.ketQua,
    soBanThang: state.gameReducer.soBanThang,
    soBanChoi: state.gameReducer.soBanChoi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    randomComputer: () => {
      let count = 0;
      let random = setInterval(() => {
        dispatch(actRandomComputer());
        count++;
        if (count > 10) {
          clearInterval(random);
          dispatch(actEndGame());
        }
      }, 300);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoGame);
