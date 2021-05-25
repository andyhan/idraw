import { getData } from "./data.js";
import { drawData } from './draw.js';
import { getScale } from './scale.js';
import opts from './opts.js'

function isPointInElement(board, p = {x, y}) {
  const ctx = board.getContext();
  const data = getData();
  let idx = -1;
  for (let i = data.elements.length - 1; i >= 0; i--) {
    const ele = data.elements[i];
    ctx.beginPath();
    ctx.lineTo(ele.x, ele.y);
    ctx.lineTo(ele.x + ele.w, ele.y);
    ctx.lineTo(ele.x + ele.w, ele.y + ele.h);
    ctx.lineTo(ele.x, ele.y + ele.h);
    ctx.closePath();
    
    if (ctx.isPointInPath(p.x, p.y)) {
      idx = i;
      break;
    }
  }
  return idx;
}

function moveElement(board, idx, moveX, moveY) {
  const data = getData();
  const scale = getScale();
  if (data.elements[idx]) {
    // data.elements[idx].x += (moveX * scale * opts.devicePixelRatio);
    // data.elements[idx].y += (moveY * scale * opts.devicePixelRatio);
    data.elements[idx].x += (moveX / scale);
    data.elements[idx].y += (moveY / scale);
  }
  drawData(board)
}

export {
  isPointInElement,
  moveElement,
}