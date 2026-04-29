function setup() { 
    createCanvas(600, 400, WEBGL);
} 

function draw() { 
    background(230); 
    translate(100, 0, 0); 
    rotateY(frameCount * 0.02); 
    box(80); 
} 