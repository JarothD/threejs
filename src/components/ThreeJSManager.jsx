import * as THREE from 'three';

class ThreeJSManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.cubes = new THREE.Group();
    this.counter = 0
    this.cubeSize = 1
    this.spacing = 0.3
    this.isSomething = true

    this.setupRenderer();
    this.createCubes();

    this.animate()
  }

  setupRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight - 100);
    const main = document.getElementById('main')
    console.log(main.children[0].id)
    if(main.children[1]){
        main.removeChild(main.children[1])
    }
    main.appendChild(this.renderer.domElement)
    this.camera.position.z = 10;
  }
  
  updateSpacing(spacing) {
      // Itera a través de todos los cubos y ajusta sus posiciones
  this.cubes.children.forEach(cube => {
    cube.position.set(
      cube.position.x * (spacing / this.spacing),
      cube.position.y * (spacing / this.spacing),
      cube.position.z * (spacing / this.spacing)
    );
  });

  // Finalmente, actualiza el valor de spacing a la nueva distancia
  this.spacing = spacing;
  }

  createCubes() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          for (let z = 0; z < 3; z++) {
            const geometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
            
            // Crear un material por vértice (cada esquina tendrá un color diferente)
            const materials = [
              new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Esquina 1 (rojo)
              new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Esquina 2 (verde)
              new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Esquina 3 (azul)
              new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Esquina 4 (amarillo)
              new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Esquina 5 (magenta)
              new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Esquina 6 (cian)
              new THREE.MeshBasicMaterial({ color: 0xffffff }), // Esquina 7 (blanco)
              new THREE.MeshBasicMaterial({ color: 0x000000 })  // Esquina 8 (negro)
            ];
            
            const cube = new THREE.Mesh(geometry, materials);
            cube.position.set(
              (x - 1) * (this.cubeSize + this.spacing),
              (y - 1) * (this.cubeSize + this.spacing),
              (z - 1) * (this.cubeSize + this.spacing)
              );
              
              if(z == 1 && y == 1 && x == 1){
                
              }else {
                this.addCube(cube);  
              }
          }
        }
      }
      this.addCubes()
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));    
    this.counter++

    if(this.counter > 0 && this.counter < 600) {
        this.cubes.rotation.x += 0.005;
        this.cubes.rotation.y += 0.007;
    }
    if(this.counter > 600 && this.counter < 1200) {
        this.cubes.rotation.x -= 0.005;
        this.cubes.rotation.y -= 0.007;
    }
    if(this.counter === 1200) {
        this.counter = 0

    }    
    this.renderer.render(this.scene, this.camera);
  }

  addCube(cube) {
    this.cubes.add(cube);
    
  }

  addCubes() {
    this.scene.add(this.cubes);
  }

  
}

export default ThreeJSManager;
