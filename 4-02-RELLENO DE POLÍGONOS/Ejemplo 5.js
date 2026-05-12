function setup() {
    createCanvas(700, 400, WEBGL);
}

function draw() {
    background(30);
    orbitControl();
    ambientLight(50);
    pointLight(255, 255, 255, 0, -100, 200);
    push();
    translate(-180, 0, 0);
    ambientMaterial(200, 80, 80);
    sphere(80);
    pop();
    push();
    translate(180, 0, 0);
    specularMaterial(220);
    shininess(50);
    sphere(80);
    pop();
}