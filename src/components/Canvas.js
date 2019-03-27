import React, { useContext, Component } from "react";
import { Context } from "../state/store";
import { setАnimation, resetStep, hideShowPopup } from "../state/actions";
import * as errors from "../utils/errors";

import startAnimation from "../js/animation";

import { getHeightBody } from "../utils/helpers";

import "../css/Canvas.css";

class ContextCanvas extends Component {
  state = {
    style: {},
    firstDraw: true
  };

  componentDidMount() {
    this.setInitStyle();
  }

  componentWillReceiveProps(nextProp) {
    const {
      context: {
        store: {
          isStartTutorial,
          blocks,
          popup,
          step,
          numTutorial,
          isAnimated
        },
        dispatch
      }
    } = nextProp;

    if (!popup) {
      console.error(errors.DOES_NOT_HAVE_POPUP);
      return;
    }

    // fist draw
    if (isStartTutorial && this.state.firstDraw) {
      document.body.style.overflow = "hidden";

      this.showCanvas();

      let isFirstDraw = true;

      startAnimation(
        popup,
        this.canvas,
        blocks[numTutorial][step].node,
        blocks[numTutorial][step + 1].node,
        isFirstDraw
      ).then(({ isHidePopup }) => {
        this.finishAnimation(isHidePopup);
      });

      this.setState({ firstDraw: false });
    }

    // step forward
    if (step > this.props.context.store.step) {
      setАnimation(true)(dispatch);

      startAnimation(
        popup,
        this.canvas,
        blocks[numTutorial][step - 1].node,
        blocks[numTutorial][step].node
      ).then(({ isHidePopup }) => {
        this.finishAnimation(isHidePopup);
      });
    }

    // step back
    if (step < this.props.context.store.step && isStartTutorial) {
      setАnimation(true)(dispatch);

      startAnimation(
        popup,
        this.canvas,
        blocks[numTutorial][step + 1].node,
        blocks[numTutorial][step].node
      ).then(({ isHidePopup }) => {
        this.finishAnimation(isHidePopup);
      });
    }

    // stop
    if (!isAnimated && isStartTutorial === false && !this.state.firstDraw) {
      this.setInitStyle();

      resetStep(dispatch);

      this.setState({ firstDraw: true });
    }
  }

  finishAnimation = isHidePopup => {
    const {
      context: {
        store: { blocks, step, numTutorial },
        dispatch
      }
    } = this.props;

    hideShowPopup(isHidePopup)(dispatch);

    if (blocks[numTutorial][step].onFinish) {
      blocks[numTutorial][step].onFinish();
    }

    if (blocks[numTutorial][step].onAsyncFinish) {
      new Promise(resolve => {
        blocks[numTutorial][step].onAsyncFinish(resolve);
      }).then(() => {
        setАnimation(false)(dispatch);
      });
    } else {
      setАnimation(false)(dispatch);
    }
  };

  showCanvas = () => {
    this.setState({
      style: {
        ...this.state.style,
        display: "block"
      }
    });
  };

  setInitStyle = () => {
    const body = getHeightBody();

    this.setState({
      style: {
        width: `${body.width}px`,
        height: `${body.height}px`,
        display: "none"
      }
    });

    document.body.style.overflow = "auto";
  };

  render() {
    const { style } = this.state;

    return (
      <canvas
        className="canvas-site-tutorial"
        ref={ref => (this.canvas = ref)}
        style={style}
      />
    );
  }
}

const Canvas = () => {
  const context = useContext(Context);

  return <ContextCanvas context={context} />;
};

export default Canvas;
