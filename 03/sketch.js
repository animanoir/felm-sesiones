console.info('sketch.js corriendo...')



// Escenario

const resolucion = {
  ancho: window.innerWidth,
  alto: window.innerHeight
}


const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, resolucion.ancho / resolucion.alto, 0.1, 1000);

// Renderizador

const renderizador = new THREE.WebGLRenderer();
renderizador.setClearColor(0x000000)
renderizador.setSize(window.innerWidth, window.innerHeight);

// Hace el canvas responsivo

window.addEventListener('resize', () => {
  resolucion.ancho = window.innerWidth
  resolucion.alto = window.innerHeight

  camara.aspect = resolucion.ancho / resolucion.alto
  camara.updateProjectionMatrix()

  renderizador.setSize(resolucion.ancho, resolucion.alto)
  renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Inserta un canvas con el 3D dentro del HTML

document.body.appendChild(renderizador.domElement);