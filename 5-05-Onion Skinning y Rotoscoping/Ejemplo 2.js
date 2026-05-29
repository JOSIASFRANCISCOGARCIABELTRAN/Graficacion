let historial = []; 
function setup() { 
    createCanvas(700, 400); 
} 

function draw() { 
    background(30); 
    let x = 350 + sin(frameCount * 0.05) * 200; 
    historial.push(x); 
    if (historial.length > 30) { 
        historial.shift(); 
    } 
    for (let i = 0; i < historial.length; i++) { 
        let alpha = map(i, 0, historial.length, 10, 255); 
        fill(255, 100, 100, alpha); 
        circle(historial[i], 200, 50); 
    } 
}

