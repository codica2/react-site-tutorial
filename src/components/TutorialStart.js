import React, { Component } from "react";
import { withContext } from "../utils/withContext";
import { startAnim } from "../state/actions";
import * as errors from "../utils/errors";

class TutorialStart extends Component {
  startTutorial = () => {
    const {
      context: {
        dispatch,
        store: { blocks }
      },
      numTutorial
    } = this.props;

    if (blocks[numTutorial] && blocks[numTutorial].length > 1) {
      startAnim({
        isStartTutorial: true,
        blocks,
        numTutorial
      })(dispatch);
    } else {
      console.warn(errors.LENGTH_BLOCKS_LESS_THAN_1);
    }
  };

  render() {
    return <button onClick={this.startTutorial}>{this.props.children}</button>;
  }
}

export default withContext(TutorialStart);
