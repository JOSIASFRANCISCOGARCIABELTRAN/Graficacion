function setup() { 
    createCanvas(800, 500, WEBGL); 
} 

function draw() { 
    background(30); 
    ambientLight(60); 
    directionalLight(255,255,255,1,1,-1); 
    rotateX(frameCount * 0.01); 
    rotateY(frameCount * 0.02); 
    normalMaterial(); 
    box(150); 
}