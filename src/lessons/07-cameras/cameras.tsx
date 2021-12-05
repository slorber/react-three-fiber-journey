import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const { clock, camera } = useThree();

  const mesh = useRef<THREE.Mesh>();

  return (
    <>
      <mesh position={[1, 1, 1]} ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <axesHelper />
    </>
  );
}

export default function Cameras() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
