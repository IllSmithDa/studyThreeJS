import { 
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  TextureLoader,
  MeshStandardMaterial,
  TetrahedronGeometry,
  SphereGeometry,
} from 'three';
import { World } from '../../world/world';
import { BoxGeometry } from 'three';

export default class Sphere {
  sphere: Mesh;
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
    const displaceTexture = new TextureLoader().load('./src/textures/ornate-brass1-bl/ornate-braa_height.png')
    const metalTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_metallic.png');
    const normalTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_normal-ogl.png');
    const roughTexture = new TextureLoader().load('./src/textures/ornatebrass1-bl/ornate-brass_roughness.png');
    const earthTexture = new TextureLoader().load('./src/textures/earth_map.jpg')
    const geometry = new SphereGeometry(1, 32, 16);
    const material = new MeshStandardMaterial({ 
      color: 0xffffff,
      // wireframe: false,
      // aoMap: aoTexture,
      // displacementMap: displaceTexture,
      map: earthTexture,
      // metalnessMap: metalTexture,
      // normalMap: normalTexture,
      // roughnessMap: roughTexture
    });
    const newSphere = new Mesh(geometry, material);
    
    this.sphere = newSphere;
    // this.sphere.position.y = -2;

    this.world = newWorld;
    this.scene = this.world.getScene();
    this.scene.add(newSphere);
  }

  rotate = () => {
    // this.sphere.rotateZ(0.001);
    this.sphere.rotateY(-0.001);
    requestAnimationFrame(this.rotate)
  }
  moveSideways = () => {
    // let scene = this.world.getScene();
    requestAnimationFrame(this.moveSideways)
    if (this.sphere.position.x > -5 && this.reachedLeft === false) {
      this.sphere.position.x -= 0.01;
    } else if (this.sphere.position.x <= -5 && this.reachedLeft === false) {
      this.sphere.position.x += 0.01;
      this.reachedLeft = true;
    } else if (this.sphere.position.x <= 5 && this.reachedLeft) {
      this.sphere.position.x += 0.01;
    } else {
      this.reachedLeft = false;
      this.sphere.position.x -= 0.01;
    }
    // sphere.position.x += 0.01;
    // console.log(sphere.position.x);
    // sphere.rotation.y += 0.01;
    // this.renderer.render(this.scene, this.camera);
  }
}