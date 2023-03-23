import { Color, Scene, BufferGeometry, Vector3, Float32BufferAttribute, MathUtils, PointsMaterial, Points } from 'three';

function createSpace(scene: Scene) {
  let starGeo = new BufferGeometry();
  const stars: number[] = [];
  for (let i = 0; i < 6000; i++) {
    const x = MathUtils.randFloatSpread( 2000 );
    const y = MathUtils.randFloatSpread( 2000 );
    const z = MathUtils.randFloatSpread( 2000 );
    stars.push(x, y, z);
  }
  starGeo.setAttribute( 'position', new Float32BufferAttribute( stars, 3 ) );

  const material = new PointsMaterial({ color: 0xffffff });

  const points = new Points(starGeo, material);
  scene.add(points);
  //const texture = new TextureLoader().load(filePath);

  // scene.background = texture;

  // return scene;
}

export default class Space {
  starGeo: BufferGeometry;
  points: Points;
  constructor(scene: Scene) {
    this.starGeo = new BufferGeometry();
    const stars: number[] = [];
    for (let i = 0; i < 6000; i++) {
      const x = MathUtils.randFloatSpread( 2000 );
      const y = MathUtils.randFloatSpread( 2000 );
      const z = MathUtils.randFloatSpread( 2000 );
      stars.push(x, y, z);
    }
    this.starGeo.setAttribute( 'position', new Float32BufferAttribute( stars, 3 ) );

    const material = new PointsMaterial({ color: 0xffffff, size: 0.3 });
  
    this.points = new Points(this.starGeo, material);
    scene.add(this.points);
  }
  animate = () => {
    this.starGeo.rotateY(0.0002)
    requestAnimationFrame(this.animate)
  }
}

export { createSpace };