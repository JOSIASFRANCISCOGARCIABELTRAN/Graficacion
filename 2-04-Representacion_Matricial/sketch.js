function aplicarM(M,p) {
  let x=M[0][0]*p.x+M[0][1]*p.y+M[0][2];
  let y=M[1][0]*p.x+M[1][1]*p.y+M[1][2];
  return {x,y};
}

function matrizRT(ang,tx,ty){
  return [
    [cos(ang), -sin(ang), tx],
    [sin(ang),  cos(ang), ty]
  ];
}

function transformarPoligono(M, puntos){
  let res=[];
  for(let p of puntos){
    res.push(aplicarM(M,p));
  }
  return res;
}

function dibujarPoligono(puntos){
  beginShape();
  for(let p of puntos){
    vertex(p.x,p.y);
  }
  endShape(CLOSE);
}

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(240);

  let ang = frameCount*0.05;

  // rectángulo centrado en origen
  let rectangulo=[
    {x:0, y:-15},
    {x:120, y:-15},
    {x:120, y:15},
    {x:0, y:15}
  ];

  for(let i=0;i<4;i++){

    let M = matrizRT(
      ang + i*HALF_PI,
      width/2,
      height/2
    );

    let r2 = transformarPoligono(M, rectangulo);

    fill(180,100,200);
    stroke(0);
    dibujarPoligono(r2);
  }
}

