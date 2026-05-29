let x = 0; 

function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(220); 
    circle(x, 200, 50); 
    x = x + 2; 
}