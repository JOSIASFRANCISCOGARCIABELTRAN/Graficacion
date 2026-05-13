function setup(){
    createCanvas(800,500,WEBGL);
}

function draw(){
    background(20);
    orbitControl();
    // luces
    ambientLight(40);
    directionalLight(255,255,255, 1,1,-1);
    pointLight(255,200,200, 0,-150,200);
    // esfera
    push();
    translate(-200,0,0);
    specularMaterial(255);
    shininess(100);
    sphere(80);
    pop();
    // cubo
        push();
    translate(0,0,0);
    ambientMaterial(200,50,50);
    box(120);
    pop();
    // toro
    push();
    translate(200,0,0);
    normalMaterial();
    torus(80,20);
    pop();
}