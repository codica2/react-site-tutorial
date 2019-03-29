import React, { Component } from "react";
import { withContext } from "../../utils/withContext";

import { animateStep, hideShowPopup } from "../../state/actions";

class ButtonNext extends Component {
  stepForward = () => {
    const {
      store: { blocks, numTutorial, step, isAnimated },
      dispatch
    } = this.props.context;

    let nextStep = step + 1;

    if (nextStep > blocks[numTutorial].length - 1) {
      nextStep = blocks[numTutorial].length - 1;
    }

    if (!isAnimated) {
      animateStep(nextStep)(dispatch);
    }

    hideShowPopup(false)(dispatch);
  };

  render() {
    const { className, id, style, children, status } = this.props;

    const { isAnimated } = this.props.context.store;
    status && status(!isAnimated);

    return (
      <div
        id={id}
        className={className}
        style={style}
        onClick={this.stepForward}
      >
        {children}
      </div>
    );
  }
}

export default withContext(ButtonNext);
