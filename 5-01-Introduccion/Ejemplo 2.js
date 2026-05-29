function setup() { 
    createCanvas(400, 300); 
} 

function draw() { 
    background(0); 
    fill(255); 
    text("FPS: " + floor(frameRate()), 20, 20); 
}