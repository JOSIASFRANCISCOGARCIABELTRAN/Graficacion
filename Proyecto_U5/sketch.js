let estrellas = [];

// Posición de la nave
let naveX = 0;
let naveY = -120;
let naveZ = 0;

const planetas = [
  { nombre: "Mercurio", radio: 120, tam: 8, color: [180,180,180], vel: 0.04 },
  { nombre: "Venus", radio: 180, tam: 12, color: [220,180,80], vel: 0.03 },
  { nombre: "Tierra", radio: 260, tam: 14, color: [0,120,255], vel: 0.025 },
  { nombre: "Marte", radio: 340, tam: 11, color: [255,80,50], vel: 0.02 },
  { nombre: "Júpiter", radio: 470, tam: 35, color: [220,180,120], vel: 0.015 },
  { nombre: "Saturno", radio: 620, tam: 30, color: [220,210,120], vel: 0.012 },
  { nombre: "Urano", radio: 760, tam: 22, color: [120,255,255], vel: 0.009 },
  { nombre: "Neptuno", radio: 900, tam: 22, color: [80,120,255], vel: 0.007 }
];

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  for(let i = 0; i < 800; i++){

    estrellas.push({
      x: random(-4000,4000),
      y: random(-4000,4000),
      z: random(-4000,4000)
    });
  }
}

function draw() {

  background(0);

  orbitControl();

  ambientLight(120);

  pointLight(
    255,
    255,
    255,
    0,
    0,
    0
  );

  controlarNave();

  dibujarEstrellas();

  dibujarOrbitas();

  dibujarSol();

  dibujarPlanetas();

  dibujarNave();

  dibujarHUD();
}

function controlarNave(){

  let v = 6;

  if(keyIsDown(87)) naveZ -= v; // W
  if(keyIsDown(83)) naveZ += v; // S
  if(keyIsDown(65)) naveX -= v; // A
  if(keyIsDown(68)) naveX += v; // D
  if(keyIsDown(81)) naveY -= v; // Q
  if(keyIsDown(69)) naveY += v; // E
}

function dibujarEstrellas(){

  noStroke();
  fill(255);

  for(let s of estrellas){

    push();

    translate(s.x,s.y,s.z);

    sphere(1.5);

    pop();
  }
}

function dibujarOrbitas(){

  stroke(70);
  noFill();

  for(let p of planetas){

    push();

    rotateX(HALF_PI);

    circle(0,0,p.radio * 2);

    pop();
  }

  noStroke();
}

function dibujarSol(){

  push();

  emissiveMaterial(255,220,0);

  sphere(100);
>
  pop();

  push();

  noFill();

  stroke(255,180,0);

  sphere(130);

  pop();

  noStroke();
}

function dibujarPlanetas(){

  for(let p of planetas){

    let angulo = frameCount * p.vel;

    let x = cos(angulo) * p.radio;
    let z = sin(angulo) * p.radio;

    push();

    translate(x,0,z);

    ambientMaterial(
      p.color[0],
      p.color[1],
      p.color[2]
    );

    rotateY(frameCount * 0.02);

    sphere(p.tam);

    if(p.nombre === "Saturno"){

      push();

      rotateX(HALF_PI);

      noFill();

      stroke(230);

      torus(45,2);

      pop();

      noStroke();
    }

    pop();
  }
}

function dibujarNave(){

  push();

  translate(
    naveX,
    naveY,
    naveZ
  );

  let t = (sin(frameCount * 0.03)+1)/2;

  let r = lerp(0,255,t);
  let b = lerp(255,0,t);

  ambientMaterial(r,100,b);

  rotateX(PI);

  // cuerpo principal
  cone(25,70);

  // cabina
  translate(0,-20,0);

  emissiveMaterial(150,220,255);

  sphere(12);

  pop();

  // motor brillante

  push();

  translate(
    naveX,
    naveY + 30,
    naveZ
  );

  emissiveMaterial(
    0,
    200,
    255
  );

  sphere(8);

  pop();
}

function dibujarHUD(){

  resetMatrix();

  fill(255);

  textSize(16);

  text("SISTEMA SOLAR 3D",20,30);
  text("Mouse: mover camara",20,55);
  text("Rueda: zoom",20,80);
  text("WASD: mover nave",20,105);
  text("Q/E: subir y bajar",20,130);
}

function windowResized(){

  resizeCanvas(
    windowWidth,
    windowHeight
  );
}