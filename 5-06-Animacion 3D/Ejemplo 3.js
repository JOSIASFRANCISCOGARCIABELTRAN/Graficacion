function setup() { 
    createCanvas(800, 500, WEBGL); 
} 

function draw() { 
    background(20); 
    orbitControl(); 
    ambientLight(50); 
    directionalLight(255,255,255,1,1,-1);
    // esfera 
    push(); 
    translate(-200,0,0); 
    sphere(80); 
    pop(); 
    // cubo 
    push(); 
    translate(200,0,0); 
    rotateY(frameCount * 0.02); 
    box(120); 
    pop(); 
}