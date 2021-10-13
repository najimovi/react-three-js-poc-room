import React from 'react';
import {useGLTF} from '@react-three/drei/useGLTF';
import {useTexture} from '@react-three/drei';

useGLTF.preload('room.glb');

const Textured = ({materials, nodes}) => {
  const [colorMap, normalMap] = useTexture([
    'Fabric023_1K_Color.jpg',
    'Fabric023_1K_NormalGL.jpg',
  ]);
  return (
    <group>
      {colorMap && (
        <mesh
          material={materials.All}
          geometry={nodes.Carpet.geometry}
          position={[-0.22, 0.01, 0.09]}
          rotation={[0, -0.26, 0]}
        >
          <meshBasicMaterial
            displacementScale={0.01}
            map={colorMap}
            normalMap={normalMap}
          />
        </mesh>
      )}
    </group>
  );
};

const Model = (props) => {
  const {nodes, materials} = useGLTF('room.glb');
  return (
    <group {...props} dispose={null}>
      <Textured nodes={nodes} materials={materials} />
      <mesh
        material={materials.All}
        geometry={nodes.A.geometry}
        position={[-1.38, 1.62, 1.34]}
        rotation={[Math.PI / 2, 0, 1.02]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Door.geometry}
        position={[1.18, 1, 1.49]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Door_frame.geometry}
        position={[1.18, 1, 1.49]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Door_handle.geometry}
        position={[1.52, 0.99, 1.4]}
      />
      <mesh material={materials.All} geometry={nodes.Floor.geometry} />
      <mesh
        material={materials.All}
        geometry={nodes.Picture.geometry}
        position={[-0.31, 0.34, -0.23]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Picture_frame002.geometry}
      />
      <mesh
        material={materials.Wall}
        material-color="orange"
        geometry={nodes.Walls.geometry}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Window_void.geometry}
        position={[-1.99, 1.34, 0.01]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Bin.geometry}
        position={[0.24, 0, -1.21]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover.geometry}
        position={[-1.21, 0.17, 1.28]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover001.geometry}
        position={[-1.26, 0.16, 1.3]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover002.geometry}
        position={[-0.99, 0.42, 1.32]}
      >
        <mesh
          material={materials.All}
          geometry={nodes.Book_paper002.geometry}
          rotation={[0, -Math.PI / 6, -Math.PI]}
        />
      </mesh>
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover003.geometry}
        position={[-1.61, 0.54, 1.32]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover004.geometry}
        position={[-1.67, 0.52, 1.34]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover005.geometry}
        position={[-1.76, 0.5, 1.31]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover008.geometry}
        position={[1.89, 1.56, 0.11]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover010.geometry}
        position={[-1.46, 1.58, 1.33]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_cover011.geometry}
        position={[-1.51, 1.57, 1.34]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper.geometry}
        position={[-1.21, 0.17, 1.28]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper001.geometry}
        position={[-1.26, 0.16, 1.3]}
        scale={[0.9, 0.9, 0.9]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper003.geometry}
        position={[-1.61, 0.54, 1.32]}
        scale={[1.09, 1.09, 1.09]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper004.geometry}
        position={[-1.67, 0.52, 1.34]}
        scale={[0.98, 0.98, 0.98]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper005.geometry}
        position={[-1.76, 0.5, 1.31]}
        scale={[0.8, 0.66, 0.8]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper009.geometry}
        position={[1.9, 1.6, -0.1]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper010.geometry}
        position={[-1.46, 1.58, 1.33]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Book_paper011.geometry}
        position={[-1.51, 1.57, 1.34]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.9, 0.9, 0.9]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Box.geometry}
        position={[-0.62, 0.42, 1.33]}
      >
        <mesh
          material={materials.All}
          geometry={nodes.Box_hole.geometry}
          scale={[0.11, 0.11, 0.12]}
        />
      </mesh>
      <mesh material={materials.All} geometry={nodes.Chair.geometry} />
      <mesh
        material={materials.All}
        geometry={nodes.Circle001.geometry}
        position={[0.94, 0.76, -0.91]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Circle002.geometry}
        position={[0.94, 0.76, -0.91]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Circle005.geometry}
        position={[1.82, -0.47, -0.3]}
        scale={[0.29, 0.29, 0.29]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Curtain_holder.geometry}
        position={[-1.92, 2.13, -0.76]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh material={materials.All} geometry={nodes.Curtain_left.geometry} />
      <mesh
        material={materials.All}
        geometry={nodes.Desk_lamp_base.geometry}
        position={[0.57, 0.75, -1.35]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Desk_lamp_cable.geometry}
        position={[0.57, 1, -1.35]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Desk_lamp_ending.geometry}
        position={[0.87, 1.04, -1.12]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Dirt.geometry}
        position={[-0.38, 0.32, 0.46]}
        scale={[0.6, 0.6, 0.6]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Hoop.geometry}
        position={[0.24, 0, -1.21]}
      />
      <mesh
        material={materials.All}
        geometry={nodes['Leaf#5'].geometry}
        position={[-0.78, 0.33, 1.34]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        material={materials.All}
        geometry={nodes['Notebook#1'].geometry}
        position={[0.59, 0.75, -1.07]}
        rotation={[0, 0.1, 0]}
      />
      <mesh
        material={materials.All}
        geometry={nodes['Paper#1'].geometry}
        position={[1.13, 0.76, -1.06]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Pedal.geometry}
        position={[0.24, 0.04, -1.05]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Pen.geometry}
        position={[0.94, 0.76, -0.91]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Plane001.geometry}
        position={[0.59, 0.75, -1.07]}
        rotation={[0, 0.1, 0]}
        scale={[0.09, 0.12, 0.12]}
      />
      <mesh material={materials.All} geometry={nodes.Plane009.geometry} />
      <mesh material={materials.All} geometry={nodes.Plane010.geometry} />
      <mesh material={materials.All} geometry={nodes.Pot.geometry} />
      <mesh
        material={materials.All}
        geometry={nodes.Standing_lamp.geometry}
        position={[-1.65, 0, -1.12]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Desk.geometry}
        position={[1.2, 0.75, -1.1]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Leg_back_left003.geometry}
        position={[1.92, 0, -0.78]}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Box001.geometry}
        position={[1.87, 1.49, 0.52]}
      >
        <mesh material={materials.All} geometry={nodes.Box_hole001.geometry} />
      </mesh>
      <mesh
        material={materials.All}
        geometry={nodes.Picture_frame001.geometry}
      />
      <mesh
        material={materials.All}
        geometry={nodes.Picture001.geometry}
        position={[-0.31, 0.34, -0.23]}
      />
      <mesh
        material={materials['Tiny lamp']}
        geometry={nodes.Tiny_lamp009.geometry}
        position={[-1.79, 1, 1.27]}
        rotation={[-1.57, 1.47, -1.57]}
      />
      <mesh
        material={materials.Lamp}
        geometry={nodes.Top.geometry}
        position={[-1.65, 1.04, -1.12]}
        scale={[0.6, 0.6, 0.6]}
      />
      <mesh material={materials.All} geometry={nodes.NurbsPath.geometry} />
    </group>
  );
};

export default Model;
