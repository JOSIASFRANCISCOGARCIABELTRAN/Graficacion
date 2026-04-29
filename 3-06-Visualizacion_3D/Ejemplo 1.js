function setup() { 
    createCanvas(700, 500, WEBGL); 
} 

function draw() { 
    background(230); 
    camera(0, 0, 300, 0, 0, 0, 0, 1, 0); 
    box(100); 
} 