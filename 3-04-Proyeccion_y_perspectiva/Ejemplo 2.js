function setup() {
    createCanvas(700, 500, WEBGL);
}

function draw() {
    background(240);
    orbitControl();

    //Cubo cercano
    push();
    translate(-150, 0, 50);
    fill(200, 50, 50);
    box(80);
    pop();

    //Cubo lejano
    push();
    translate(150, 0, -300);
    fill(50, 50, 200);
    box(80);
    pop();
}