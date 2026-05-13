function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(30);
    ambientLight(60);
    directionalLight(255,255,255, 1,1,-1);
    rotateY(frameCount * 0.01);
    sphere(100);
}