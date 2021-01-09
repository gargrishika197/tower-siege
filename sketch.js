const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var polygon;
var ground1, ground2;
var slingShot;

function setup() {
	createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;

	polygon = new Polygon(300,300,30);

	box1 = new Box1(1025, 430, 30, 40);
	box2 = new Box1(1050, 430, 30, 40);
	box3 = new Box1(1075, 430, 30, 40);
	box4 = new Box1(1100, 430, 30, 40);
	box5 = new Box1(1125, 430, 30, 40);
	box6 = new Box1(1150, 430, 30, 40);
	box7 = new Box1(1175, 430, 30, 40);
	box8 = new Box2(1050, 410, 30, 40);
	box9 = new Box2(1075, 410, 30, 40);
	box10 = new Box2(1100, 410, 30, 40);
	box11 = new Box2(1125, 410, 30, 40);
	box12 = new Box2(1150, 410, 30, 40);
	box13 = new Box3(1075, 390, 30, 40);
	box14 = new Box3(1100, 390, 30, 40);
	box15 = new Box3(1125, 390, 30, 40);
	box16 = new Box4(1100, 370, 30, 40);

	box17 = new Box1(1050, 230, 30, 40);
	box18 = new Box1(1075, 230, 30, 40);
	box19 = new Box1(1100, 230, 30, 40);
	box20 = new Box1(1125, 230, 30, 40);
	box21 = new Box1(1150, 230, 30, 40);
	box22 = new Box2(1075, 210, 30, 40);
	box23 = new Box2(1100, 210, 30, 40);
	box24 = new Box2(1125, 210, 30, 40);
	box25 = new Box3(1100, 190, 30, 40);

	ground1 = new Ground(1100, 450, 300, 20);
	ground2 = new Ground(1100, 250, 200, 20);
	ground3 = new Ground(700,600,width,50);
	ground4 = new Ground(1400,300,50,height);
	ground5 = new Ground(0,300,50,height);
	ground6 = new Ground(700,0,width,50);

	slingshot = new SlingShot(polygon.body, { x: 300, y: 300 });

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(29, 32, 68);

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
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();

	ground1.display();
    ground2.display();
	ground3.display();
	ground4.display();
	ground5.display();
	ground6.display();
	
	slingshot.display();
	polygon.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{ x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
}