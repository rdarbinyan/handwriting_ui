(this.webpackJsonphandwriting_ui=this.webpackJsonphandwriting_ui||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(7),s=n(1),o=(n(23),document.getElementById("root")),l=function(){var e=document.createElement("div");e.setAttribute("class","drawingArea");var t=document.createElement("div");t.setAttribute("class","titleContainer");var n=document.createElement("h2");n.innerText="Draw a digit",t.appendChild(n),e.appendChild(t);var r=document.createElement("canvas");r.setAttribute("class","canvas"),r.setAttribute("width","".concat(784)),r.setAttribute("height","".concat(784)),r.setAttribute("id","canvas"),r.style.backgroundColor="#000000";var a=r.getContext("2d");a.strokeStyle="#FFFFFF",a.lineJoin="round",a.lineWidth=28,e.appendChild(r);var i=function(e){var t=document.createElement("div");t.setAttribute("class","canvasControls");var n=document.createElement("div");n.setAttribute("class","rangeContainer");var r=document.createElement("input");r.setAttribute("id","range"),r.setAttribute("type","range"),r.setAttribute("min","".concat(28)),r.setAttribute("max","".concat(196)),r.setAttribute("value","".concat(112));var a=document.createElement("label");a.setAttribute("for","range"),a.innerHTML="Brush size",n.appendChild(a),n.appendChild(r),t.appendChild(n);var i=document.createElement("button");return i.innerText="Clear Canvas",t.appendChild(i),e.appendChild(t),{clearButtonEl:i,rangeEl:r}}(e),s=i.clearButtonEl,l=i.rangeEl;return o.appendChild(e),{canvasEl:r,clearButtonEl:s,rangeEl:l}},d=function(){var e=l(),t=e.canvasEl,n=e.clearButtonEl,r=e.rangeEl;return function(){var e=document.createElement("div");e.setAttribute("id","description"),e.setAttribute("class","description"),e.innerHTML='<div> <h2>Style Transfer for Handwritten Digits</h2>\n        This neural network transfers the "style" of a digit written in the black area to all other digits. \n        There is no exact definition of "style", it is learned in an unsupervised manner.\n        <br/> <br/>\n        The idea is the following. An encoder learns to map the image <b>x</b> into a representation <b>z</b> \n        which has all information about the image <i>except</i> its label: the digit <b>y</b>. \n        Then, a decoder takes both <b>z</b> and <b>y</b> and reconstructs the original image. If <b>z</b> \n        has no information about <b>y</b>, and if <b>z</b> and <b>y</b> together are enough to reconstruct <b>x</b>, \n        we can assume that <b>z</b> contains information about the "style" of the image. When we have such encoder \n        and decoder, then we can take <b>z</b> from one image and give a different <b>y</b> to see how other digits look like with this "style".\n        <br/> <br/>\n        \n        This is made possible by the method described in <a href="http://papers.nips.cc/paper/8122-invariant-representations-without-adversarial-training">\n        "Invariant Representations without Adversarial Training"</a> by Daniel Moyer, Shuyang Gao, Rob Brekelmans, Aram Galstyan and Greg Ver Steeg. \n        In short, the system is a variational autoencoder with an additional term in the loss function which minimizes an approximation of the mutual \n        information between <b>z</b> and <b>y</b>. Read more in <a href="https://dcmoyer.github.io/selfhosted/blag.html">Daniel Moyer\'s blogpost</a>. \n        \n         <br/> <br/>\n        We have <a href="https://github.com/rdarbinyan/handwriting_learning">re-implemented the algorithm in \n        Keras</a>, trained the model on MNIST, and brought the weights to tensorflow.js.</div>',o.appendChild(e);var t=document.createElement("div");t.setAttribute("id","right_component"),t.setAttribute("style","display:none"),t.setAttribute("class","rightComponent");var n=document.createElement("svg");n.innerHTML='<svg width="200px" height="100px">\n                                <defs>\n                                    <marker id="triangle" viewBox="0 0 10 10"\n                                          refX="1" refY="5" \n                                          markerUnits="strokeWidth"\n                                          markerWidth="10" markerHeight="10"\n                                          orient="auto">\n                                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#03A9F4"/>\n                                    </marker>\n                                  </defs>\n                                <line x1="0" y1="50" x2="184" y2="50" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)" />\n                        </svg>',t.appendChild(n);var r=document.createElement("img");r.setAttribute("id","input_img"),r.setAttribute("class","inputImg"),r.setAttribute("width","28"),r.setAttribute("height","28"),t.appendChild(r);var a=document.createElement("svg");a.innerHTML='<svg width="200px" height="720px">\n                                <defs>\n                                    <marker id="triangle" viewBox="0 0 10 10"\n                                          refX="1" refY="5" \n                                          markerUnits="strokeWidth"\n                                          markerWidth="10" markerHeight="10"\n                                          orient="auto">\n                                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#03A9F4"/>\n                                    </marker>\n                                </defs>\n                                <line x1="0" y1="360" x2="190" y2="76" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="188" y2="135" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="187" y2="192" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="185" y2="260" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="184" y2="328" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="184" y2="393" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="185" y2="460" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="187   " y2="528" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="188" y2="585" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                                <line x1="0" y1="360" x2="190" y2="644" style="stroke:#03A9F4;stroke-width:2" marker-end="url(#triangle)"/>\n                        </svg>',t.appendChild(a);var i=document.createElement("div");i.setAttribute("id","result_box"),i.setAttribute("class","resultBox");for(var s=0;s<10;++s){var l=document.createElement("img");l.setAttribute("class","outputImg"),l.setAttribute("width","56"),l.setAttribute("height","56"),i.appendChild(l)}t.appendChild(i),o.appendChild(t)}(),{clearButtonEl:n,canvasEl:t,rangeEl:r}},c=(n(4),function(e,t){var n,r=[],a=[],i=[],s=e.getContext("2d"),o=document.createElement("canvas"),l=o.getContext("2d");l.fillStyle="#000000";var d=function(e,t,n){r.push(e),a.push(t),i.push(n)},c=function(){s.lineWidth=t.valueAsNumber,s.clearRect(0,0,s.canvas.width,s.canvas.height);for(var e=0;e<r.length;++e)s.beginPath(),i[e]&&e?s.moveTo(r[e-1],a[e-1]):s.moveTo(r[e]-1,a[e]),s.lineTo(r[e],a[e]),s.closePath(),s.stroke();u()},u=function(){var n,r,a,i,s=t.valueAsNumber;return n=0-s,r=784+s,a=0-s,i=784+s,o.width=r-n,o.height=i-a,l.fillRect(0,0,o.width,o.height),l.drawImage(e,n,a,r-n,i-a,0,0,r-n,i-a),document.getElementById("input_img").src=o.toDataURL(),document.getElementById("result_box").style.display="flex",o};return e.addEventListener("mousedown",(function(t){var a=t.pageX-e.offsetLeft,i=t.pageY-e.offsetTop;if(!r.length){var s=document.getElementById("right_component"),o=document.getElementById("description");s.setAttribute("style",""),o.setAttribute("style","display:none")}n=!0,d(a,i),c()})),e.addEventListener("mousemove",(function(t){if(n){var r=t.pageX-e.offsetLeft,a=t.pageY-e.offsetTop;d(r,a,!0),c()}})),e.addEventListener("mouseup",(function(e){n=!1})),e.addEventListener("mouseleave",(function(e){n=!1})),t.oninput=c,{tempCanvasEl:o,clearCanvas:function(){s.clearRect(0,0,784,784),r=[],a=[],i=[],u()},drawOnCanvas:c}});document.getElementById("root").setAttribute("class","loader"),Object(i.a)(a.a.mark((function e(){var t,n,r,o,l,u,h,m,p,g,b,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=function(){return(v=Object(i.a)(a.a.mark((function e(){var r,i,o,l,d,c,u,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementsByClassName("outputImg"),e.next=3,g(m);case 3:i=e.sent,o=0;case 5:if(!(o<r.length)){e.next=22;break}return(l=[0,0,0,0,0,0,0,0,0,0])[o]=1,e.next=10,t.predict([i,s.c([l])]);case 10:return d=e.sent,e.next=13,n.predict(d[2]);case 13:return c=e.sent,u=c.reshape([28,28]),h=document.createElement("canvas"),e.next=18,s.a.toPixels(u,h);case 18:r[o].src=h.toDataURL();case 19:++o,e.next=5;break;case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)},b=function(){return v.apply(this,arguments)},e.next=4,s.b("https://raw.githubusercontent.com/rdarbinyan/handwriting_ui/master/models/encoder/model.json");case 4:return t=e.sent,e.next=7,s.b("https://raw.githubusercontent.com/rdarbinyan/handwriting_ui/master/models/decoder/model.json");case 7:n=e.sent,document.getElementById("root").setAttribute("class",""),r=d(),o=r.clearButtonEl,l=r.canvasEl,u=r.rangeEl,h=c(l,u),m=h.tempCanvasEl,p=h.clearCanvas,o.addEventListener("click",p),g=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.a.fromPixels(t).resizeNearestNeighbor([28,28]),r=document.createElement("canvas"),e.next=4,s.a.toPixels(n,r);case 4:return document.getElementById("input_img").src=r.toDataURL(),e.abrupt("return",s.a.fromPixels(t).resizeNearestNeighbor([28,28]).mean(2).toFloat().reshape([1,784]).div(255));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setInterval(b,1e3);case 14:case"end":return e.stop()}}),e)})))()}],[[10,1,2]]]);
//# sourceMappingURL=main.9a6acfa3.chunk.js.map