function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(255);
  fill(0, 128, 0);
  rect(0,0,width,height/3);
  fill(255);
  rect(0, height/3, width, height/3);
  fill(255, 0, 0);
  rect(0,2*height/3,width,height/3);
}