var movrect, fixrect;
var r1,r2,r3,r4, obj1,obj2
var r5,r6


function setup() {
  createCanvas(800,400);
  movrect= createSprite(200, 200, 50, 100);
  movrect.shapeColor="green";
  fixrect=createSprite(250,200,50,50);
  fixrect.shapeColor="green";
  console.log(movrect.width/2+fixrect.width/2);
r1= createSprite(100,200,50,50);
r1.shapeColor="blue";
r2= createSprite(350,200,50,50);
r2.shapeColor="green";
r3= createSprite(500,200,50,50);
r3.shapeColor="green";
r4= createSprite(650,200,50,50);
r4.shapeColor="green";
r5= createSprite(100,100,50,50);
r5.velocityY= 3;
r6= createSprite(100,300,50,50);
r6.shapeColor="blue"
r6.velocityY=-3;

r1.velocityX= 3
r4.velocityX=-3
}

function draw() {
  background("red");  
  movrect.x=mouseX;
  movrect.y=mouseY;
  //console.log(movrect.x-fixrect.x);
  if(isTouching(movrect, fixrect)){
    movrect.shapeColor="yellow";
    fixrect.shapeColor="yellow";
  }else
  {
    movrect.shapeColor="green";
    fixrect.shapeColor="green";
  }

  if(isTouching(movrect,r1)){
    movrect.shapeColor="yellow";
    r1.shapeColor="yellow";
  }else {
    movrect.shapeColor="green";
    r1.shapeColor="blue";
  }
  if(isTouching(movrect, r2)){
    movrect.shapeColor="yellow";
    r2.shapeColor="yellow";
  }else
  {
    movrect.shapeColor="green";
    r2.shapeColor="green";
  }
  if(isTouching(movrect, r3)){
    movrect.shapeColor="yellow";
    r3.shapeColor="yellow";
  }else
  {
    movrect.shapeColor="green";
    r3.shapeColor="green";
  
  }
  if(isTouching(movrect, r4)){
    movrect.shapeColor="yellow";
    r4.shapeColor="yellow";
  }else
  {
    movrect.shapeColor="green";
    r4.shapeColor="green";
  }
  bounceOff(r1,r4);
  bounceOff(r5,r6);
    drawSprites();
}
