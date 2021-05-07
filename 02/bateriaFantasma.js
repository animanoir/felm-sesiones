// batería fantasma | sesión 0.2 | fantasma en la máquina

let kick1, kiick2, snare1, kick2

// cargar todos los samples
function preload() {
  kick1 = loadSound('./jdilla/kick1.wav')
  kick2 = loadSound('./jdilla/kick2.wav')
  snare1 = loadSound('./jdilla/snare1.wav')
  snare2 = loadSound('./jdilla/snare2.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0)
}

function keyPressed() {
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