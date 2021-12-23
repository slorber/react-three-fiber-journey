import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <mesh position={[0, 0, 0]}>
      <meshBasicMaterial color={"red"} />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

export default function Materials() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
}
