const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var poly_img;
var score = 0;
var bg = "orange";

function preload(){
  poly_img = loadImage("polygon.png");
  getBackImg();
}

function setup() {
  createCanvas(1200,500);
  
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(600,490,1200,20);
  stand1 = new Ground(450,400,350,10);
  stand2 = new Ground(850,200,250,10);

  // level 1 stand 1
  block1 = new Block(325,365,50,60);
  block2 = new Block(375,365,50,60);
  block3 = new Block(425,365,50,60);
  block4 = new Block(475,365,50,60);
  block5 = new Block(525,365,50,60);
  block6 = new Block(575,365,50,60);

  // level 2 stand 1
  block7 = new Block(375,305,50,60);
  block8 = new Block(425,305,50,60);
  block9 = new Block(475,305,50,60);
  block10 = new Block(525,305,50,60);

  // level 3 stand 1
  block11 = new Block(425,245,50,60);
  block12 = new Block(475,245,50,60);

  // level 4 stand 1
  block13 = new Block(450,185,50,60);

  // level 1 stand 2
  block14 = new Block(775,165,50,60);
  block15 = new Block(825,165,50,60);
  block16 = new Block(875,165,50,60);
  block17 = new Block(925,165,50,60);

  // level 2 stand 2
  block18 = new Block(825,105,50,60);
  block19 = new Block(875,105,50,60);

  // level 3 stand 3
  block20 = new Block(850,45,50,60);

  // ball 
  ball = Bodies.circle(100,200,20);
  World.add(world,ball);
  
  slingShot1 = new SlingShot(this.ball,{x:100,y:200});

  Engine.run(engine);
}

function draw() {
 
 if(bg){
  background(bg);
 }
  textSize(20);
  fill("red");
  text("Score: " + score,1000,50);
  fill("yellow");
  text("Drag the shape to destroy the blocks",300,30);
  fill("green");
  text("Press 'Space' to get a second chance",750,450);

  ground1.display();
  stand1.display();
  stand2.display();
  
  fill("skyblue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();

  fill("pink");
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();

  fill("lightgreen");
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  fill("grey");
  block13.display();
  block13.score();

  fill("skyblue");
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();

  fill("pink");
  block18.display();
  block18.score();
  block19.display();
  block19.score();

  fill("lightgreen");
  block20.display();
  block20.score();

  imageMode(CENTER);
  image(poly_img,ball.position.x,ball.position.y,50,50);

  slingShot1.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  
}

function mouseReleased(){
  slingShot1.fly();
  
}

function keyPressed(){
  if (keyCode === 32 ){
    Matter.Body.setPosition(this.ball,{x:100,y:200});
    slingShot1.attach(this.ball);
  }
}

async function getBackImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    

    if(hour >= 06 && hour <= 18){
      bg = "orange";
    }
    else{
      bg = "black";
    }
}