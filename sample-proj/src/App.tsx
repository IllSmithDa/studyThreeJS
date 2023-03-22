import React from 'react';
import { useEffect } from 'react';
import { World } from './world/world';
import Circle from './components/Geo/Circle';
import { BoxGeometry, CircleGeometry, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import Cube from './components/Geo/Cube';


function App() {
  let world: World;
  let camera:PerspectiveCamera;
  let renderer: WebGLRenderer;
  let cube: BoxGeometry;
  let scene: Scene;
  let circle: CircleGeometry;
  let reachedLeft = false;
  // const render = () => {
  //   // draw a single frame
  //   scene = world.getScene();
  //   requestAnimationFrame(render)
  //   if (circle.position.x > -10 && reachedLeft === false) {
  //     circle.position.x -= 0.01;
  //   } else if (circle.position.x <= -10 && reachedLeft === false) {
  //     circle.position.x += 0.01;
  //     reachedLeft = true;
  //   } else if (circle.position.x <= 10 && reachedLeft) {
  //     circle.position.x += 0.01;
  //   } else {
  //     reachedLeft = false;
  //     circle.position.x -= 0.01;
  //   }
  //   // circle.position.x += 0.01;
  //   // console.log(circle.position.x);
  //   // circle.rotation.y += 0.01;
  //   renderer.render(scene, camera);
  // }
  useEffect(() => {
    // Get a reference to the container element
    /*
    const container = document.querySelector('#scene-container');


    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
    cube = createCube();

    scene.add(cube);
    render();
    */
   const newCanvas = document.getElementById('scene-container') as HTMLCanvasElement;

   world = new World('./src/textures/field-corn-air.jpeg', newCanvas);
   scene = world.getScene();
   camera = world.getCamera();
   renderer = world.getRenderer();


   // let newCube = new Cube(1, 64, world, './src/textures/ornatebrass1-bl/ornate-brass_albedo.png');
   let newCube = new Cube(1, 64, world, './src/textures/Metal_Mesh_003_basecolor.jpg');
   let newCircle = new Circle(1, 64, world, './src/textures/field-corn-air.jpeg');
   newCube.moveSideways();
   // newCircle.moveSideways();
   
   world.renderAll();
  }, []) 
  return (
    <main>
      <canvas id="scene-container">
      </canvas>
    </main>
  )
}

export default App
