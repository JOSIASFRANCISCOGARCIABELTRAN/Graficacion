let colorActivo = false; 

function setup() { 
    createCanvas(600, 400); 
} 

function draw() { 
    background(30); 
    

    if (colorActivo) { 
        fill(255, 100, 100); 
    } else { 
        fill(100, 200, 255); 
    } 
    
    noStroke();
    rect(250, 150, 100, 100); 
} 

function mousePressed() { 
    
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { 
        colorActivo = !colorActivo; // Invierte el valor booleano
    } 
}