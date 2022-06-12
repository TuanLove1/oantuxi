import { DAT_CUOC, END_GAME, RANDOM_COMPUTER } from "../../constant/game";

export const actDatCuoc = (index) => {
  return {
    type: DAT_CUOC,
    payload: index,
  };
};
export const actRandomComputer = () => {
  return {
    type: RANDOM_COMPUTER,
  };
};
export const actEndGame = () => {
  return {
    type: END_GAME,
  };
};
