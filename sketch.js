var h,m,s,S_Angle,M_Angle,H_Angle;




function setup() {
  createCanvas(800,800);
  createSprite(400, 400, 30, 30);
}

function draw() {
  background(255,255,255);  
  h = hour();
  m = minute();
  s = second();

  angleMode(DEGREES);


  S_Angle = map(s,0,60,0,360);
  M_Angle = map(m,0,60,0,360);
  if(h>12){
    H_Angle = map(h-12,0,12,0,360);
  }else{
    H_Angle = map(h,0,12,0,360);
  }




  push();
  translate(400,400);
  rotate(S_Angle);
  stroke(255,0,0);
  strokeWeight(4);
  
  line(0,0,200,0);
  //noFill();
  
  pop();
  //arc(200, 400, 700, 700, 0, S_Angle * PI / 180);


  push();
  translate(400,400);
  rotate(M_Angle);
  stroke(0,0,255);
  strokeWeight(7);
  
  line(0,0,170,0);
  //noFill();
  //arc(400, 400, 700, 700, 0, M_Angle * PI / 180);
  pop();

  push();
  translate(400,400);
  rotate(H_Angle);
  stroke(0,255,0);
  strokeWeight(12);
  
  line(0,0,110,0);
  //noFill();
 //arc(400, 400, 660, 660, 0, H_Angle * PI / 180);
  pop();



  console.log(H_Angle);
  drawSprites();
}