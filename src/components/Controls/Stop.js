import React, { Component } from "react";
import { withContext } from "../../utils/withContext";

import { stopAnim, hideShowPopup } from "../../state/actions";

class ButtonStop extends Component {
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

export default withContext(ButtonStop);
