function setup() { 
    createCanvas(700, 400, WEBGL); 
} 

function draw() { 
    background(240); 
    // Objeto 1 
    push(); 
    translate(-150, 0, 0); 
    rotateY(frameCount * 0.02); 
    box(80); 
    pop(); 
    // Objeto 2 
    push(); 
    translate(150, 0, 0); 
    sphere(50); 
    pop(); 
} 