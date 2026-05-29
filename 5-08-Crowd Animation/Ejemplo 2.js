let agents = []; 

function setup() {
    createCanvas(800, 600);
    

    for(let i = 0; i < 50; i++) { 
        agents.push({ 
            x: random(width), 
            y: random(height), 
            vx: random(-2, 2), 
            vy: random(-2, 2) 
        }); 
    } 
} 

function draw() { 
    background(20); 
    
    for(let a of agents) { 
        a.x += a.vx; 
        a.y += a.vy; 
        
       
        if(a.x < 0 || a.x > width) {
            a.vx *= -1; 
        }
       
        if(a.y < 0 || a.y > height) {
            a.vy *= -1; 
        }
        
        fill(255); 
        noStroke();
        circle(a.x, a.y, 8); 
    } 
}