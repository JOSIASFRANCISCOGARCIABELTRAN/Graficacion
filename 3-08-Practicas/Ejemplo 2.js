function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(230);
  
  // Control de cámara interactivo
  orbitControl();

  // --- Transformaciones ---
  
  // 1. Mueve el origen de coordenadas
  translate(100, 0, 0); 
  
  // 2. Aplica rotación continua en el eje Y
  rotateY(frameCount * 0.02); 
  
  // 3. Aumenta el tamaño un 20%
  scale(1.2); 

  // Dibujo del objeto
  fill(100, 150, 255); // Añadí un color para que resalte
  stroke(255);
  box(80);
}