import { DAT_CUOC, END_GAME, RANDOM_COMPUTER } from "../../constant/game";

const initialState = {
  ketQua: "Chơi game nào!!!!!!",
  soBanThang: 0,
  soBanChoi: 0,
  arrDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/keo.png",
      datCuoc: true,
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao.png",
      datCuoc: false,
    },
  ],
  computer: {
    ma: "bao",
    hinhAnh: "./img/bao.png",
  },
};
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_CUOC:
      let arrDatCuocNew = [...state.arrDatCuoc];
      arrDatCuocNew.map((item) => {
        item.ma === action.payload
          ? (item.datCuoc = true)
          : (item.datCuoc = false);
      });
      state.arrDatCuoc = arrDatCuocNew;
      return { ...state };
    case RANDOM_COMPUTER:
      let index = Math.floor(Math.random() * 3);
      let random = state.arrDatCuoc[index];
      state.computer = random;
      return { ...state };
    case END_GAME:
      let ketQua = "";
      state.soBanChoi++;
      let player = state.arrDatCuoc.find((item) => item.datCuoc);
      switch (player.ma) {
        case "keo":
          if (state.computer.ma === "keo") {
            ketQua = "Ngang tài ngang sức :))";
          } else if (state.computer.ma === "bao") {
            ketQua = "Trăm trận trăm thắng!!";
            state.soBanThang++;
          } else {
            ketQua = "Làm lại nào";
          }
          break;
        case "bua":
          if (state.computer.ma === "bao") {
            ketQua = "Bạn thua";
          } else if (state.computer.ma === "bua") {
            ketQua = "Hòa";
          } else {
            ketQua = "Bạn thắng";
            state.soBanThang++;
          }
          break;
        case "bao":
          if (state.computer.ma === "bua") {
            ketQua = "Bạn thắng";
            state.soBanThang++;
          } else if (state.computer.ma === "bao") {
            ketQua = "Hòa";
          } else {
            ketQua = "Bạn thua";
          }
          break;
        default:
          ketQua = "Chơi game nào";
          break;
      }
      state.ketQua = ketQua;

      return { ...state };
    default:
      return { ...state };
  }
};
export default gameReducer;
