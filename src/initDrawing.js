import {CANVAS_BG_COLOR, CANVAS_HEIGHT, CANVAS_WIDTH, CROP} from "./constants";

export const initDrawing = (canvasEl, rangeEl) => {
    let [clickX, clickY, clickD] = [[], [], []];
    let drawing;
    let ctx = canvasEl.getContext("2d");

    const tempCanvasEl = document.createElement("canvas");
    const tempCtx = tempCanvasEl.getContext("2d");
    tempCtx.fillStyle = CANVAS_BG_COLOR;

    const addUserGesture = (x, y, dragging) => {
        clickX.push(x);
        clickY.push(y);
        clickD.push(dragging);
    };

    const drawOnCanvas = () =>  {
        ctx.lineWidth = rangeEl.valueAsNumber;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        for (let i = 0; i < clickX.length; ++i) {
            ctx.beginPath();
            if (clickD[i] && i) {
                ctx.moveTo(clickX[i - 1], clickY[i - 1]);
            } else {
                ctx.moveTo(clickX[i] - 1, clickY[i]);
            }
            ctx.lineTo(clickX[i], clickY[i]);
            ctx.closePath();
            ctx.stroke();
        }

        fillInputImage();
    };

    const fillInputImage = () => {
        const lineWidth = rangeEl.valueAsNumber;
        let minX, maxX, minY, maxY;
        if(CROP && clickX.length) {
            [minX, maxX] = [Math.min(...clickX) - 3 * lineWidth, Math.max(...clickX) + 3 * lineWidth];
            [minY, maxY] = [Math.min(...clickY) - lineWidth, Math.max(...clickY) + lineWidth];
        } else {
            [minX, maxX] = [0 - lineWidth, CANVAS_WIDTH + lineWidth];
            [minY, maxY] = [0 - lineWidth, CANVAS_HEIGHT + lineWidth];
        }

        tempCanvasEl.width  = maxX - minX;
        tempCanvasEl.height = maxY - minY;

        tempCtx.fillRect(0, 0, tempCanvasEl.width, tempCanvasEl.height);
        tempCtx.drawImage(canvasEl, minX, minY, maxX - minX, maxY - minY, 0, 0, maxX - minX, maxY - minY);

        const inputImgEl = document.getElementById("input_img");
        inputImgEl.src = tempCanvasEl.toDataURL();

        // show the image
        document.getElementById("result_box").style.display = "flex";

        return tempCanvasEl;
    };

    const clearCanvas = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        [clickX, clickY, clickD] = [[], [], []];
        fillInputImage();
    };

    const showRightComponent = () => {
        const rightComponentEl = document.getElementById('right_component');
        const descriptionEl = document.getElementById('description');
        rightComponentEl.setAttribute('style', '');
        descriptionEl.setAttribute('style', 'display:none');
    };


    canvasEl.addEventListener('mousedown', e => {
        const [mouseX, mouseY] = [e.pageX - canvasEl.offsetLeft, e.pageY - canvasEl.offsetTop];
        if(!clickX.length) {
            showRightComponent();
        }
        drawing = true;
        addUserGesture(mouseX, mouseY);
        drawOnCanvas();
    });

    canvasEl.addEventListener('touchstart', e => {
        if (e.target === canvasEl) {
            e.preventDefault();
        }

        const rect = canvasEl.getBoundingClientRect();
        const touch = e.touches[0];

        const [mouseX, mouseY] = [touch.clientX - rect.left, touch.clientY - rect.top];

        if(!clickX.length) {
            showRightComponent();
        }
        drawing = true;
        addUserGesture(mouseX, mouseY);
        drawOnCanvas();
    });

    canvasEl.addEventListener('mousemove', e => {
        if (drawing) {
            const [mouseX, mouseY] = [e.pageX - canvasEl.offsetLeft, e.pageY - canvasEl.offsetTop];

            addUserGesture(mouseX, mouseY, true);
            drawOnCanvas();
        }
    });

    canvasEl.addEventListener('touchmove', e => {
        if (e.target === canvasEl) {
            e.preventDefault();
        }

        if (drawing) {
            const rect = canvasEl.getBoundingClientRect();
            const touch = e.touches[0];

            const [mouseX, mouseY] = [touch.clientX - rect.left, touch.clientY - rect.top];

            drawing = true;
            addUserGesture(mouseX, mouseY);
            drawOnCanvas();
        }
    });

    canvasEl.addEventListener('mouseup', e => {
        drawing = false;
    });

    canvasEl.addEventListener('mouseleave', e => {
        drawing = false;
    });

    canvasEl.addEventListener('touchend', e => {
        if (e.target === canvasEl) {
            e.preventDefault();
        }
        drawing = false;
    });

    canvasEl.addEventListener('touchcancel', e => {
        if (e.target === canvasEl) {
            e.preventDefault();
        }
        drawing = false;
    });

    rangeEl.oninput = drawOnCanvas;

    return {tempCanvasEl, clearCanvas, drawOnCanvas}
};