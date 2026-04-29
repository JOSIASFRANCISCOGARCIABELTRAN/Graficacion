function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);
  orbitControl();

  // Objeto 1 (Cubo)
  push();
  translate(-200, 0, 0);
  box(80);
  pop();

  // Objeto 2 (Esfera)
  push();
  translate(0, 0, -200);
  sphere(60);
  pop();

  // Objeto 3 (Cono)
  push();
  translate(200, 0, 100);
  cone(50, 120);
  pop();
}