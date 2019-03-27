import React, { useContext } from "react";
import { Context } from "../../state/store";

const Title = ({ className, id }) => {
  const context = useContext(Context);
  const { blocks, numTutorial, step } = context.store;

  return (
    <h1 className={className} id={id}>
      {blocks[numTutorial] &&
        blocks[numTutorial][step] &&
        blocks[numTutorial][step].title}
    </h1>
  );
};

export default Title;
