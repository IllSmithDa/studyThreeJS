import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { createCamera } from '../components/camera'
// import { createCube } from '../components/cube.js';
import { createScene } from '../components/scene';
import { ambientLightning } from '../systems/lighting';
import { createRenderer } from '../systems/renderer';
// import { Resizer } from '../systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module


class World {
  // 1. Create an instance of the World app
  container: HTMLCanvasElement | undefined;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  constructor(scenePath: string, newCanvas: HTMLCanvasElement | undefined) {
    // this.container = document.querySelector('#scene-container') as HTMLCanvasElement; 
    this.camera = createCamera();
    this.scene = createScene(scenePath);
    this.renderer = createRenderer(newCanvas);
    ambientLightning(this.scene);
    // this.container?.append(this.renderer.domElement);
  }
  
  getScene =() => {
    return this.scene;
  }
  getCamera = () => {
    return this.camera;
  }
  getRenderer = () => {
    return this.renderer;
  }
  // 2. Render the scene
  // render() {
  //   // draw a single framef
  //   requestAnimationFrame(render)
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   renderer.render(scene, camera);
  // }
  renderAll = () => {
    // let scene = this.world.getScene();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.renderAll)
    // console.log(this.scene);
  }
}
  
export { World };