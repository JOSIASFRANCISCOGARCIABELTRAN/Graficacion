let x = 300; 
let y = 200; 
function setup() { 
    createCanvas(700, 500); 
} 

function draw() { 
    background(20); 
    // movimiento 
    if (keyIsDown(65)) x -= 5; 
    // A 
    if (keyIsDown(68)) x += 5; 
    // D 
    if (keyIsDown(87)) y -= 5; 
    // W 
    if (keyIsDown(83)) y += 5; 
    //  personaje 
    fill(100,255,200); 
    circle(x,y,70); 
}