import React, { useContext, Component, Fragment } from "react";
import { Context } from "../state/store";

import "../css/ProgressBar.css";

class ContextProgressBar extends Component {
  render() {
    const {
      context: {
        store: { step, blocks, numTutorial }
      },
      color,
      showStep
    } = this.props;

    return (
      <div className="site-tutorial_progress-bar">
        {blocks[numTutorial] &&
          blocks[numTutorial].map((block, index) => {
            const dot = (
              <div
                key={index + "dot"}
                className="site-tutorial_progress-bar__dot"
                style={{
                  backgroundColor: index <= step ? color || "red" : "",
                  borderColor: color || "red"
                }}
              />
            );

            const line = (
              <div
                key={index + "line"}
                className="site-tutorial_progress-bar__line"
                style={{
                  backgroundColor: color || "red"
                }}
              />
            );

            if (index !== blocks[numTutorial].length - 1) {
              return (
                <Fragment key={index + "key"}>
                  {dot}
                  {line}
                </Fragment>
              );
            }

            return dot;
          })}

        {showStep && (
          <div
            className="site-tutorial_progress-bar__counter-step"
            style={{ backgroundColor: color || "red" }}
          >
            {step + 1} / {blocks[numTutorial] && blocks[numTutorial].length}
          </div>
        )}
      </div>
    );
  }
}

const ProgressBar = ({ ...props }) => {
  const context = useContext(Context);

  return <ContextProgressBar context={context} {...props} />;
};

export default ProgressBar;
