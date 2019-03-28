import { getCoords, getHeightBody, getWidthBody } from "../utils/helpers";

const frameRate = 0.06; // 60 FPS
const time = 1000;

const opacity = 0.7;
const padding = 10;
const offset = 10;

const startAnimation = (popup, canvas, div, nextDiv, isFirstDraw) =>
  new Promise(resolve => {
    const ctx = canvas.getContext("2d");

    const coordsDiv = getCoords(div);
    const coordsNextDiv = getCoords(nextDiv);

    let divWidth = div.offsetWidth;
    let divHeight = div.offsetHeight;
    let divY = coordsDiv.top;
    let divX = coordsDiv.left;

    let nextDivWidth = nextDiv.offsetWidth;
    let nextDivHeight = nextDiv.offsetHeight;
    let nextDivY = coordsNextDiv.top;
    let nextDivX = coordsNextDiv.left;

    if (isFirstDraw) {
      nextDivWidth = divWidth;
      nextDivHeight = divHeight;
      nextDivY = divY;
      nextDivX = divX;

      window.scroll(0, divY - window.innerHeight / 2 + divHeight / 2);
    }

    let isFinish = false;
    let isFinishPopup = false;
    let isHidePopup = false;

    let frame = 0;
    let framePopup = 0;

    const delta = (start, finish) => (finish - start) / time / frameRate;

    const updateDiv = () => {
      frame++;

      divX = divX + delta(divX, nextDivX) * frame;
      divY = divY + delta(divY, nextDivY) * frame;
      divWidth = divWidth + delta(divWidth, nextDivWidth) * frame;
      divHeight = divHeight + delta(divHeight, nextDivHeight) * frame;

      // scroll

      if (
        divY + nextDivHeight / 2 >
          window.pageYOffset + window.innerHeight / 2 ||
        divY !== nextDivY
      ) {
        window.scrollTo(
          0,
          Math.round(divY - window.innerHeight / 2 + divHeight / 2)
        );
      }

      if (isFinish && isFinishPopup) {
        frame = 0;

        return {
          divWidth: nextDivWidth,
          divHeight: nextDivHeight,
          divX: nextDivX,
          divY: nextDivY,
          isFinishPosition: true
        };
      }

      return {
        divWidth: Math.round(divWidth),
        divHeight: Math.round(divHeight),
        divX: Math.round(divX),
        divY: Math.round(divY)
      };
    };

    const draw = ({ divX, divY, divHeight, divWidth }) => {
      canvas.height = getHeightBody();
      canvas.width = getWidthBody();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // letf rectangle
      ctx.fillStyle = `rgba(0,0,0, ${opacity})`;
      ctx.fillRect(
        0,
        0,
        Math.max(0, divX - padding),
        Math.max(0, canvas.height)
      );

      // top rectangle
      ctx.fillStyle = `rgba(0,0,0, ${opacity})`;
      ctx.fillRect(
        Math.max(0, divX - padding < 0 ? 0 : divX - padding),
        0,
        Math.max(0, canvas.width),
        Math.max(0, divY - padding)
      );

      // right rectangle
      ctx.fillStyle = `rgba(0,0,0, ${opacity})`;
      ctx.fillRect(
        Math.max(0, divX + divWidth + padding),
        Math.max(0, divY - padding),
        Math.max(0, canvas.width - divX - padding),
        Math.max(0, canvas.height)
      );

      // bottom rectangle
      ctx.fillStyle = `rgba(0,0,0, ${opacity})`;
      ctx.fillRect(
        divX - padding,
        Math.max(0, divY + divHeight + padding),
        Math.max(0, divWidth + padding * 2),
        Math.max(0, canvas.height)
      );

      animatePopup();
    };

    const initPositionPopup = () => {
      let x =
        nextDivX -
        offset +
        (nextDivWidth + padding * 2) / 2 -
        popup.offsetWidth / 2;
      let y = nextDivY + nextDivHeight + offset * 2;

      isFinishPopup = true;

      popup.style.left = x + "px";
      popup.style.top = y + "px";
    };

    const animatePopup = () => {
      framePopup++;

      const pW = popup.offsetWidth;
      const pH = popup.offsetHeight;
      const windowW = window.innerWidth;
      const windowH = window.innerHeight;
      const marginOfDiv = 10;
      const style = popup.style;

      let y = popup.offsetTop;
      let x = popup.offsetLeft;

      let finishX =
        nextDivX - offset + (nextDivWidth + padding * 2) / 2 - pW / 2;
      let finishY = nextDivY + nextDivHeight + offset * 2;

      const topPos = nextDivY - pH - offset;
      const bottomPos = nextDivY + nextDivHeight + offset + padding + pH;
      const leftPos = nextDivX - pW - offset - padding;
      const rightPos = nextDivX + nextDivWidth + pW + offset + padding;
      const finScroll = Math.max(
        0,
        Math.floor(nextDivY - window.innerHeight / 2 + nextDivHeight / 2)
      );

      if (finishX - marginOfDiv < 0) {
        setPositionPopup(x, marginOfDiv, y, finishY);
      } else if (finishX + pW > windowW) {
        setPositionPopup(x, windowW - pW - marginOfDiv, y, finishY);
      } else {
        setPositionPopup(x, finishX, y, finishY);
      }

      function setPositionPopup(startX, finishX, startY, finishY) {
        let centerHeightDiv = nextDivY + nextDivHeight / 2 - pH / 2;
        const heightBody = getHeightBody();

        if (bottomPos > heightBody && topPos > 0) {
          finishY = nextDivY - pH - offset - padding;
        } else if (
          topPos < nextDivY &&
          bottomPos > windowH + finScroll &&
          rightPos < windowW &&
          topPos > 0
        ) {
          finishY = centerHeightDiv;
          finishX = nextDivX + nextDivWidth + offset + padding;
        } else if (
          topPos < nextDivY &&
          bottomPos > windowH + finScroll &&
          leftPos < 0
        ) {
          finishY = centerHeightDiv;
          finishX = nextDivX - pW - padding - leftPos;
          isHidePopup = true;

          if (rightPos < windowW) {
            finishX = nextDivX + nextDivWidth + padding + offset;
            isHidePopup = false;
          }

          if (finishY < 0) {
            finishY = padding;
          }

          if (finishY + pH > heightBody) {
            finishY = heightBody - pH - padding - offset;
          }
        } else if (topPos < nextDivY && bottomPos > windowH + finScroll) {
          finishY = centerHeightDiv;
          finishX = nextDivX - pW - offset - padding;
        }

        x = isFirstDraw ? finishX : x + delta(startX, finishX) * framePopup;
        y = isFirstDraw ? finishY : y + delta(startY, finishY) * framePopup;

        if (y === finishY && x === finishX) {
          framePopup = 0;
          isFinishPopup = true;
        }

        style.left = x + "px";
        style.top = y + "px";
      }
    };

    const loop = () => {
      const updatedDiv = updateDiv();
      const { divX, divY, divWidth, divHeight } = updatedDiv;

      if (!updatedDiv.isFinishPosition) {
        requestAnimationFrame(loop);
      } else {
        resolve({ isHidePopup });
      }

      isFinish =
        divX === nextDivX &&
        divY === nextDivY &&
        divWidth === nextDivWidth &&
        divHeight === nextDivHeight;

      draw(updatedDiv);
    };

    loop();
  });

export default startAnimation;
