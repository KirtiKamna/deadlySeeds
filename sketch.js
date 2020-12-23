var spaceship,spaceshipImage;
var shooter,shooterImage;
var seed,seedImage;
var seedGroup;
var backgroundImage;
var gameOver;
var gameOverImage;
var edges;
var laser;
var laserSound;
var introSound;
function preload()
{
	spaceshipImage = loadImage("spaceship.png");
	shooterImage = loadImage("shooter.png");
	seedImage = loadImage("seed.png");
	backgroundImage = loadImage("background.jpg");
	gameOverImage = loadImage("gameOver.jpg");

	laserSound = loadSound("laser.wav");
	introSound = loadSound("intro.wav");

}

function setup() {
	createCanvas(1200, 800);
	introSound.loop();
	introSound.play();
	spaceship = createSprite(400,100,100,100);
	spaceship.addImage(spaceshipImage);
	spaceship.velocityX = -5;


	shooter = createSprite(400,700,100,100);
	shooter.addImage(shooterImage);


	seedGroup= createGroup();

	


  
}


function draw() {
 
  background(backgroundImage);
  shooter.x = mouseX;
 var edges=  createEdgeSprites();
  
  spaceship.bounceOff(edges);
  

  if(seedGroup.isTouching(laser)){
	  seedGroup.velocityY =0;
	  seedGroup.destroyEach();
  }
  
if(seedGroup.collide(edges)){
	gameOver = createSprite(600,400,100,100);
	gameOver.addImage(gameOverImage);
	introSound.stop();

	
}
spawnSeeds();
shootLaser();
  drawSprites();
 
}
function spawnSeeds(){
 if(frameCount % 100 ===0){
seed = createSprite(400,150,50,50);
seed.addImage(seedImage);
seed.scale = 0.1;
seed.velocityY = 4;
seed.x = spaceship.x;
seed.lifetime = 200;
seedGroup.add(seed);


 }


}

function shootLaser(){

if(keyDown("space")){

	laser = createSprite(shooter.x,600,10,50);
	laser.shapeColor="red";
	laser.velocityY = -20;
	laserSound.play();
}

}


