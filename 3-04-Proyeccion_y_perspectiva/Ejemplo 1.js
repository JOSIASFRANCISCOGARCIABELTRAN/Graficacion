function setup() {
    createCanvas(600, 400, WEBGL);
    ortho(); //proyeccion ortografica
}

function draw() {
    background(220);

    push();
    translate(-100, 0, 0);
    box(80);
    pop();

    push();
    translate(100, 0, -200);
    box(80);
    pop();
}