var bullet1weight = 0;
 var bullet2weight = 0;
 var bullet3weight = 0;
 var bullet4weight = 0;
 var bullet1speed = 0;
 var bullet2speed = 0;
 var bullet3speed = 0;
 var bullet4speed =0;
 
 var wallthick1 =0;
 var wallthick2 =0;
 var wallthick3 =0;
 var wallthick4 =0;

 var bullet1damage=0;
 var bullet2damage=0;
 var bullet3damage=0;
 var bullet4damage=0;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(20, 200, 60, 1600);
  sp1 = createSprite(800, 100, 1600, 10); 
  sp2 = createSprite(800, 200, 1600, 10); 
  sp3 = createSprite(800, 300, 1600, 10); 
  
  bullet1 = createSprite(1500,50,20,10);
  bullet2 = createSprite(1500,150,20,10);
  bullet3 = createSprite(1500,250,20,10);
  bullet4 = createSprite(1500,350,20,10);
  
  bullet1.shapeColor = "white";
  bullet2.shapeColor = "white";
  bullet3.shapeColor = "white";
  bullet4.shapeColor = "white";

}

function draw() {
  background("pink");  

bullet1.velocityX = -5;
bullet2.velocityX = -5;
bullet3.velocityX = -5;
bullet4.velocityX = -5;

  if(bullet1.x-wall.x < bullet1.width/2+wall.width/2){
    bullet1.velocityX = 0;
    damage();
    text("damage of bullet1: "+ bullet1damage, 500,50);
  }

  if(bullet2.x-wall.x < bullet2.width/2+wall.width/2){
    bullet2.velocityX = 0;
    damage();
    text("damage of bullet2: "+ bullet2damage, 500,150);
  }

  if(bullet3.x-wall.x < bullet3.width/2+wall.width/2){
    bullet3.velocityX = 0;
    damage();
    text("damage of bullet3: "+ bullet3damage, 500,250);
  }

  if(bullet4.x-wall.x < bullet4.width/2+wall.width/2){
    bullet4.velocityX = 0;
    damage();
    text("damage of bullet4: "+ bullet4damage, 500,350);
  }

wall.lifetime = -1;
sp1.lifetime = -1;
sp2.lifetime = -1;
sp3.lifetime = -1;

  drawSprites();
}

function damage(){
  bullet1weight = 30;
  bullet2weight = 33;
  bullet3weight = 45;
  bullet4weight = 52;

  bullet1speed = 223;
  bullet2speed = 250;
  bullet3speed = 300;
  bullet4speed = 321;

  wallthick1 =22;
  wallthick2 =45;
  wallthick3 =65;
  wallthick4 =83;
  
  bullet1damage = (0.5*bullet1speed*bullet1speed*bullet1weight)/(wallthick1*wallthick1*wallthick1);
  bullet2damage = (0.5*bullet2speed*bullet2speed*bullet2weight)/(wallthick2*wallthick2*wallthick2);
  bullet3damage = (0.5*bullet3speed*bullet3speed*bullet3weight)/(wallthick3*wallthick3*wallthick3);
  bullet4damage = (0.5*bullet4speed*bullet4speed*bullet4weight)/(wallthick4*wallthick4*wallthick4);
  
  wall.visible = true;
  sp1.visible = true;
  sp2.visible = true;
  sp3.visible = true;

  if(bullet1damage<10){
    bullet1.shapeColor = "green";
  }
  
  if(bullet2damage<10){
    bullet2.shapeColor = "green";
  }
  
  if(bullet3damage<10){
    bullet3.shapeColor = "green";
  }
  
  if(bullet4damage<10){
    bullet4.shapeColor = "green";
  }
  
  if(bullet1damage>10){
    bullet1.shapeColor = "red";
  }
  
  if(bullet2damage>10){
    bullet2.shapeColor = "red";
  }
  
  if(bullet3damage>10){
    bullet3.shapeColor = "red";
  }
  
  if(bullet4damage>10){
    bullet4.shapeColor = "red";
  }
}