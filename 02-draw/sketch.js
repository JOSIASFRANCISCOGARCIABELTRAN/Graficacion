let x=0;
let y=0;
let velocidad=5;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(180);
  frameRate(30);
  circle(x, 100, 40)
  x=x+velocidad;
  if (x>width || x<0){
    velocidad= -velocidad;
  }
  circle(200, y, 40)
  y=y+velocidad;
  if (y>width || y<0){
    velocidad= -velocidad;
  }
}