(this.webpackJsonphandwriting_ui=this.webpackJsonphandwriting_ui||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(7),o=n(1),s=(n(4),function(e){var t,n=[],a=[],r=[],i=e.getContext("2d"),o=document.createElement("canvas"),s=o.getContext("2d");s.fillStyle="#000000";var c=function(e,t,i){n.push(e),a.push(t),r.push(i)},u=function(){i.clearRect(0,0,i.canvas.width,i.canvas.height);for(var e=0;e<n.length;++e)i.beginPath(),r[e]&&e?i.moveTo(n[e-1],a[e-1]):i.moveTo(n[e]-1,a[e]),i.lineTo(n[e],a[e]),i.closePath(),i.stroke();d()},d=function(){var t,n,a,r;return t=-112,n=896,a=-112,r=896,o.width=n-t,o.height=r-a,s.fillRect(0,0,o.width,o.height),s.drawImage(e,t,a,n-t,r-a,0,0,n-t,r-a),document.getElementById("input_img").src=o.toDataURL(),document.getElementById("result_box").style.display="block",o};return e.addEventListener("mousedown",(function(n){var a=n.pageX-e.offsetLeft,r=n.pageY-e.offsetTop;t=!0,c(a,r),u()})),e.addEventListener("mousemove",(function(n){if(t){var a=n.pageX-e.offsetLeft,r=n.pageY-e.offsetTop;c(a,r,!0),u()}})),e.addEventListener("mouseup",(function(e){t=!1})),e.addEventListener("mouseleave",(function(e){t=!1})),{tempCanvasEl:o,clearCanvas:function(){i.clearRect(0,0,784,784),n=[],a=[],r=[],d()}}}),c=function(){var e=document.getElementById("root"),t=document.createElement("canvas");t.setAttribute("width","".concat(784)),t.setAttribute("height","".concat(784)),t.setAttribute("id","canvas"),t.style.backgroundColor="#000000";var n=t.getContext("2d");n.strokeStyle="#FFFFFF",n.lineJoin="round",n.lineWidth=112,e.appendChild(t);var a=document.createElement("div");a.setAttribute("id","result_box");var r=document.createElement("img");r.setAttribute("id","input_img"),r.setAttribute("width","28"),r.setAttribute("height","28"),a.appendChild(r);var i=document.createElement("button");i.innerText="Clear Canvas",e.appendChild(i);for(var o=0;o<10;++o){var s=document.createElement("img");s.setAttribute("class","output-img"),s.setAttribute("width","56"),s.setAttribute("height","56"),a.appendChild(s)}return e.appendChild(a),{clearButtonEl:i,canvasEl:t}}(),u=c.clearButtonEl,d=c.canvasEl;Object(i.a)(r.a.mark((function e(){var t,n,a,c,l,p,m,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(){return(h=Object(i.a)(r.a.mark((function e(){var a,i,s,u,d,l,m,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementsByClassName("output-img"),e.next=3,p(c);case 3:i=e.sent,s=0;case 5:if(!(s<a.length)){e.next=22;break}return(u=[0,0,0,0,0,0,0,0,0,0])[s]=1,e.next=10,t.predict([i,o.c([u])]);case 10:return d=e.sent,e.next=13,n.predict(d[2]);case 13:return l=e.sent,m=l.reshape([28,28]),h=document.createElement("canvas"),e.next=18,o.a.toPixels(m,h);case 18:a[s].src=h.toDataURL();case 19:++s,e.next=5;break;case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)},m=function(){return h.apply(this,arguments)},e.next=4,o.b("https://raw.githubusercontent.com/rdarbinyan/handwriting_learning/master/output/encoder.json/model.json");case 4:return t=e.sent,e.next=7,o.b("https://raw.githubusercontent.com/rdarbinyan/handwriting_learning/master/output/decoder.json/model.json");case 7:n=e.sent,a=s(d),c=a.tempCanvasEl,l=a.clearCanvas,u.addEventListener("click",l),p=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.a.fromPixels(t).resizeNearestNeighbor([28,28]),a=document.createElement("canvas"),e.next=4,o.a.toPixels(n,a);case 4:return document.getElementById("input_img").src=a.toDataURL(),e.abrupt("return",o.a.fromPixels(t).resizeNearestNeighbor([28,28]).mean(2).toFloat().reshape([1,784]).div(255));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setInterval(m,1e3);case 12:case"end":return e.stop()}}),e)})))()}],[[10,1,2]]]);
//# sourceMappingURL=main.6d7037a1.chunk.js.map