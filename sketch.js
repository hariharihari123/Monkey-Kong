var PLAY = 1;
var END = 0;
gameState = 1;
var bg, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,bgi;
var bang,obstacleGroup,monkey,ground,r1i,r2i,r3i,r4i,r5i,r6i,r1,r2,r3,r4,r5,r6,randr,ban,bani,rockg;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bgi = loadImage("jungel.png");
  r1i = loadImage("r1.png");
  r2i = loadImage("r2.png");
  r3i = loadImage("r3.png");
  r4i = loadImage("r4.png");
  r5i = loadImage("r5.png");
  r6i = loadImage("r6.png");
  bani = loadImage("banana.png");
}



function setup() {
createCanvas(400,400);
bg = createSprite(440,200,400,400);
bg.addImage("bg",bgi);
bg.scale = 1.7;
bg.velocityX = - bg.width/100;
monkey = createSprite(50,300,20,20);
monkey.addAnimation("monkeyrunning",monkey_running);
monkey.scale =0.1;
ground = createSprite(200,340,400,10);
ground.visible = false ;
score = 0;
rockg = new Group();
}


function draw() {
//background("black");
if (gameState == 1){
if (frameCount % 70 == 0){
randr = Math.round(random(3,3));
if(randr == 1){
r12();
}
if (randr == 2){
r22(); 
}
if (randr == 3){
r32();
}
if (randr == 4){
r42();
}
if (randr == 5){
r52();    
}
if (randr == 6){
r62();
}
bananas();
}
monkey.visible = true;
bg.velocityX = - bg.width/100;
}
drawSprites();
if (gameState == 0){
score = 0;
rockg.setVelocityXEach = 0;
ban.velocityX = 0;
bg.velocityX = 0;
monkey.visible = false;
textSize(25);
fill("black");
text ("Press 'Space' ",125,150);
text ("To Restart",140,250);
if (keyDown("space")){
rockg.destroyEach();
ban.destroy();
gameState = 1;
}
}
//console.log(gameState);
rocky();
score = score + Math.round(getFrameRate()/61.7);
  textSize(25);
  strokeWeight(5);
  stroke("black");
  fill("yellow");
  text("Survival ",20,30);
  text("  Time  ",25,55)
  text(score,130,45);
  if(bg.x < -55)
  {
    bg.x = 440;
  }
  if (keyDown("space")&&monkey.collide(ground)){
  monkey.velocityY = -14;   
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
}
function r12(){
r1 = createSprite(427,320,20,20);
r1.addImage(r1i);
r1.scale = 0.9;
r1.velocityX = -5;
r1.lifeTime = 90;
rockg.add(r1);
r1.setCollider("circle",0,10,30);
//r1.debug = true;
}
function r22(){
r2 = createSprite(427,320,20,20);
r2.addImage(r2i);
r2.scale = 0.9;
r2.velocityX = -5;
r2.lifeTime = 90;
rockg.add(r2);
r2.setCollider("circle",0,10,30);
//r2.debug = true;
}
function r32(){
r3 = createSprite(427,320,20,20);
r3.addImage(r3i);
r3.scale = 0.9;
r3.velocityX = -5;
r3.lifeTime = 90;
rockg.add(r3);
r3.setCollider("circle",0,10,30);
//r3.debug = true;
}
function r42(){
r4 = createSprite(427,320,20,20);
r4.addImage(r4i);
r4.scale = 0.9;
r4.velocityX = -5;
r4.lifeTime = 90;
rockg.add(r4);
r4.debug = true;
}
function r52(){
r5 = createSprite(427,320,20,20);
r5.addImage(r5i);
r5.scale = 0.9;
r5.velocityX = -5;
r5.lifeTime = 90;
rockg.add(r5);
r5.debug = true;
}
function r62(){
r6 = createSprite(427,320,20,20);
r6.addImage(r6i);
r6.scale = 0.9;
r6.velocityX = -5;
r6.lifeTime = 90;
rockg.add(r6);
r6.setCollider("rectangle",0,0,50,40);
//r6.debug = true;
}
function bananas(){
ban = createSprite(430,random(100,200),20,20);
ban.addImage(bani);
ban.velocityX = -2;
ban.scale = 0.08;
ban.lifeTime = 90;
}
function rocky(){
if (monkey.isTouching(rockg)){
gameState = 0;
}
}