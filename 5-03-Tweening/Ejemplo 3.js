function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(20); 
    let t = (sin(frameCount * 0.03) + 1) / 2; 
    let s = lerp(50, 200, t); 
    fill(255, 150, 100); 
    circle(300, 200, s); 
}