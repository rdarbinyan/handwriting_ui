import {CANVAS_BG_COLOR, CANVAS_HEIGHT, CANVAS_LINE_COLOR, CANVAS_LINE_WIDTH, CANVAS_WIDTH} from "./constants";

export const createElements = () => {
    const rootEl = document.getElementById('root');

    const canvasEl = document.createElement("canvas");
    canvasEl.setAttribute("width", `${CANVAS_WIDTH}`);
    canvasEl.setAttribute("height", `${CANVAS_HEIGHT}`);
    canvasEl.setAttribute("id", 'canvas');
    canvasEl.style.backgroundColor = CANVAS_BG_COLOR;
    let ctx = canvasEl.getContext("2d");
    ctx.strokeStyle = CANVAS_LINE_COLOR;
    ctx.lineJoin = 'round';
    ctx.lineWidth = CANVAS_LINE_WIDTH;
    rootEl.appendChild(canvasEl);

    const resultBoxEl = document.createElement('div');
    resultBoxEl.setAttribute('id', 'result_box');
    const inputImgEl = document.createElement('img');
    inputImgEl.setAttribute('id', 'input_img');
    inputImgEl.setAttribute('width', '28');
    inputImgEl.setAttribute('height', '28');
    resultBoxEl.appendChild(inputImgEl);

    const clearButtonEl = document.createElement('button');
    clearButtonEl.innerText = 'Clear Canvas';
    rootEl.appendChild(clearButtonEl);

    for(let i = 0; i < 10; ++i) {
        const outputImgEl = document.createElement('img');
        outputImgEl.setAttribute('class', 'output-img');
        outputImgEl.setAttribute('width', '56');
        outputImgEl.setAttribute('height', '56');
        resultBoxEl.appendChild(outputImgEl);
    }

    rootEl.appendChild(resultBoxEl);

    return {clearButtonEl, canvasEl}
};