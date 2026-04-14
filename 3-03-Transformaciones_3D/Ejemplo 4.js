function setup() {
    createCanvas(700, 500, WEBGL);
}

function draw() {
    background(230);

    rotateY(frameCount*0.02);
    translate(150,0,0);
    scale(1.2);
    box(80);
}