import React, { useContext, Component } from "react";
import { Context } from "../../state/store";

import { stopAnim, hideShowPopup } from "../../state/actions";

class ContextButtonStop extends Component {
  stopTutorial = () => {
    const {
      store: { isAnimated },
      dispatch
    } = this.props.context;

    if (!isAnimated) {
      stopAnim(false)(dispatch);
      hideShowPopup(false)(dispatch);
    }
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
        onClick={this.stopTutorial}
      >
        {children}
      </div>
    );
  }
}

const ButtonStop = ({
  className,
  id,
  style,
  children,
  resetButtonStyles,
  status
}) => {
  const context = useContext(Context);

  return (
    <ContextButtonStop
      context={context}
      className={className}
      id={id}
      style={style}
      children={children}
      status={status}
      resetButtonStyles={resetButtonStyles}
    />
  );
};

export default ButtonStop;
