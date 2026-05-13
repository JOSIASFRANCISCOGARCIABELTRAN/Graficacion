function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(30);
    ambientLight(80);
    pointLight(255,255,255, 0,0,200);
    rotateY(frameCount * 0.01);
    fill(200,50,50);
    sphere(100);
}