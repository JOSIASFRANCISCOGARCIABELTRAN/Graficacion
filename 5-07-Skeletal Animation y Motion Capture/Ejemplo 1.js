function setup() { 
    createCanvas(800, 500); 
} 

function draw() { 
    background(30); 
    translate(400, 250); 
    // hombro
    rotate(sin(frameCount * 0.02) * 0.5); 
    stroke(255); 
    strokeWeight(15); 
    line(0, 0, 120, 0); 
    translate(120, 0); 
    // codo 
    rotate(cos(frameCount * 0.03) * 0.8); 
    line(0, 0, 100, 0); 
}
