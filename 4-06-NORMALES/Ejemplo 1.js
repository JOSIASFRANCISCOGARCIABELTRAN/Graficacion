function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(220);
    orbitControl();
    normalMaterial();
    sphere(100);
}