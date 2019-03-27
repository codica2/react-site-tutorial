import React from "react";

import SiteTutorial, {
  TutorialBlock,
  TutorialStart,
  TutorialPopup,
  TutorialNext,
  TutorialBack,
  TutorialStop,
  TutorialProgressBar,
  TutorialDescription,
  TutorialTitle
} from "react-site-tutorial";

const App = () => (
  <SiteTutorial defaultPopupParams={{ color: "#3065ED" }}>
    <TutorialBlock numTutorial={2} step={1}>
      <div style={{ width: "500px", height: "200px" }}>SOME BLOCK</div>
    </TutorialBlock>

    <TutorialBlock
      numTutorial={2}
      step={2}
      title="First step"
      description="This is description."
    >
      <div style={{ width: "1600px", height: "800px", marginLeft: "100px" }}>
        SOME BLOCK
      </div>
    </TutorialBlock>

    <TutorialBlock
      onFinish={() => {
        console.log("This is callback too!");
      }}
      numTutorial={1}
      step={2}
      title="First step"
      description="This is description."
    >
      <div style={{ width: "200px", height: "700px", marginLeft: "1200px" }}>
        SOME BLOCK
      </div>
    </TutorialBlock>

    <TutorialBlock numTutorial={2} step={3}>
      <div
        style={{
          width: "400px",
          height: "200px",
          marginLeft: "400px",
          marginTop: "200px"
        }}
      >
        SOME BLOCK
      </div>
    </TutorialBlock>

    <TutorialBlock
      onFinish={() => {
        console.log("callback");
      }}
      onAsyncFinish={enebleControls => {
        setTimeout(() => {
          console.log("asyncCallback");
          enebleControls();
        }, 3000);
      }}
      numTutorial={1}
      step={1}
    >
      <div
        style={{
          width: "400px",
          height: "200px",
          marginLeft: "400px",
          marginTop: "200px"
        }}
      >
        SOME BLOCK
      </div>
    </TutorialBlock>

    <TutorialStart numTutorial={1}>START TUTORIAL 1</TutorialStart>
    <TutorialStart numTutorial={2}>START TUTORIAL 2</TutorialStart>

    {/* <TutorialPopup>
  <div>THIS IS POPUP</div>
  <TutorialTitle />
  <TutorialDescription />
  <TutorialNext>Next</TutorialNext>
  <TutorialBack>Prev</TutorialBack>
  <TutorialStop>Stop</TutorialStop>
  <TutorialProgressBar />
</TutorialPopup> */}
  </SiteTutorial>
);

export default App;
