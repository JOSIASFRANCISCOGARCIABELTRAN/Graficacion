function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(20); 
    
 
    let d = dist(mouseX, mouseY, 300, 200); 
    

    if (d < 50) { 
        fill(255, 100, 100); 
    } else { 
        fill(100, 255, 200); 
    } 
    
    noStroke();
    circle(300, 200, 100); 
}