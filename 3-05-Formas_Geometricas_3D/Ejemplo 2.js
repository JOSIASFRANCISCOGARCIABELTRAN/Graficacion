function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(240);
    rotateY(frameCount*0.01);
    sphere(80);
}