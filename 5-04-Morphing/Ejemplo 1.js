let t = 0; 
function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(30); 
    let x = lerp(150, 450, t); 
    fill(100, 200, 255); 
    circle(x, 200, 80); 
    t += 0.01; 
    if (t > 1) { 
        t = 0; 
    }
}
