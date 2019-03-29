import React from "react";

import { TutorialBlock, TutorialStart } from "react-site-tutorial";

import "../css/test.css";

const Blocks = () => (
  <div>
    <div className="button-wrap">
      <TutorialStart numTutorial={1}>FIRST TEST</TutorialStart>
    </div>

    <div className="first-test">
      <TutorialBlock title="Title 1" text="Text" numTutorial={1} step={1}>
        <div className="tutorial div1" />
      </TutorialBlock>

      <TutorialBlock title="Title 2" text="Text" numTutorial={1} step={2}>
        <div className="tutorial div2" />
      </TutorialBlock>

      <TutorialBlock title="Title 3" text="Text" numTutorial={1} step={3}>
        <div className="tutorial div3" />
      </TutorialBlock>
    </div>

    <div className="button-wrap">
      <TutorialStart numTutorial={2}>SECOND TEST</TutorialStart>
    </div>

    <div className="second-test">
      <TutorialBlock title="Title 4" text="Text" numTutorial={2} step={1}>
        <div className="tutorial div4" />
      </TutorialBlock>

      <TutorialBlock title="Title 5" text="Text" numTutorial={2} step={2}>
        <div className="tutorial div6" />
      </TutorialBlock>

      <TutorialBlock title="Title 6" text="Text" numTutorial={2} step={3}>
        <div className="tutorial div5" />
      </TutorialBlock>

      <TutorialBlock title="Title 7" text="Text" numTutorial={2} step={4}>
        <div className="tutorial div7" />
      </TutorialBlock>

      <TutorialBlock title="Title 8" text="Text" numTutorial={2} step={5}>
        <div className="tutorial div8" />
      </TutorialBlock>

      <TutorialBlock title="Title 9" text="Text" numTutorial={2} step={6}>
        <div className="tutorial div7" />
      </TutorialBlock>

      <TutorialBlock title="Title 10" text="Text" numTutorial={2} step={7}>
        <div className="tutorial div9" />
      </TutorialBlock>
    </div>
  </div>
);

export default Blocks;
