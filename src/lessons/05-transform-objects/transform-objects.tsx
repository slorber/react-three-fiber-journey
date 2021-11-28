import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(new THREE.Vector3(2, 1, 0));
  }, [camera]);

  return (
    <>
      <group
        position={[0, 0, 0]}
        rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}
      >
        <mesh position={[1, 1, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <mesh position={[-1, 2, -1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"cyan"} />
        </mesh>
        <mesh position={[-1, -3, -3]} scale={[1, 2, 2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"lime"} />
        </mesh>
      </group>
      <axesHelper />
    </>
  );
}

export default function TransformObjects() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
