let night = false;
let stars = [];
let cloudX = 0;
let waveOffset = 0;
let btn;

function setup() {
  createCanvas(800, 500);

  //boton
  btn = createButton("Cambiar Día/Noche");
  btn.position(10, 10);
  btn.mousePressed(() => {
    night = !night;
  });

  //estrellas
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height / 2),
      size: random(1, 3)
    });
  }
}

function draw() {

  if (night) {
    background(20, 20, 50);
    drawStars();
    drawMoon();
  } else {
    background(135, 206, 235);
    drawSun();
    drawClouds();
  }

  drawGround();
  drawLake();
  drawHouse();
  drawTree();
  drawClock();
  drawText();

  cloudX += 0.5;
  waveOffset += 0.05;
}

//SUELO
function drawGround() {
  fill(50, 180, 75);
  rect(0, height / 2, width, height / 2);
}

//LAGO
function drawLake() {
  fill(0, 100, 200);
  ellipse(200, 380, 200, 100);

  noFill();
  stroke(255);
  for (let i = 0; i < 5; i++) {
    beginShape();
    for (let x = -80; x < 80; x += 10) {
      let y = sin(x * 0.1 + waveOffset + i) * 5;
      vertex(200 + x, 380 + y + i * 5);
    }
    endShape();
  }
  noStroke();
}

//CASA
function drawHouse() {

  //base
  fill(200, 100, 50);
  rect(350, 300, 120, 100);

  //techo
  fill(150, 50, 50);
  triangle(350, 300, 470, 300, 410, 250);

  //puerta
  fill(100, 50, 0);
  rect(395, 350, 30, 50);

  //ventanas
  fill(173, 216, 230);
  rect(360, 320, 25, 25);
  rect(435, 320, 25, 25);

  // divisiones de ventana
  stroke(0);
  line(360, 332, 385, 332);
  line(372, 320, 372, 345);

  line(435, 332, 460, 332);
  line(447, 320, 447, 345);
  noStroke();

  //Chimenea
  fill(120);
  rect(430, 250, 20, 40);
}

//ARBOL (HOJAS CON MOUSE)
function drawTree() {
  let x = 650;
  let y = 350;

  //tronco
  fill(101, 67, 33);
  rect(x - 10, y, 20, 80);

  //movimiento según mouse
  let sway = map(mouseX, 0, width, -20, 20);

  fill(34, 139, 34);
  ellipse(x + sway, y - 20, 80, 80);
  ellipse(x - 20 + sway, y - 10, 60, 60);
  ellipse(x + 20 + sway, y - 10, 60, 60);
}

//SOL
function drawSun() {
  fill(255, 204, 0);
  ellipse(700, 80, 80);
}

//LUNA
function drawMoon() {
  fill(230);
  ellipse(700, 80, 60);
}

//NUBES
function drawClouds() {
  let x = cloudX % (width + 300) - 150;

  drawCloud(x, 100);
  drawCloud(x + 250, 150);
}

function drawCloud(x, y) {
  fill(255);
  ellipse(x, y, 60);
  ellipse(x + 30, y - 10, 70);
  ellipse(x + 60, y, 60);
  ellipse(x + 30, y + 10, 65);
}

//ESTRELLAS
function drawStars() {
  fill(255);
  for (let s of stars) {
    circle(s.x, s.y, s.size);
  }
}

//RELOJ
function drawClock() {
  let cx = 100;
  let cy = 100;

  fill(255);
  ellipse(cx, cy, 80);

  let hr = hour();
  let mn = minute();
  let sc = second();

  stroke(255, 0, 0);
  let secAngle = map(sc, 0, 60, 0, TWO_PI) - HALF_PI;
  line(cx, cy, cx + cos(secAngle) * 30, cy + sin(secAngle) * 30);

  stroke(0);
  let minAngle = map(mn, 0, 60, 0, TWO_PI) - HALF_PI;
  line(cx, cy, cx + cos(minAngle) * 25, cy + sin(minAngle) * 25);

  strokeWeight(3);
  let hrAngle = map(hr % 12, 0, 12, 0, TWO_PI) - HALF_PI;
  line(cx, cy, cx + cos(hrAngle) * 20, cy + sin(hrAngle) * 20);

  strokeWeight(1);
}

//TEXTO
function drawText() {
  fill(0);
  textSize(14);
  text("Escena interactiva", 10, height - 10);
}
