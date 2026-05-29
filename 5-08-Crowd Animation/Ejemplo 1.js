let particles = []; 

function setup() { 
    createCanvas(800, 500); 
} 

function draw() { 
    background(20); 
    
    particles.push({
        x: mouseX,
        y: mouseY, 
        vx: random(-2, 2), 
        vy: random(-2, 2), 
        life: 255
    }); 
    
    for (let p of particles) { 
        p.x += p.vx; 
        p.y += p.vy; 
        p.life -= 3; 
        fill(100, 200, 255, p.life); 
        noStroke(); 
        circle(p.x, p.y, 10); 
    } 
    
    particles = particles.filter(p => p.life > 0);
}