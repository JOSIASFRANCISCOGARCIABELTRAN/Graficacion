let angle = 0;
let level = 5;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);

  drawBezier();

  //ÁNGULO CONTROLADO POR MOUSE
  let baseAngle = map(mouseX, 0, width, -PI/2 - PI/6, -PI/2 + PI/6);
  drawFractalTree(600, 450, baseAngle, 80, level);

  drawTransformations();
  drawText();
}

//CURVA BÉZIER
function drawBezier() {
  noFill();

  let x1 = 100;
  let y1 = 300;

  let x2 = mouseX;
  let y2 = mouseY;

  let x3 = width - mouseX;
  let y3 = height - mouseY;

  let x4 = 400;
  let y4 = 300;

  stroke(0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  fill(255, 0, 0);
  circle(x2, y2, 10);
  circle(x3, y3, 10);
}

//FRACTAL DIRECCIONAL
function drawFractalTree(x, y, angle, length, level) {
  if (level === 0) return;

  let x2 = x + cos(angle) * length;
  let y2 = y + sin(angle) * length;

  stroke(50 + level * 40, 100, 50);
  line(x, y, x2, y2);

  drawFractalTree(x2, y2, angle - PI/6, length * 0.7, level - 1);
  drawFractalTree(x2, y2, angle + PI/6, length * 0.7, level - 1);
}

//TRANSFORMACIONES
function drawTransformations() {
  push();

  translate(200 + sin(frameCount * 0.05) * 50, 150);
  rotate(angle);

  let s = 1 + 0.5 * sin(frameCount * 0.05);
  scale(s);

  fill(100, 150 + sin(frameCount * 0.1) * 100, 255);
  rect(-25, -25, 50, 50);

  pop();

  angle += 0.03;
}

//TECLADO
function keyPressed() {
  if (key === '+') {
    level++;
  }
  if (key === '-' && level > 1) {
    level--;
  }
}

//TEXTO
function drawText() {
  fill(0);
  textSize(14);

  text("Curva Bézier interactiva (mouse)", 50, 320);
  text("Fractal direccional nivel: " + level, 550, 480);
  text("Mueve el mouse para cambiar dirección", 520, 460);
  text("Transformaciones animadas", 150, 100);
}
