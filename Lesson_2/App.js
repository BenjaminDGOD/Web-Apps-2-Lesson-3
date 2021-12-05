console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.moveTo(200,100);
ctx.lineTo(150,300);
ctx.moveTo(150,300);
ctx.lineTo(25,436);
ctx.strokeStyle = "cyan";
ctx.lineWidth = 7;
ctx.stroke();
ctx.fillStyle = 'rgb(200, 50, 10)';
ctx.fillRect(75,125,150,100);



ctx.fillStyle = 'rgb(10, 200, 100)';
ctx.fillRect(500, 500, 100, 100);
ctx.clearRect (500, 500, 50, 50);
ctx.clearRect(550, 550, 50,50);
ctx.strokeRect(500, 500, 100 , 100);