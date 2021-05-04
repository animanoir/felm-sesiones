let cantidadFiguras = 100;
let transformacion = 0.0;
let velocidad = 1
let limite = 100.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  limite = windowWidth / cantidadFiguras;
  // rectMode(CENTER)
  noStroke();
  fill(255);
}

function draw() {
  // Variables
  let mouseXMap = map(mouseX, 0, width, 1, 30)
  let transformacionMap = map(transformacion, 0, width, 1, mouseXMap);

  background(0);
  for (let x = 0; x < cantidadFiguras; x++) {
    for (let y = 0; y < cantidadFiguras; y++) {
      let posX = (limite * x);
      let posY = (limite * y);
      let tamano = map(dist(posX, posY, windowWidth / 2, windowHeight / 2), 0, windowWidth / 2, 1, 5)
      rect(
        posX,
        posY,
        sin(transformacionMap * tamano) * limite,
        cos(transformacionMap * tamano) * limite
      );
    }
  }


  transformacion += TWO_PI / velocidad;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}