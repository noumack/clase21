var uno, dos;
var tres, cuatro;

function setup() {
  createCanvas(800,400);
  uno = createSprite(400, 200, 50, 50);
  uno.shapeColor = "green";
  dos = createSprite(200, 100, 50, 50);
  dos.shapeColor = "green";
  tres = createSprite (350,50,50,50)
  tres.shapeColor = "blue"
  tres.velocityY = +2
  cuatro = createSprite (350,350,50,50)
  cuatro.shapeColor = "green"
  cuatro.velocityY = -2
  cinco=createSprite(100,200,50,50)
  cinco.velocityX = 3
  cinco.shapeColor = "green"
}

function draw() {
  background(255,255,255);  

  dos.x = World.mouseX;
  dos.y = World.mouseY;

  uno.debug = true;
  dos.debug = true;
  tres.debug = true;
  cuatro.debug = true;

  if(isTouching(dos, cuatro) === true){
    dos.shapeColor = "yellow";
    cuatro.shapeColor = "yellow";
  }
  else{
    dos.shapeColor = "green";
    cuatro.shapeColor = "green";
  }
  
   //BOUNCE OFF - REBOTE
   bounceoff(tres ,cuatro );
   bounceoff(cuatro,cinco);
   bounceoff(tres,cinco);
  drawSprites(); 
}



