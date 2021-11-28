import React from "react";
import { Canvas } from "@react-three/fiber";

export default function TransformObjects() {
  return (
    <Canvas>
      <mesh position={[1, 0, 0]}>
        <meshBasicMaterial color={"blue"} />
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <axesHelper />
    </Canvas>
  );
}
