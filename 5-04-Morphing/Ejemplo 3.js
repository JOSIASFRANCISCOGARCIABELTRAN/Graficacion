function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(30);
    let t = (sin(frameCount * 0.02)+1)/2; 
    let r = lerp(255, 0, t); 
    let b = lerp(0, 255, t); 
    fill(r, 100, b); 
    circle(300, 200, 150); 
}