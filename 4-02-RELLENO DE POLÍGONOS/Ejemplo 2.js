function setup() {
    createCanvas(500, 400);
}

function draw() {
    for (let i = 0; i < width; i++) {
        let t = i / width;
        let r = lerp(255, 0, t);
        let g = 0;
        let b = lerp(0, 255, t);
        stroke(r, g, b);
        line(i, 0, i, height);
    }
}