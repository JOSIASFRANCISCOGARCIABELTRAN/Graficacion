let posX = 0, posY = 0, posZ = 0;
let escala = 1;
let rotX = 0, rotY = 0;

// Datos para modelo manual
let vertices = [
  [-40, -40, -40], [40, -40, -40], [40, 40, -40], [-40, 40, -40],
  [-40, -40, 40], [40, -40, 40], [40, 40, 40], [-40, 40, 40]
];
let aristas = [
  [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], 
  [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]
];

function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);
  orbitControl();

  // Figura 1: Cubo manual (Wireframe)
  push();
  translate(-250, 0, 0); 
  rotateX(frameCount * 0.01);
  stroke(0);
  noFill();
  for (let e of aristas) {
    let v1 = vertices[e[0]];
    let v2 = vertices[e[1]];
    line(v1[0], v1[1], v1[2], v2[0], v2[1], v2[2]);
  }
  pop();

  // Figura 2: Esfera interactiva
  push();
  translate(posX, posY, posZ);
  rotateX(rotX);
  rotateY(rotY);
  scale(escala);
  normalMaterial();
  sphere(60);
  pop();

  // Figura 3: Animación combinada
  push();
  translate(250, 0, -100);
  rotateZ(frameCount * 0.02);
  fill(100, 200, 150);
  torus(50, 15);
    
  translate(0, 80, 0);
  fill(255, 150, 50);
  cone(30, 60);
  pop();
}

// Interacción por teclado
function keyPressed() {
  if (key === 'w' || key === 'W') posZ -= 20;
  if (key === 's' || key === 'S') posZ += 20;
  if (key === 'a' || key === 'A') posX -= 20;
  if (key === 'd' || key === 'D') posX += 20;
  if (key === 'q' || key === 'Q') escala += 0.1;
  if (key === 'e' || key === 'E') escala -= 0.1;

  if (keyCode === UP_ARROW)    rotX -= 0.1;
  if (keyCode === DOWN_ARROW)  rotX += 0.1;
  if (keyCode === LEFT_ARROW)  rotY -= 0.1;
  if (keyCode === RIGHT_ARROW) rotY += 0.1;
}