import {CANVAS_BG_COLOR, CANVAS_HEIGHT, CANVAS_LINE_COLOR, CANVAS_LINE_WIDTH, CANVAS_WIDTH} from "./constants";

const rootEl = document.getElementById('root');

const createCanvasControls = (parentEl) => {
    const canvasControlsEl = document.createElement('div');
    canvasControlsEl.setAttribute("class", `canvasControls`);

    const rangeEl = document.createElement('input');
    rangeEl.setAttribute('id', 'range');
    rangeEl.setAttribute('type', 'range');
    rangeEl.setAttribute('min', `${CANVAS_LINE_WIDTH}`);
    rangeEl.setAttribute('max', `${CANVAS_LINE_WIDTH * 7}`);
    rangeEl.setAttribute('value', `${CANVAS_LINE_WIDTH * 4}`);

    const rangeValueEl = document.createElement('p');
    rangeValueEl.setAttribute('id', 'rangeValue');
    rangeValueEl.innerText = rangeEl.value;

    canvasControlsEl.appendChild(rangeEl);
    canvasControlsEl.appendChild(rangeValueEl);

    const clearButtonEl = document.createElement('button');
    clearButtonEl.innerText = 'Clear Canvas';
    canvasControlsEl.appendChild(clearButtonEl);

    parentEl.appendChild(canvasControlsEl);

    return {clearButtonEl, rangeEl, rangeValueEl};
};

const createDrawingArea = () => {
    const drawingAreaEl = document.createElement('div');
    drawingAreaEl.setAttribute("class", `drawingArea`);

    const canvasEl = document.createElement("canvas");
    canvasEl.setAttribute("class", `canvas`);
    canvasEl.setAttribute("width", `${CANVAS_WIDTH}`);
    canvasEl.setAttribute("height", `${CANVAS_HEIGHT}`);
    canvasEl.setAttribute("id", 'canvas');
    canvasEl.style.backgroundColor = CANVAS_BG_COLOR;
    let ctx = canvasEl.getContext("2d");
    ctx.strokeStyle = CANVAS_LINE_COLOR;
    ctx.lineJoin = 'round';
    ctx.lineWidth = CANVAS_LINE_WIDTH;
    drawingAreaEl.appendChild(canvasEl);


    const {clearButtonEl, rangeEl, rangeValueEl} = createCanvasControls(drawingAreaEl);
    rootEl.appendChild(drawingAreaEl)
    return {canvasEl, clearButtonEl, rangeValueEl, rangeEl};
};

export const createElements = () => {
    const {canvasEl, clearButtonEl, rangeValueEl, rangeEl} = createDrawingArea();

    const arrowEl = document.createElement('svg');
    arrowEl.innerHTML = `<svg width="200px" height="100px">
                                <defs>
                                    <marker id="triangle" viewBox="0 0 10 10"
                                          refX="1" refY="5" 
                                          markerUnits="strokeWidth"
                                          markerWidth="10" markerHeight="10"
                                          orient="auto">
                                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#03A9F4"/>
                                    </marker>
                                  </defs>
                                <line x1="0" y1="50" x2="184" y2="50" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)" />
                        </svg>`;

    rootEl.appendChild(arrowEl)

    const inputImgEl = document.createElement('img');
    inputImgEl.setAttribute('id', 'input_img');
    inputImgEl.setAttribute('class', 'inputImg');
    inputImgEl.setAttribute('width', '28');
    inputImgEl.setAttribute('height', '28');
    rootEl.appendChild(inputImgEl);

    const arrowBunchEl = document.createElement('svg');
    arrowBunchEl.innerHTML = `<svg width="200px" height="720px">
                                <defs>
                                    <marker id="triangle" viewBox="0 0 10 10"
                                          refX="1" refY="5" 
                                          markerUnits="strokeWidth"
                                          markerWidth="10" markerHeight="10"
                                          orient="auto">
                                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#03A9F4"/>
                                    </marker>
                                </defs>
                                <line x1="0" y1="360" x2="190" y2="76" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="188" y2="135" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="187" y2="192" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="185" y2="260" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="184" y2="328" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="184" y2="393" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="185" y2="460" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="187   " y2="528" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="188" y2="585" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                                <line x1="0" y1="360" x2="190" y2="644" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>
                        </svg>`;

    rootEl.appendChild(arrowBunchEl)


    const resultBoxEl = document.createElement('div');
    resultBoxEl.setAttribute('id', 'result_box');
    resultBoxEl.setAttribute('class', 'resultBox');
    for (let i = 0; i < 10; ++i) {
        const outputImgEl = document.createElement('img');
        outputImgEl.setAttribute('class', 'outputImg');
        outputImgEl.setAttribute('width', '56');
        outputImgEl.setAttribute('height', '56');
        resultBoxEl.appendChild(outputImgEl);
    }

    rootEl.appendChild(resultBoxEl);



    return {clearButtonEl, canvasEl, rangeEl, rangeValueEl}
};