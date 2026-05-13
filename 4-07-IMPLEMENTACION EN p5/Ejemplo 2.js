function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(20);
    ambientLight(50);
    directionalLight(255,255,255, 1,1,-1);
    specularMaterial(255);
    shininess(100);
    rotateY(frameCount * 0.01);
    sphere(100);
}