import React, { Component } from "react";
import { withContext } from "../utils/withContext";
import { addBlock } from "../state/actions";

class TutorialBlock extends Component {
  componentDidMount() {
    const {
      context: { dispatch },
      title,
      description,
      step,
      numTutorial,
      onFinish,
      onAsyncFinish
    } = this.props;

    addBlock({
      node: this.ref,
      step,
      title,
      description,
      numTutorial,
      onFinish,
      onAsyncFinish
    })(dispatch);
  }

  render() {
    const child = React.Children.only(this.props.children);

    return React.cloneElement(child, { ref: el => (this.ref = el) });
  }
}

export default withContext(TutorialBlock);
