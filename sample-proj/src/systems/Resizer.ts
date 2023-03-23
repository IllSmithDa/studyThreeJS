import { PerspectiveCamera, WebGLRenderer } from 'three';
class Resizer {
   container: HTMLCanvasElement | undefined;

  constructor(container:HTMLCanvasElement, camera: PerspectiveCamera , renderer: WebGLRenderer) {
    // Set the camera's aspect ratio
    camera.aspect = container.width / container.height;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.width, container.height);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };