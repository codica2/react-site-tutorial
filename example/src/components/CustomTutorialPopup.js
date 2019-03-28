import React from "react";

import {
  TutorialPopup,
  TutorialNext,
  TutorialBack,
  TutorialStop,
  TutorialProgressBar,
  TutorialDescription,
  TutorialTitle
} from "react-site-tutorial";

const CustomTutorialPopup = () => (
  <TutorialPopup>
    <div>THIS IS POPUP</div>
    <TutorialTitle />
    <TutorialDescription />
    <TutorialNext>Next</TutorialNext>
    <TutorialBack>Prev</TutorialBack>
    <TutorialStop>Stop</TutorialStop>
    <TutorialProgressBar />
  </TutorialPopup>
);

export default CustomTutorialPopup;
