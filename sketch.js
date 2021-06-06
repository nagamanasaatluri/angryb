const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var bgimg
function preload (){
bgimg=loadImage("images/bg.png")  
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world; 
  
 road=new Ground()
 

  Box2=new Box(700,500,100,100)
 Box1=new Box(1000,500,100,100)
 log1=new Log(848,445,400,20)
 Box3=new Box(700,300,100,100)
 Box4=new Box(1000,300,100,100)
 log2=new Log(850,200,400,20)
 pig1=new Pigs(850,500,80,80)
 pig2=new Pigs(841,384,80,80)
 bird1=new Bird(250,500,100,100)
 log3=new Log(150,400,100,20)
chain1=new Chain(bird1.body,{x:200 ,y:200 })



}

function draw() {
  background(0);
   image(bgimg,0,0,1200,600)
Engine.update(engine); 
text(mouseX+" "+mouseY,1000,50)
Box2.display()
Box1.display()
road.display()
log1.display()
Box3.display()
Box4.display()
log2.display()
pig1.display()
pig2.display()
bird1.display()
log3.display()
chain1.display()



}

function mouseDragged(){

console.log("bird1")
Matter.Body.setPosition(bird1.body,{x:mouseX ,y:mouseY })


}

function mouseReleased() {
 chain1.disconnectBird()
}
function keyPressed() {
  if(keyCode===32){
    Matter.Body.setPosition(bird1.body,{x:100,y:200});
    chain1.attach(bird1.body);
  }
}