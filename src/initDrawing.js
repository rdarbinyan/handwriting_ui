import {CANVAS_BG_COLOR, CANVAS_HEIGHT, CANVAS_LINE_WIDTH, CANVAS_WIDTH, CROP} from "./constants";

export const initDrawing = canvasEl => {
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
        let minX, maxX, minY, maxY;
        if(CROP && clickX.length) {
            [minX, maxX] = [Math.min(...clickX) - 3 * CANVAS_LINE_WIDTH, Math.max(...clickX) + 3 * CANVAS_LINE_WIDTH];
            [minY, maxY] = [Math.min(...clickY) - CANVAS_LINE_WIDTH, Math.max(...clickY) + CANVAS_LINE_WIDTH];
        } else {
            [minX, maxX] = [0 - CANVAS_LINE_WIDTH, CANVAS_WIDTH + CANVAS_LINE_WIDTH];
            [minY, maxY] = [0 - CANVAS_LINE_WIDTH, CANVAS_HEIGHT + CANVAS_LINE_WIDTH];
        }

        tempCanvasEl.width  = maxX - minX;
        tempCanvasEl.height = maxY - minY;

        tempCtx.fillRect(0, 0, tempCanvasEl.width, tempCanvasEl.height);
        tempCtx.drawImage(canvasEl, minX, minY, maxX - minX, maxY - minY, 0, 0, maxX - minX, maxY - minY);

        const inputImgEl = document.getElementById("input_img");
        inputImgEl.src = tempCanvasEl.toDataURL();

        // show the image
        document.getElementById("result_box").style.display = "block";

        return tempCanvasEl;
    };

    const clearCanvas = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        [clickX, clickY, clickD] = [[], [], []];
        fillInputImage();
    };

    canvasEl.addEventListener('mousedown', e => {
        const [mouseX, mouseY] = [e.pageX - canvasEl.offsetLeft, e.pageY - canvasEl.offsetTop];

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

    canvasEl.addEventListener('mouseup', e => {
        drawing = false;
    });

    canvasEl.addEventListener('mouseleave', e => {
        drawing = false;
    });

    return {tempCanvasEl, clearCanvas}
};