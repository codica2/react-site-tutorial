import React from "react";

import SiteTutorial from "react-site-tutorial";

import Blocks from "./Blocks";

const App = () => (
  <SiteTutorial defaultPopupParams={{ color: "#3065ED" }}>
    <Blocks />
  </SiteTutorial>
);

export default App;
