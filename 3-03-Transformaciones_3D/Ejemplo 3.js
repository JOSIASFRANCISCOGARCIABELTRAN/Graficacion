function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(220);

    rotateX(frameCount*0.02);
    box(100);
}