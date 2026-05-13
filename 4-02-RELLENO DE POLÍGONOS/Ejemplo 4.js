let img;

function preload(){
    img =loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3c/Texture_example.jpg');
}

function setup(){
    createCanvas(800,500,WEBGL);
}

function draw(){
    background(30);
    orbitControl();
    // Color homogéneo
    push();
    translate(-250, 0, 0);
    fill(200,50,50);
    box(120);
    pop();
    // Degradado simulado
    push();
    translate(0, 0, 0);
    normalMaterial();
    sphere(90);
    pop();
    // Textura
    push();
    translate(250, 0, 0);
    texture(img);
    box(120);
    pop();
}