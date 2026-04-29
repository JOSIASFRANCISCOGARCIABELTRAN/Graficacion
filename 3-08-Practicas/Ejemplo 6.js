function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(230);
  
  // Permite rotar la cámara con el mouse
  orbitControl(); 

  // --- CUBO ---
  push();
    translate(-200, 0, 0);
    rotateY(frameCount * 0.02);
    fill(200, 50, 50); // Rojo
    box(80);
  pop();

  // --- ESFERA ---
  push();
    translate(0, 0, 0);
    fill(50, 200, 200); // Cian
    sphere(60);
  pop();

  // --- TORO (DONA) ---
  push();
    translate(200, 0, 0);
    rotateX(frameCount * 0.02);
    fill(200, 200, 50); // Amarillo
    torus(50, 15);
  pop();
}