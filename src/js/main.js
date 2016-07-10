var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;

var mom;

var mx;
var my;

var momTail =[];
var momEye = [];
var momBody = [];

var wave;

var dust;
var dustPic = [];

document.body.onload = game;
function game()
{
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init()
{
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src = "./src/background1.jpg";
	
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	
	mx = canWidth*0.5;
	my = canHeight*0.5;
	
	for(var i =0; i < 8;i++)
	{
		momTail[i] = new Image();
		momTail[i].src = "src/bigTail"+ i + ".png";
	}
	for(var i=0;i<2;i++)
	{
		momEye[i] = new Image();
		momEye[i].src ="src/bigEye"+ i +".png";
	}
	
	for(var i =0;i < 8 ; i++)//改渐变张数
	{
		momBody[i] = new Image();
		momBody[i].src ="src/bigSwim"+i+".png"
	}
	
	wave = new waveObj();
	wave.init();
	
	for(var i=0 ; i<7; i++)
	{
		dustPic[i] = new Image();
		dustPic[i].src = "src/dust" + i +".png";
	}
	
	dust = new dustObj();
	dust.init();
}

function gameloop()
{
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40) deltaTime = 40;
	
	//console.log(deltaTime);
	
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitsCollision();
	
	wave.draw();
	dust.draw();
	
}

function onMouseMove(e)
{
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
		
	}
}




