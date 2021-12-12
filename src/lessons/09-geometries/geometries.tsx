import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import useConstant from "use-constant";

function Scene() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <axesHelper />
    </>
  );
}

export default function Geometries() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
