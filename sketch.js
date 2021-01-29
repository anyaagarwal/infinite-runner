var cat, crop, cropy, car,gameOver,restart,cat_2;
var human, backo, crop_1, crop_2, treeImage, treeeImage, carImage,gameOverImage,restartImage;
var carGroup;
gameState="play"


function preload() {
  human = loadAnimation("left leg.PNG", "left leg back.PNG", "right leg.PNG", "right leg back.PNG");
  backo = loadImage("backgro.PNG");
  carImage = loadImage("car.jpg");
  gameOverImage=loadImage("gameOver.PNG");
  restartImage=loadImage("restart.png");

}

function setup() {
  createCanvas(600, 600);
  
  

  //creating background
  background = createSprite(300, 300, 600, 600);
  background.addImage(backo);
  background.scale = 2.3;
  background.velocityY = 7;

  cat = createSprite(300, 517);
  cat.addAnimation("bla", human);
  cat.scale = 0.4;
  cat.depth = cat.depth + 1
  
  cat_2 = createSprite(300,517);
  cat_2.addAnimation("cdihw",human);
  cat_2.scale=0.4;
  cat_2.visible=false;
  
  
  gameOver=createSprite(300,237);
  gameOver.addImage("Jh",gameOverImage)
  gameOver.visible = false;
  
  restart=createSprite(300,500);
  restart.addImage("bhms",restartImage);
  restart.scale=0.3;
  restart.visible= false;

  carGroup = createGroup();
}

function draw() {
if(gameState==="play"){
  

  if (background.y >= 370) {
    background.y = 127.11;
  }

  if (frameCount % 100 === 0) {
    carr();
  }
  cat.x = World.mouseX;
  cat_2.x = World.mouseX;
  
  if(carGroup.isTouching(cat)||carGroup.isTouching(cat_2)){
    gameState="end";
  }

}
if(gameState==="end"){
  background.velocityY = 0;
  gameOver.visible = true;
  restart.visible= true;
  car.velocityY=0;
  car.destroy();
  cat.destroy();
  cat_2.visible=false;
  if(mousePressedOver(restart)){
    reset();
  }
}
 
  drawSprites(); 
}

function reset(){
  gameState="play"
  restart.visible=false;
  gameOver.visible=false;
  cat_2.visible=true;
  background.velocityY = 7;
  
}

function carr() {
  car = createSprite();
  car.addImage("wegih", carImage);
  car.scale = 0.2;
  car.velocityY = 17;
  car.y = Math.round(random(50, 200));
  car.x = Math.round(random(100, 500));
  car.depth = cat.depth;
  carGroup.add(car);
}