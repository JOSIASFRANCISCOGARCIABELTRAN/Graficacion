function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  //Linea vertical central
  line(width/2, 0, width/2, height);
  //Linea horizontal central
  line(0, height/2, width, height/2);
  rect(width/2-40, height/2-20,80,40);
  circle(0,0,50)
  circle(0,400,50)
   circle(600,400,50)
    circle(600,0,50)
}