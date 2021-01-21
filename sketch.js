
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= matter.Constraint

var engine,world
var Roof
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



