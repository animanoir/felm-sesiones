// batería fantasma | sesión 0.2 | fantasma en la máquina

let kick1, kick2, snare1, snare2

let amplitud

let fondoColor = 0

// cargar todos los samples
function preload() {
  kick1 = loadSound('./jdilla/kick1.wav')
  kick2 = loadSound('./jdilla/kick2.wav')
  snare1 = loadSound('./jdilla/snare1.wav')
  snare2 = loadSound('./jdilla/snare2.wav')
}


oscar.comer()

function setup() {
  amplitud = new p5.Amplitude()

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  frameRate(60)

  fill(255)

  textSize(20)
  // fill(255)
  strokeWeight(10)


}

function draw() {
  background(fondoColor)

  text('kick1 = a\nkick2 = s\nsnare1 = b\nsnare2 = n', 10, 30)

  let nivel = amplitud.getLevel()
  let tamano = map(nivel, 0, 1, 100, 1300)
  ellipse(width / 2, height / 2, tamano, tamano)
  rect((width / 2) + 200, height / 2, tamano, tamano)

}

function mouseClicked(){
  remove()
}

function keyPressed() {
  console.log(key)
  fondoColor = color(Math.floor(random(255)), Math.floor(random(255)), Math.floor(random(255)))
  switch (key) {
    case 'a':
      kick1.play()
      break;
    case 's':
      kick2.play()
      break;
    case 'b':
      snare1.play()
      break;
    case 'n':
      snare2.play()
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}