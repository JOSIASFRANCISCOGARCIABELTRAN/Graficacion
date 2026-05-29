let x; 
function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(220); 
    let t = mouseX / width; 
    x = lerp(100, 500, t); 
    circle(x, 200, 50); 
}