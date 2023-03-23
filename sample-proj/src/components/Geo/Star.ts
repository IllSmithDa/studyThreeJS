
import { 
  CircleGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  TextureLoader,
  MeshStandardMaterial,
  SphereGeometry,
} from 'three';
import { World } from '../../world/world';

export default class Circle {
  circle: Mesh;
  world: World;
  reachedLeft: boolean = false
  scene: Scene;

  constructor (
    size: number, 
    numberOfSides: number, 
    newWorld: World,
    texturePath: string
  ) {

    // create a default (white) Basic material
    // const texture = new TextureLoader().load(texturePath);
    const star = new CircleGeometry(1, 32);
    const material = new MeshStandardMaterial({ 		
      color: 0x00aaff,
      wireframe: false,
    });
    const newCircle = new Mesh(star, material);
    this.circle = newCircle;

    this.world = newWorld;
    this.scene = this.world.getScene();
    this.scene.add(newCircle);
  }

   moveSideways = () => {
    // let scene = this.world.getScene();
    requestAnimationFrame(this.moveSideways)
    if (this.circle.position.x > -10 && this.reachedLeft === false) {
      this.circle.position.x -= 0.01;
    } else if (this.circle.position.x <= -10 && this.reachedLeft === false) {
      this.circle.position.x += 0.01;
      this.reachedLeft = true;
    } else if (this.circle.position.x <= 10 && this.reachedLeft) {
      this.circle.position.x += 0.01;
    } else {
      this.reachedLeft = false;
      this.circle.position.x -= 0.01;
    }
    // circle.position.x += 0.01;
    // console.log(circle.position.x);
    // circle.rotation.y += 0.01;
    // this.renderer.render(this.scene, this.camera);
  }
}