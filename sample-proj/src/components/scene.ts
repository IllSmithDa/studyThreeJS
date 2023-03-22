import { Color, Scene, TextureLoader } from 'three';

function createScene(filePath: string): Scene {
  
  const scene = new Scene();

  const texture = new TextureLoader().load(filePath);

  scene.background = texture;

  return scene;
}

export { createScene };