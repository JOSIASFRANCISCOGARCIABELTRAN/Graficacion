function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(240);
  
  // Permite rotar la vista con el mouse
  orbitControl();

  // --- Rotación Triple ---
  // El cubo girará sobre X, Y y Z simultáneamente
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  // Estilo del cubo
  fill(150, 100, 255, 200); // Un toque de color con transparencia
  stroke(0);                // Bordes negros
  
  box(100);
}