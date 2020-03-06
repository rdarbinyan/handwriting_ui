import * as tf from '@tensorflow/tfjs';
import './index.css';

import {createElements} from "./createElements";
import {initDrawing} from "./initDrawing";


(async function() {
    const encoder = await tf.loadLayersModel("https://raw.githubusercontent.com/rdarbinyan/handwriting_learning/master/output/encoder.json/model.json");
    const decoder = await tf.loadLayersModel("https://raw.githubusercontent.com/rdarbinyan/handwriting_learning/master/output/decoder.json/model.json");

    const {clearButtonEl, canvasEl, rangeEl, rangeValueEl} = createElements();
    const {tempCanvasEl, clearCanvas, drawOnCanvas} = initDrawing(canvasEl, rangeEl);

    rangeEl.oninput = () => {
        rangeValueEl.innerText = rangeEl.value;
        drawOnCanvas();
    };
    clearButtonEl.addEventListener('click', clearCanvas);

    const preprocessCanvas = async (inputCanvas) => {
        const res = tf.browser.fromPixels(inputCanvas).resizeNearestNeighbor([28, 28]);

        const tempCanvas = document.createElement("canvas");
        await tf.browser.toPixels(res, tempCanvas);
        const imgBox = document.getElementById("input_img");
        imgBox.src = tempCanvas.toDataURL();

        return tf.browser.fromPixels(inputCanvas)
            .resizeNearestNeighbor([28, 28])
            .mean(2)
            .toFloat()
            .reshape([1, 784])
            .div(255.0);
    };

    async function calculate() {
        const imgBoxes = document.getElementsByClassName("outputImg");
        let tensor = await preprocessCanvas(tempCanvasEl);
        for (let i = 0; i < imgBoxes.length; ++i) {
            const num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            num[i] = 1;

            let predictions = await encoder.predict([tensor, tf.tensor([num])]);
            let decoded = await decoder.predict(predictions[2]);

            const result = decoded.reshape([28, 28]);
            const tempCanvas = document.createElement("canvas");
            await tf.browser.toPixels(result, tempCanvas);
            imgBoxes[i].src = tempCanvas.toDataURL()
        }
    }

    setInterval(calculate, 1000);
})();
