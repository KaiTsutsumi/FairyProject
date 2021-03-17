var starImg, fairyImg, bgImg;
var fairy;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  

  keyPressed();
  drawSprites();
}

function keyPressed() {
	//write code here
	
	if(keyDown("RIGHT_ARROW")) {
		fairy.velocityX = 8;
		if(fairy.x = star.x - 150) {
			fairy.velocityX = 0;
			star.velocityY = 8;
			if(star.y = fairy.y) {
				star.velocityY = 0;3
			}
		}
	}
}
