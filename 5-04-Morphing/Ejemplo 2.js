let t = 0; 
function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(20); 
    translate(width/2, height/2); 
    fill(100, 200, 255); 
    beginShape(); 
    for (let a = 0; a < TWO_PI; a += PI/2) { 
        //círculo 
        let cx = cos(a) * 100; 
        let cy = sin(a) * 100; 
        // cuadrado 
        let sx = map(cos(a), -1, 1, -100, 100); 
        let sy = map(sin(a), -1, 1, -100, 100); 
        // interpolación 
        let x = lerp(cx, sx, t); 
        let y = lerp(cy, sy, t); 
        vertex(x, y); 
    } 
    endShape(CLOSE); 
    t += 0.01;

    if (t > 1) { 
        t = 0; 
    } 
}

