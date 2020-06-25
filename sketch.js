var box1,box2; 


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box1 = createSprite (200,50,50,50);
  box1.shapeColor = "yellow";
  box2 = createSprite (400,50,50,50);
  box2.shapeColor = "pink";
  box2.velocityX = -1 
  box1.velocityX = +1;
}

function draw() {
  background(25,25,255);  
  if(box1.x - box2.x < box1.width/2 + box2.width/2 && 
    box2.x - box1.x <  box1.width/2 + box2.width/2&& 
    box1.y - box2.y < box1.height/2 + box2.height/2 && 
    box2.y - box1.y <  box1.height/2 + box2.height/2){
box2.shapeColor = "green";
box1.shapeColor = "green";
box2.velocityX=box2.velocityX *  -2;
box1.velocityX=box1.velocityX *  -2;
  }
  else {
    box1.shapeColor = "yellow";
    box2.shapeColor = "pink";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();

  
}
