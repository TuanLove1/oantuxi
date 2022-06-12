import React, { Component } from "react";
import { connect } from "react-redux";
import { actDatCuoc } from "../redux/action/game";

class Player extends Component {
  renderItem = () => {
    return this.props.arrDatCuoc.map((item, index) => {
      let border = {};
      if (item.datCuoc) {
        border = {
          border: "3px solid red",
        };
      }
      return (
        <div className="col-4" key={index}>
          <button
            style={border}
            className="btnItem"
            onClick={() => {
              this.props.datCuoc(item.ma);
            }}
          >
            <img width={35} height={35} src={item.hinhAnh} alt={item.hinhAnh} />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="player">
        <div className="box">
          <img
            className="mt-4"
            width={150}
            height={150}
            src={this.props.arrDatCuoc.find((item) => item.datCuoc).hinhAnh}
            alt={this.props.arrDatCuoc.find((item) => item.datCuoc).hinhAnh}
          />
        </div>
        <div className="speech-bubble "></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/player.png"
          alt="..."
        />
        <div className="row">{this.renderItem()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrDatCuoc: state.gameReducer.arrDatCuoc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (index) => {
      dispatch(actDatCuoc(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
