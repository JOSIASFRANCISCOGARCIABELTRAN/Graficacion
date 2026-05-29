let x = 300; 
let y = 200;

function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(30); 
    fill(100, 200, 255); 
    circle(x, y, 60); 
    if (keyIsDown(LEFT_ARROW)) { 
        x -= 5; 
    } 
    if (keyIsDown(RIGHT_ARROW)) { 
        x += 5; 
    } 
    if (keyIsDown(UP_ARROW)) { 
        y -= 5; 
    } 
    if (keyIsDown(DOWN_ARROW)) { 
        y += 5; 
    } 
}