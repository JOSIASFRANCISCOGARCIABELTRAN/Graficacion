function setup() {
    createCanvas(800, 500, WEBGL);
}

function draw() {
    background(230);
    orbitControl();

    //Cubo
    push();
    translate(-200, 0, 0);
    rotateY(frameCount*0.02);
    box(80);
    pop();

    //Esfera
    push();
    translate(0, 0, 0);
    sphere(60);
    pop();

    //Cilindro
    push();
    translate(200, 0, 0);
    rotateX(frameCount*0.02);
    cylinder(40, 120);
    pop();
}