let trail = []; 
function setup() { 
    createCanvas(800, 500); 
} 

function draw() { 
    background(0, 40); 
    let x = mouseX; 
    let y = mouseY; 
    trail.push({x, y}); 
    if (trail.length > 50) { 
        trail.shift(); 
    } 
    
    for (let i = 0; i < trail.length; i++) { 
        let s = map(i, 0, trail.length, 5, 40);
        fill(100, 255, 200); 
        noStroke(); 
        circle(trail[i].x, trail[i].y, s); 
    } 
}