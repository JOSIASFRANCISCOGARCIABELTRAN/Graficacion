let img;
function preload(){
    img = loadImage('textura.jpg');
}

function setup(){
    createCanvas(400,400,WEBGL);
}

function draw(){
    background(220);
    rotateY(frameCount * 0.01);
    texture(img);
    box(150);
}