import React from "react";
import { Canvas } from "@react-three/fiber";

export default function Webpack() {
  return (
    <Canvas>
      <mesh position={[1, -2, 0]}>
        <meshBasicMaterial color={"red"} />
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </Canvas>
  );
}
