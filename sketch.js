const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,325,20,150); 
    box2 = new Box(450,325,20,150);
    box3 = new Box(500,325,20,150);
    box4 = new Box(550,325,20,150);
    box5 = new Box(600,325,20,150);
    box6 = new Box(650,325,20,150);
    box7 = new Box(700,325,20,150);
    box8 = new Box(750,325,20,150);
    box9 = new Box(575,240,400,20);

    box10 = new Box(475,180,20,100);
    box11 = new Box(525,180,20,100);
    box12 = new Box(575,180,20,100);
    box13 = new Box(625,180,20,100);
    box14 = new Box(675,180,20,100);
    box15 = new Box(575,130,240,10);

    box16 = new Box(550,100,20,50);
    box17 = new Box(600,100,20,50);
    box18 = new Box(575,70,70,10);

    ball1 = new Ball(575,60,10);
}

function draw(){
    background(0);
    Engine.update(engine);

    
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    
    ball1.display();

}