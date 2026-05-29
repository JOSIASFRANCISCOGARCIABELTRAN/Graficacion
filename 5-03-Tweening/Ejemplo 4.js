function setup() { 
    createCanvas(600, 400); 
} 

function draw() {
    background(30); 
    translate(300, 200); 
    let angulo = lerp(0, TWO_PI, (sin(frameCount * 0.02)+1)/2); 
    rotate(angulo); 
    fill(100, 255, 150); 
    rectMode(CENTER); 
    rect(0, 0, 120, 120); 
}