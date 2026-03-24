function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(220);
    orbitControl();

    rotateY(frameCount*0.01);

    fill(100,150,240);
    stroke(0);

    beginShape(QUADS);

    //Cara frontal
    vertex(-50,-50,50);
    vertex(50,-50,50);
    vertex(50,50,50);
    vertex(-50,50,50);

    //Cara trasera
    vertex(-50,-50,-50);
    vertex(50,-50,-50);
    vertex(50,50,-50);
    vertex(-50,50,-50);

    endShape();
}