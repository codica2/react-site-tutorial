import React, { useReducer } from "react";
import { Context, initialState, reducer } from "../state/store";

import Canvas from "./Canvas";
import DefaultPopup from "./DefaultPopup";

const SiteTutorial = ({
  children,
  defaultPopupParams: popupParams,
  customPopup
}) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch, popupParams }}>
      {children}
      <Canvas />

      {!customPopup && <DefaultPopup />}
    </Context.Provider>
  );
};

export default SiteTutorial;
