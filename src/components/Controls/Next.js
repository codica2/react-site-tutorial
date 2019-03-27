import React, { useContext, Component } from "react";
import { Context } from "../../state/store";

import { animateStep, hideShowPopup } from "../../state/actions";

class ContextButtonNext extends Component {
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

const ButtonNext = ({ className, id, style, children, status }) => {
  const context = useContext(Context);

  return (
    <ContextButtonNext
      context={context}
      className={className}
      id={id}
      style={style}
      children={children}
      status={status}
    />
  );
};

export default ButtonNext;
