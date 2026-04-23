function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(230);
    rotateY(frameCount*0.01);
    box(100);
}