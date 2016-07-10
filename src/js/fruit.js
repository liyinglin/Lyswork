var fruitObj = function()
{
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.bule = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for(var i=0;i < this.num;i++)
	{
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random()*0.01 + 0.005;
		
	}
	this.orange.src = "./src/fruit.png";
	this.bule.src = "./src/blue.png";
}
fruitObj.prototype.draw = function()
{
	for(var i =0; i< this.num;i++)
	{
		//draw
		//find an one, grow,fly up
		if(this.alive[i])
		{
				if(this.l[i] <= 14)
			{
				this.l[i] += this.spd[i] * deltaTime;
			}
			else
			{   //往上飘，速度
				this.y[i] -= this.spd[i]*7 * deltaTime;
			}
			ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,
				this.y[i]-this.l[i]*0.5,
				this.l[i],this.l[i]
			);
			if(this.y[i]<10)
			{
				this.alive[i] = false;
			}
		}
		
	}
}
fruitObj.prototype.born=function(i)
{
	var aneID = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.headx[aneID];
	this.y[i] = ane.heady[aneID];
	this.l[i] = 0;
	this.alive[i] = true;
}

fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}

function fruitMonitor()
{
	var num = 0;
	for(var i = 0;i<fruit.num;i++)
	{
		if(fruit.alive[i])num++;
	}
	if(num<15)
	{
		//sent fruit;
		sendFruit();
		return;
	}
}
function sendFruit()
{
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}




