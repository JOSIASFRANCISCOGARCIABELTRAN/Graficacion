function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(230);
    rotateX(frameCount*0.01);
    cylinder(50, 120);
}
