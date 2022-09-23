var box1
var box2

function setup() 
{
  createCanvas(400, 400);

box1 = new Box(200,100,10,10,-1,3);
box2 = new Box(300,200,10,10,-2,4);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box2.show();
  box2.move();
  }

