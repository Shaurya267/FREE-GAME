
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;
var rightSide;

function keyPressed()
{
	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
	}	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 //Create the Bodies Here.
	Engine.run(engine);

  var ball_options = 
  {
		//isStatic:false,
		restitution : 0.95,
		//friction:0
  }  

  ball = Bodies.circle(10,200,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {

  background(0);

  //drawSprites();

 ground=new Ground(width/2,670,width,20);
 leftSide = new Ground(650,600,20,120); 
 rightSide = new Ground(500,600,20,120);

 ground.display();
 leftSide.display();
 rightSide.display();

 ellipse(ball.position.x,ball.position.y,20);
 Engine.update(engine);
}



