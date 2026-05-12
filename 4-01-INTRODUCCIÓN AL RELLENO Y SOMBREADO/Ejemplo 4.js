function setup() {
    createCanvas(500, 400, WEBGL);
}

function draw() {
    background(30);
    ambientLight(60);
    directionalLight(255, 255, 255, 1, 1, -1);
    rotateY(frameCount * 0.01);
    noStroke();
    fill(200, 80, 80);
    sphere(100);
}