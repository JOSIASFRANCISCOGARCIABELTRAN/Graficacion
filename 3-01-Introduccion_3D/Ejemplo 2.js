function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(220);

    rotateX(frameCount*0.01);
    rotateY(frameCount*0.01);

    box(120);
}