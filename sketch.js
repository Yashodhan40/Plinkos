const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;

var ball1;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7;

var particles=[];
var plinkos1=[];
var divisions=[];
var divisionHeight=300;
var score=0;



function setup() {
  var canvas=createCanvas(480,790);
  engine=Engine.create();
  world=engine.world;
  ball1 = new Part(340,30,6);
  wall1 = new Wall(5,725,10,190);
  wall2 = new Wall(85,725,10,190);
  wall3 = new Wall(165,725,10,190);
  wall4 = new Wall(245,725,10,190);
  wall5 = new Wall(325,725,10,190);
  wall6 = new Wall(405,725,10,190);
  wall7 = new Wall(480,725,10,190);
  ground1 = new Wall(width/2,height,width,10);
  for (var i=0; i<=width; i=i+80){
    divisions.push(new Wall(i,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j=75; j<=width; j=j+50){
    plinkos1.push(new Plinkos(j,75));
  }
  
  for (var j=50; j<= width-10; j=j+50){
    plinkos1.push(new Plinkos(j,175));
  }
  for (var j=75; j<= width; j=j+50){
    plinkos1.push(new Plinkos(j,275));
  }
  for (var j=50; j<= width-10; j=j+50){
    plinkos1.push(new Plinkos(j,375));
  }
  
  

  
  Engine.run(engine);

}

function draw() {
  background(0);  
  //console.log(particles);
  textSize(20);
  text("Score= " +score,20,30);
    
  
  ball1.display();
 // wall1.display();
 // wall2.display();
 // wall3.display();
 // wall4.display();
 // wall5.display();
  //wall6.display();
 // wall7.display();
  ground1.display();
  for (var i=0; i<plinkos1.length; i++){
    plinkos1[i].display();
  }
 
  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for (var k=0; k<divisions.length; k++){
       divisions[k].display();   
    }
    if (frameCount%60===0)
    {
      particles.push(new Part(226,30,5,5))
    score++;
    }
  
 
  drawSprites();
}
