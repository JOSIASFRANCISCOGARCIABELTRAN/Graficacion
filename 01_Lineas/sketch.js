function setup() {
  createCanvas(800, 500);
  background(180);
}

function draw() {
  //line(30, 20, 185, 185);
  //izquierdo
  stroke(0);
  line(30, 20, 185, 20);
  stroke(126);
  line(185, 20, 185, 175);
  stroke(255);
  line(185, 175, 30, 175);
  line(30, 175, 30, 20);

  //derecho
  stroke(0);
  line(615, 20, 770, 20);
  stroke(126);
  line(770, 20, 770, 175);
  stroke(255);
  line(770, 175, 615, 175);
  line(615, 175, 615, 20);

  //izquierdo abajo
  stroke(0);
  line(30, 20, 185, 20);
  stroke(126);
  line(185, 20, 185, 175);
  stroke(255);
  line(185, 175, 30, 175);
  line(30, 175, 30, 20);

  //derecho abajo
  stroke(0);
  line(615, 20, 770, 20);
  stroke(126);
  line(770, 20, 770, 175);
  stroke(255);
  line(770, 175, 615, 175);
  line(615, 175, 615, 20);

  
  //stroke(0);
  //line(0,0,800,500);
  //line(0,500,800,0);

  
}