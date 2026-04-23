function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(250);
    orbitControl();

    let r=80;

    stroke(0);
    noFill();

    for (let theta=0; theta<PI; theta+=0.2) {
        beginShape();
        for (let phi=0; phi<TWO_PI; phi+=0.2) {
            let x=r*sin(theta)*cos(phi);
            let y=r*sin(theta)*sin(phi);
            let z=r*cos(theta);

            vertex(x, y, z);
        }
        endShape();
    }
}
    