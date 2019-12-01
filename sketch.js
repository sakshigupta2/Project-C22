var fixedCir, movingCir;

function setup() {
  createCanvas(1200,800);
  fixedCir = createSprite(600, 400, 50, 80);
  fixedCir.shapeColor = "green";
  fixedCir.debug = true;
  fixedCir.setCollider("circle");
  movingCir = createSprite(400,200,80,30);
  movingCir.shapeColor = "green";
  movingCir.debug = true;
  movingCir.setCollider("circle");
}

function draw() {
  background("black");  
  movingCir.x = World.mouseX;
  movingCir.y = World.mouseY;

  if (sq(movingCir.x - fixedCir.x) + sq(movingCir.y-fixedCir.y) < 6400) {
    movingCir.shapeColor = "blue";
    fixedCir.shapeColor = "blue";
  }
  else {
    movingCir.shapeColor = "yellow";
    fixedCir.shapeColor = "yellow";
  }
 drawSprites();
}