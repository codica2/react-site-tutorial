export const sortBlocks = blocks => blocks.sort((a, b) => a.step - b.step);

export const getCoords = elem => {
  var clientRect = elem.getBoundingClientRect();

  return {
    top: Math.round(clientRect.top + window.scrollY),
    left: Math.round(clientRect.left + window.scrollX)
  };
};

export const getHeightBody = () =>
  Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight,
    window.innerHeight
  );

export const getWidthBody = () =>
  Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.body.clientWidth,
    window.innerHeight
  );
