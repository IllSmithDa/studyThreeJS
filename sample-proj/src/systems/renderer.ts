import { WebGLRenderer } from 'three';

function createRenderer(newCanvas: HTMLCanvasElement | undefined) {
  const renderer = new WebGLRenderer({
    canvas: newCanvas,
    antialias: true,
  });
  renderer.setSize( window.innerWidth, window.innerHeight );
  // document?.getElementById('scene-container')?.appendChild( renderer.domElement );
  document.body.appendChild(renderer.domElement);
  return renderer;
}

export { createRenderer };