let estrellas = [];

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < 350; i++) {

    estrellas.push({
      x: random(-2500, 2500),
      y: random(-2500, 2500),
      z: random(-2500, 2500),
      s: random(2, 5)
    });

  }

}

function draw() {

  background(3, 3, 18);

  orbitControl();

  ambientLight(60, 60, 90);

  directionalLight(
    255, 220, 180,
    1, 1, -1
  );

  directionalLight(
    100, 150, 255,
    -1, -0.5, -1
  );

  pointLight(
    0, 180, 255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );

  pointLight(
    255, 120, 180,
    0,
    0,
    0
  );

  for (let e of estrellas) {

    push();

    translate(e.x, e.y, e.z);

    noStroke();

    fill(255);

    sphere(e.s);

    pop();

  }

  push();

  rotateX(HALF_PI);

  translate(0, 0, 450);

  ambientMaterial(20, 20, 35);

  specularMaterial(60);

  shininess(10);

  plane(4000, 4000);

  pop();

  push();

  rotateY(frameCount * 0.003);

  emissiveMaterial(255, 180, 0);

  sphere(150);

  pointLight(
    255, 200, 80,
    0,
    0,
    0
  );

  pop();

  push();

  rotateY(frameCount * 0.01);

  translate(420, 0, 0);

  specularMaterial(80, 140, 255);

  shininess(120);

  sphere(60);

  pop();

  push();

  rotateY(frameCount * 0.007);

  translate(-550, 0, 0);

  ambientMaterial(220, 70, 70);

  rotateX(frameCount * 0.01);

  torus(130, 30);

  pop();

  push();

  rotateY(frameCount * 0.02);

  translate(0, -260, 0);

  normalMaterial();

  box(150);

  pop();

  push();

  rotateY(frameCount * 0.015);

  translate(0, 280, 0);

  specularMaterial(255);

  shininess(90);

  cone(90, 200);

  pop();

  push();

  translate(0, 0, -550);

  rotateX(frameCount * 0.02);

  rotateZ(frameCount * 0.01);

  ambientMaterial(0, 255, 180);

  specularMaterial(0, 255, 200);

  shininess(40);

  cylinder(90, 240);

  pop();

  push();

  noFill();

  stroke(0, 180, 255);

  strokeWeight(2);

  rotateY(frameCount * 0.004);

  sphere(500);

  pop();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

