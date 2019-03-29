import React from "react";
import { Context } from "../state/store";

export const withContext = Component => props => (
  <Context.Consumer>
    {state => <Component context={state} {...props} />}
  </Context.Consumer>
);
