function setup(){
    createCanvas(600,400,WEBGL);
}

function draw(){
    background(20);
    orbitControl();
    pointLight(255,255,255, mouseX - width/2, mouseY - height/2, 200);
    sphere(100);
}