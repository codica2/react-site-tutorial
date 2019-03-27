import React, { useContext, Component } from "react";
import { Context } from "../state/store";

import { setPopup } from "../state/actions";

const hideOpacity = 0.6;

class ContextPopup extends Component {
  state = {
    style: {
      display: "none",
      position: "absolute",
      zIndex: 5001
    }
  };

  componentDidMount() {
    const { dispatch } = this.props.context;

    setPopup({ popup: this.popup })(dispatch);
  }

  componentWillReceiveProps(nextProps) {
    const { isStartTutorial, isHidePopup } = nextProps.context.store;
    const { style } = this.state;

    let newStyle = { ...style };

    if (isStartTutorial) {
      newStyle = { ...newStyle, display: "block", transition: "" };
    } else {
      newStyle = { ...newStyle, display: "none", transition: "" };
    }

    if (isHidePopup) {
      newStyle = { ...newStyle, opacity: hideOpacity, transition: "300ms" };
    }

    this.setState({ style: newStyle });
  }

  showPopup = () => {
    const { style } = this.state;

    this.setState({
      style: { ...style, opacity: 1 }
    });
  };

  hidePopup = () => {
    const { style } = this.state;

    this.setState({
      style: { ...style, opacity: hideOpacity }
    });
  };

  render() {
    const { style } = this.state;
    const {
      className,
      id,
      context: {
        store: { isHidePopup },
        popupParams
      },
      children
    } = this.props;

    let newStyle = {
      ...style,
      width: popupParams.width
    };

    return (
      <div
        className={className}
        id={id}
        ref={ref => (this.popup = ref)}
        style={popupParams ? newStyle : style}
        onMouseMove={() => {
          isHidePopup && this.showPopup();
        }}
        onMouseLeave={() => {
          isHidePopup && this.hidePopup();
        }}
      >
        {children}
      </div>
    );
  }
}

const Popup = ({ children, className, id }) => {
  const context = useContext(Context);

  return (
    <ContextPopup
      context={context}
      children={children}
      className={className}
      id={id}
    />
  );
};

export default Popup;
