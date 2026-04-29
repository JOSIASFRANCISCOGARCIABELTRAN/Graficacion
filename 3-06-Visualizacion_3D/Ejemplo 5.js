let angulo = 0;

function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);

  // Movimiento circular de la cámara
  let camX = 300 * cos(angulo);
  let camZ = 300 * sin(angulo);

  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);

  // Incremento del ángulo para animación
  angulo += 0.01;

  // Objeto
  box(100);
}