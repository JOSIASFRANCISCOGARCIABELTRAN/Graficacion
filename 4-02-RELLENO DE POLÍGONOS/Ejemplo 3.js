function setup() {
    createCanvas(500, 400, WEBGL);
}

function draw() {
    background(220);
    rotateY(frameCount * 0.01);
    fill(200, 80, 80);
    box(120);
}