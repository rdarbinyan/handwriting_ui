import {CANVAS_BG_COLOR, CANVAS_HEIGHT, CANVAS_LINE_COLOR, CANVAS_LINE_WIDTH, CANVAS_WIDTH} from "./constants";

const rootEl = document.getElementById('root');

const createCanvasControls = (parentEl) => {
    const canvasControlsEl = document.createElement('div');
    canvasControlsEl.setAttribute("class", `canvasControls`);

    const rangeContainerEl = document.createElement('div');
    rangeContainerEl.setAttribute('class', 'rangeContainer');

    const rangeEl = document.createElement('input');
    rangeEl.setAttribute('id', 'range');
    rangeEl.setAttribute('type', 'range');
    rangeEl.setAttribute('min', `${CANVAS_LINE_WIDTH}`);
    rangeEl.setAttribute('max', `${CANVAS_LINE_WIDTH * 7}`);
    rangeEl.setAttribute('value', `${CANVAS_LINE_WIDTH * 4}`);

    const rangeLabelEl = document.createElement('label');
    rangeLabelEl.setAttribute('for', 'range');
    rangeLabelEl.innerHTML = "Brush size";

    rangeContainerEl.appendChild(rangeLabelEl);
    rangeContainerEl.appendChild(rangeEl);
    canvasControlsEl.appendChild(rangeContainerEl);

    const clearButtonEl = document.createElement('button');
    clearButtonEl.innerText = 'Clear Canvas';
    canvasControlsEl.appendChild(clearButtonEl);

    parentEl.appendChild(canvasControlsEl);

    return {clearButtonEl, rangeEl};
};

const createDrawingArea = () => {
    const drawingAreaEl = document.createElement('div');
    drawingAreaEl.setAttribute("class", `drawingArea`);

    const titleContainerEl = document.createElement('div');
    titleContainerEl.setAttribute("class", `titleContainer`);
    const title = document.createElement('h2');
    title.innerText = "Draw a digit";
    titleContainerEl.appendChild(title);
    drawingAreaEl.appendChild(titleContainerEl);

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


    const {clearButtonEl, rangeEl} = createCanvasControls(drawingAreaEl);
    rootEl.appendChild(drawingAreaEl);
    return {canvasEl, clearButtonEl, rangeEl};
};

const createRightComponent = () => {
    const descriptionEl = document.createElement('div');
    descriptionEl.setAttribute('id', 'description');
    descriptionEl.setAttribute('class', 'description');
    descriptionEl.innerHTML = `<div> <h2>Style Transfer for Handwritten Digits</h2>
        This neural network transfers the "style" of a digit written in the black area to all other digits. 
        There is no exact definition of "style", it is learned in an unsupervised manner.
        <br/> <br/>
        The idea is the following. An encoder learns to map the image <b>x</b> into a representation <b>z</b> 
        which has all information about the image <i>except</i> its label: the digit <b>y</b>. 
        Then, a decoder takes both <b>z</b> and <b>y</b> and reconstructs the original image. If <b>z</b> 
        has no information about <b>y</b>, and if <b>z</b> and <b>y</b> together are enough to reconstruct <b>x</b>, 
        we can assume that <b>z</b> contains information about the "style" of the image. When we have such encoder 
        and decoder, then we can take <b>z</b> from one image and give a different <b>y</b> to see how other digits look like with this "style".
        <br/> <br/>
        
        This is made possible by the method described in <a href="http://papers.nips.cc/paper/8122-invariant-representations-without-adversarial-training">
        "Invariant Representations without Adversarial Training"</a> by Daniel Moyer, Shuyang Gao, Rob Brekelmans, Aram Galstyan and Greg Ver Steeg. 
        In short, the system is a variational autoencoder with an additional term in the loss function which minimizes an approximation of the mutual 
        information between <b>z</b> and <b>y</b>. We have <a href="https://github.com/rdarbinyan/handwriting_learning">re-implemented the algorithm in 
        Keras</a>, trained the model on MNIST, and brought the weights to tensorflow.js.</div>`;

    rootEl.appendChild(descriptionEl);

    const rightComponentEl = document.createElement('div');
    rightComponentEl.setAttribute('id', 'right_component');
    rightComponentEl.setAttribute('style', 'display:none');
    rightComponentEl.setAttribute('class', 'rightComponent');

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

    rightComponentEl.appendChild(arrowEl);

    const inputImgEl = document.createElement('img');
    inputImgEl.setAttribute('id', 'input_img');
    inputImgEl.setAttribute('class', 'inputImg');
    inputImgEl.setAttribute('width', '28');
    inputImgEl.setAttribute('height', '28');
    rightComponentEl.appendChild(inputImgEl);

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

    rightComponentEl.appendChild(arrowBunchEl);


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

    rightComponentEl.appendChild(resultBoxEl);

    rootEl.appendChild(rightComponentEl);
};

export const createElements = () => {
    const {canvasEl, clearButtonEl, rangeEl} = createDrawingArea();
    createRightComponent();

    return {clearButtonEl, canvasEl, rangeEl}
};