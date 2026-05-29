function setup() { 
    createCanvas(600, 400); 
    background(30); 
} 

function draw() { 
    background(30);
} 

function mousePressed() { 
    fill(random(255), random(255), random(255)); 
    noStroke();
    circle(mouseX, mouseY, 50); 
}