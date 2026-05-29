function setup() { 
    createCanvas(600, 400); 
}

function draw() { 
    background(30); 
    let t = (sin(frameCount * 0.02) + 1) / 2; 
    let easing = t * t; 
    let x = lerp(100, 500, easing); 
    fill(100, 200, 255); 
    circle(x, 200, 60); 
}