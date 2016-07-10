var aneObj = function()
{
	//start point, control point, end point(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}
aneObj.prototype.num = 100;
aneObj.prototype.init = function()
{
	
	for(var i = 0; i< this.num;i++)
	{
		this.rootx[i]=i*17 + Math.random()*10;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight - 70 +Math.random()*30;
		this.amp[i] = Math.random()*15+10;
	}
	//console.log("a");
}
aneObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.5;
	ctx2.lineWidth = 15;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "black";
	for(var i = 0; i<this.num;i++)
	{
		//beginPath,moveTo,lineTO,stroke,strokeStyle,
		//lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		ctx2.quadraticCurveTo(this.rootx[i],
			canHeight - 10,
			this.headx[i]+l*this.amp[i],
			this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}

