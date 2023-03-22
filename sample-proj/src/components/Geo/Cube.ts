

import { 
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  TextureLoader,
  MeshStandardMaterial,
} from 'three';
import { World } from '../../world/world';
import { BoxGeometry } from 'three';

export default class Cube {
  cube: Mesh;
  world: World;
  reachedLeft: boolean = false;
  scene: Scene;

  constructor (
    size: number, 
    numberOfSides: number, 
    newWorld: World,
    texturePath: string,
  ) {

    // create a default (white) Basic material
    const texture = new TextureLoader().load(texturePath);
    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshStandardMaterial({ 
      color: 0xffffff,
      wireframe: false, 
      map: texture 
    });
    const newCube = new Mesh(geometry, material);
    this.cube = newCube;

    this.world = newWorld;
    this.scene = this.world.getScene();
    this.scene.add(newCube);
  }

   moveSideways = () => {
    // let scene = this.world.getScene();
    requestAnimationFrame(this.moveSideways)
    if (this.cube.position.x > -10 && this.reachedLeft === false) {
      this.cube.position.x -= 0.01;
    } else if (this.cube.position.x <= -10 && this.reachedLeft === false) {
      this.cube.position.x += 0.01;
      this.reachedLeft = true;
    } else if (this.cube.position.x <= 10 && this.reachedLeft) {
      this.cube.position.x += 0.01;
    } else {
      this.reachedLeft = false;
      this.cube.position.x -= 0.01;
    }
    // cube.position.x += 0.01;
    // console.log(cube.position.x);
    // cube.rotation.y += 0.01;
     // this.renderer.render(this.scene, this.camera);
  }
}