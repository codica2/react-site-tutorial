import React, { useContext, Component } from "react";
import { Context } from "../state/store";
import { addBlock } from "../state/actions";

class ContextTutorialBlock extends Component {
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

const TutorialBlock = ({ children, ...props }) => {
  const context = useContext(Context);

  return (
    <ContextTutorialBlock context={context} children={children} {...props} />
  );
};

export default TutorialBlock;
