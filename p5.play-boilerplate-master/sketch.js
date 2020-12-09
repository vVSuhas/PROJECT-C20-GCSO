var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed,speed2,speed3,speed4, weight;
var line1,line2,line3

function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 60, 30, 20);
  car1.shapeColor = "white";
  car2=createSprite(50, 150, 30, 20);
  car2.shapeColor = "yellow";
  car3=createSprite(50, 250, 30, 20);
  car3.shapeColor = "red";
  car4=createSprite(50, 350, 30, 20);
  car4.shapeColor = "lime";

  wall1=createSprite(1500,60,20,50)
  wall1.shapeColor = "brown";
  wall2=createSprite(1500,150,20,50)
  wall2.shapeColor = "brown";
  wall3=createSprite(1500,250,20,50)
  wall3.shapeColor = "brown";
  wall4=createSprite(1500,350,20,50)
  wall4.shapeColor = "brown";
 
  line1=createSprite(200,100,5000,10)
  line1.shapeColor = "white"
  line2=createSprite(200,200,5000,10)
  line2.shapeColor = "white"
  line3=createSprite(200,300,5000,10)
  line3.shapeColor = "white"

  speed1=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  weight=random(400,1500);
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    car1.velocityX=0;
    var deformation1=0.5 * weight * speed1* speed1/22509;
    if(deformation>180){
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car1.shapeColor=color(0,255,0);
    }
  }
  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    car2.velocityX=0;
    var deformation1=0.5 * weight * speed2* speed2/22509;
    if(deformation>180){
      car2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car2.shapeColor=color(0,255,0);
    }
  }
  if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    car3.velocityX=0;
    var deformation1=0.5 * weight * speed3* speed3/22509;
    if(deformation>180){
      car3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
  }
  if(wall4.x-car4.x < (car1.width+wall4.width)/2){
    car4.velocityX=0;
    var deformation1=0.5 * weight * speed4* speed4/22509;
    if(deformation>180){
      car4.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car4.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car4.shapeColor=color(0,255,0);
    }
  }
}

function draw() {
  background("black");  
  car1.collide(wall1)
  car2.collide(wall2)
  car3.collide(wall3)
  car4.collide(wall4)
  drawSprites();
}