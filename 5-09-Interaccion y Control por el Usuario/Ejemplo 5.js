function setup() { 
    createCanvas(800, 500, WEBGL); 
} 

function draw() { 
    background(20); 
    orbitControl(); 
    
  
    ambientLight(60); 
    directionalLight(255, 255, 255, 1, 1, -1); 
    
   
    rotateY(frameCount * 0.01); 
    
    
    fill(100, 200, 255);
    noStroke();
    box(150); 
    
}