import * as types from "./types";
import { sortBlocks } from "../utils/helpers";

export const addBlock = ({ numTutorial, ...params }) => dispatch => {
  dispatch({
    type: types.ADD_BLOCK,
    payload: {
      block: {
        ...params
      },
      numTutorial
    }
  });
};

export const startAnim = ({
  isStartTutorial,
  blocks,
  numTutorial
}) => dispatch => {
  dispatch({
    type: types.START_TUTORIAL,
    payload: {
      isStartTutorial,
      blocks: { ...blocks, [numTutorial]: sortBlocks(blocks[numTutorial]) },
      numTutorial
    }
  });
};

export const stopAnim = isStartTutorial => dispatch => {
  dispatch({
    type: types.STOP_TUTORIAL,
    isStartTutorial
  });
};

export const setPopup = ({ hasPopup, popup }) => dispatch => {
  dispatch({ type: types.SET_POPUP, payload: { hasPopup, popup } });
};

export const animateStep = step => dispatch => {
  dispatch({ type: types.UPDATE_STEP, step });
};

export const setАnimation = isAnimated => dispatch => {
  dispatch({ type: types.SET_CHECK_ANIMATED, isAnimated });
};

export const resetStep = dispatch => {
  dispatch({ type: types.RESET_STEP, step: 0 });
};

export const hideShowPopup = isHidePopup => dispatch => {
  dispatch({ type: types.HIDE_SHOW_POPUP, isHidePopup });
};
