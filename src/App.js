import React, {Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import {Html, OrbitControls} from '@react-three/drei';
import Scene from './Scene.js';
import './styles.css';

function App() {
  return (
    <Canvas
      concurrent
      pixelRatio={[1, 2]}
      camera={{ position: [4,4, -4]}}
    >
      <ambientLight intensity={1.5} />
      <pointLight intensity={0.7} position={[0, 5, 0]} />
      <OrbitControls enableZoom={true} />
      <Suspense
        fallback={
          <Html>
            <div>Loading...</div>
          </Html>
        }
      >
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
