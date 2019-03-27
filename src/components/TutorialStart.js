import React, { useContext, Component } from "react";
import { Context } from "../state/store";
import { startAnim } from "../state/actions";
import * as errors from "../utils/errors";

class ContextTutorialStart extends Component {
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

const TutorialStart = ({ children, numTutorial }) => {
  const context = useContext(Context);

  return (
    <ContextTutorialStart
      context={context}
      children={children}
      numTutorial={numTutorial}
    />
  );
};

export default TutorialStart;
