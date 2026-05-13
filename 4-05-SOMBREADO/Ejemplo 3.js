function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(20);
    ambientLight(40);
    directionalLight(255,255,255, 1,1,-1);
    specularMaterial(255);
    shininess(80);
    sphere(100);
}