import { 
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  TextureLoader,
  MeshStandardMaterial,
  TetrahedronGeometry,
} from 'three';
import { World } from '../../world/world';
import { BoxGeometry } from 'three';

export default class pyramid {
  pyramid: Mesh;
  world: World;
  reachedLeft: boolean = false;
  scene: Scene;

  constructor (
    size: number, 
    newWorld: World,
    texturePath: string,
  ) {

    // create a default (white) Basic material
    const texture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_albedo.png');
    const aoTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_ao.png');
    const metalTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_metallic.png');
    const normalTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_normal-ogl.png');
    const roughTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_roughness.png')
    const geometry = new TetrahedronGeometry(size, 0);
    const material = new MeshStandardMaterial({ 
      color: 0xffffff,
      wireframe: false,
      aoMap: aoTexture,
      map: texture,
      metalnessMap: metalTexture,
      normalMap: normalTexture,
      roughnessMap: roughTexture
    });
    const newPyramid = new Mesh(geometry, material);
    
    this.pyramid = newPyramid;
    this.pyramid.position.y = -2;

    this.world = newWorld;
    this.scene = this.world.getScene();
    this.scene.add(newPyramid);
  }

  rotate = () => {
    this.pyramid.rotateX(0.01);
    requestAnimationFrame(this.rotate)
  }
  moveSideways = () => {
    // let scene = this.world.getScene();
    requestAnimationFrame(this.moveSideways)
    if (this.pyramid.position.x > -5 && this.reachedLeft === false) {
      this.pyramid.position.x -= 0.01;
    } else if (this.pyramid.position.x <= -5 && this.reachedLeft === false) {
      this.pyramid.position.x += 0.01;
      this.reachedLeft = true;
    } else if (this.pyramid.position.x <= 5 && this.reachedLeft) {
      this.pyramid.position.x += 0.01;
    } else {
      this.reachedLeft = false;
      this.pyramid.position.x -= 0.01;
    }
    // pyramid.position.x += 0.01;
    // console.log(pyramid.position.x);
    // pyramid.rotation.y += 0.01;
    // this.renderer.render(this.scene, this.camera);
  }
}