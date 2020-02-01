



const viewPort = $(".__3dview");
var c = document.getElementsByClassName("__canvas")[0];
c.width = viewPort.width();
c.height = viewPort.height();
console.log(c)
var ctx = c.getContext("2d");
var centerX = c.width / 2;
var centerY = c.height / 2;
var radius = 70;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();