import React, { Component } from "react";
import { withContext } from "../utils/withContext";

import ProgressBar from "./ProgressBar";
import Title from "./Controls/Title";
import Description from "./Controls/Description";
import Next from "./Controls/Next";
import Back from "./Controls/Back";
import Stop from "./Controls/Stop";
import Popup from "./Popup";

import "../css/DefaultPopup.css";

class DefaultPopup extends Component {
  state = {
    statusButtons: false
  };

  render() {
    const { statusButtons } = this.state;
    const { popupParams } = this.props.context;

    return (
      <Popup className="site-tutorial-control-panel">
        <div
          className="description"
          style={
            popupParams &&
            popupParams.height && { minHeight: popupParams.height }
          }
        >
          <Title id="title-site-tutorial" />
          <Description id="desctirption-site-tutorial" />
        </div>

        <Stop
          status={status => {
            if (statusButtons !== status)
              this.setState({ statusButtons: status });
          }}
        >
          <svg
            className={
              (statusButtons ? "" : "disable-buttons ") + "stop-site-tutorial"
            }
            width="24"
            height="24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              fill={(popupParams && popupParams.color) || "red"}
            />
          </svg>
        </Stop>

        <div className="nav">
          <div className="wrap-progress-bar">
            <ProgressBar showStep color={popupParams && popupParams.color} />
          </div>

          <div className="group-buttons">
            <Back
              className={
                (statusButtons ? "" : "disable-buttons ") + "prev-site-tutorial"
              }
            >
              back
            </Back>

            <Next
              className={
                (statusButtons ? "" : "disable-buttons ") + "next-site-tutorial"
              }
              style={popupParams && { backgroundColor: popupParams.color }}
            >
              next
            </Next>
          </div>
        </div>
      </Popup>
    );
  }
}

export default withContext(DefaultPopup);
