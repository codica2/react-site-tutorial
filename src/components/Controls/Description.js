import React, { useContext } from "react";
import { Context } from "../../state/store";

const Description = ({ className, id }) => {
  const context = useContext(Context);
  const { blocks, numTutorial, step } = context.store;

  return (
    <p className={className} id={id}>
      {blocks[numTutorial] &&
        blocks[numTutorial][step] &&
        blocks[numTutorial][step].description}
    </p>
  );
};

export default Description;
