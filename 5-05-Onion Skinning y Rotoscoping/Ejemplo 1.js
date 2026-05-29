let posiciones = []; 
function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(20); 
    let x = mouseX; 
    let y = mouseY;
    posiciones.push({x, y}); 
    // limitar historial 
    if (posiciones.length > 20) { 
        posiciones.shift(); 
    } 
    // dibujar trails 
    for (let i = 0; i < posiciones.length; i++) { 
        let alpha = map(i, 0, posiciones.length, 20, 255); 
        fill(100, 200, 255, alpha); 
        noStroke(); 
        circle(posiciones[i].x, posiciones[i].y, 40); 
    } 
}
