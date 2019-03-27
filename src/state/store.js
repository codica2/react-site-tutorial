import React from "react";
import createReducer from "../utils/createReducer";
import * as types from "./types";

export const initialState = {
  blocks: {},
  isAnimated: true,
  step: 0
};

export const Context = React.createContext();

export const reducer = createReducer(initialState)({
  [types.ADD_BLOCK]: (state, { payload: { block, numTutorial } }) => ({
    ...state,
    blocks: {
      ...state.blocks,
      [numTutorial]: [...(state.blocks[numTutorial] || []), block]
    }
  }),
  [types.START_TUTORIAL]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [types.STOP_TUTORIAL]: (state, { isStartTutorial }) => ({
    ...state,
    isStartTutorial
  }),
  [types.SET_POPUP]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [types.UPDATE_STEP]: (state, { step }) => ({
    ...state,
    step
  }),
  [types.SET_CHECK_ANIMATED]: (state, { isAnimated }) => ({
    ...state,
    isAnimated
  }),
  [types.RESET_STEP]: (state, { step }) => ({
    ...state,
    step
  }),
  [types.HIDE_SHOW_POPUP]: (state, { isHidePopup }) => ({
    ...state,
    isHidePopup
  })
});
