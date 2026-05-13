function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(30);
    ambientLight(50);
    directionalLight(255,255,255, 1,1,-1);
    specularMaterial(255);
    shininess(50);
    sphere(100);
}