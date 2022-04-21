const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bodies;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  var option = {
    isStatic: true,
  };
  world = engine.world;
  bodies = Bodies.rectangle(150, 150, 50, 50, option);
  World.add(world, bodies);
  console.log(bodies);
  var option = {
    restitution: 1.0,
  };

  pigbodies = Bodies.rectangle(300, 300, 100, 100, option);
  World.add(world, pigbodies);
  console.log(pigbodies);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(bodies.position.x, bodies.position.y, 50, 50);
  Engine.update(engine);
  rectMode(CENTER);
  rect(pigbodies.position.x, pigbodies.position.y, 100, 100);
  drawSprites();
}
