// Definición del modelo (Cubo de alambre)
let vertices = [
  [-50, -50, -50], [50, -50, -50], [50, 50, -50], [-50, 50, -50],
  [-50, -50,  50], [50, -50,  50], [50, 50,  50], [-50, 50,  50]
];

let edges = [
  [0, 1], [1, 2], [2, 3], [3, 0], // Cara trasera
  [4, 5], [5, 6], [6, 7], [7, 4], // Cara frontal
  [0, 4], [1, 5], [2, 6], [3, 7]  // Conexiones laterales
];

function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(240);
  
  // Interacción y estilo
  orbitControl();
  stroke(0);
  strokeWeight(2);
  noFill();

  // Dibujado de las aristas
  for (let e of edges) {
    let v1 = vertices[e[0]];
    let v2 = vertices[e[1]];
    
    line(
      v1[0], v1[1], v1[2], 
      v2[0], v2[1], v2[2]
    );
  }
}