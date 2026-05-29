let x = -200; 
function setup() { 
    createCanvas(800, 500, WEBGL); 
} 

function draw() { 
    background(20); 
    ambientLight(80);
    pointLight(255,255,255,0,0,300); 
    push(); 
    translate(x, 0, 0); 
    sphere(80); 
    pop(); 
    x += 2; 
    if (x > 300) { 
        x = -300; 
    } 
}
