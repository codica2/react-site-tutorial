import React, { useContext, Component } from "react";
import { Context } from "../../state/store";

import { animateStep, hideShowPopup } from "../../state/actions";

class ContextButtonBack extends Component {
  stepBack = () => {
    const { store, dispatch } = this.props.context;

    let step = store.step - 1;

    if (step < 0) {
      step = 0;
    }

    if (!store.isAnimated) {
      animateStep(step)(dispatch);
    }

    hideShowPopup(false)(dispatch);
  };

  render() {
    const { className, id, style, children, status } = this.props;

    const { isAnimated } = this.props.context.store;
    status && status(!isAnimated);

    return (
      <div id={id} className={className} style={style} onClick={this.stepBack}>
        {children}
      </div>
    );
  }
}

const ButtonBack = ({ className, id, style, children, status }) => {
  const context = useContext(Context);

  return (
    <ContextButtonBack
      context={context}
      className={className}
      id={id}
      style={style}
      status={status}
      children={children}
    />
  );
};

export default ButtonBack;
