import { AmbientLight, Scene, SpotLight } from "three";

export function ambientLightning(scene: Scene) {
  const ambientLight = new AmbientLight(0xffffff, 0.5);
  ambientLight.castShadow = true;
  scene.add(ambientLight);

  const spotLight = new SpotLight(0xffffff, 1);
  spotLight.castShadow = true;
  spotLight.position.set(0, 64, 32);
  scene.add(spotLight);
}