function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw(){
  background(240);
  let ang=frameCount*0.05;
  translate(width/2, height/2);

  for (let i=0; i<4; i++) {
    push();
    rotate(ang+i*HALF_PI);
    rect(60, 0, 120, 30);
    pop();
  }
}