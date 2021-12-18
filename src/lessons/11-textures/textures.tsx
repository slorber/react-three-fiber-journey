import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import useConstant from "use-constant";
import gsap from "gsap";

import { Leva, folder, button, useControls } from "leva";

function Scene() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} wireframe={true} />
      </mesh>
      <axesHelper />
    </>
  );
}

export default function Textures() {
  return (
    <>
      <Canvas>
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
  );
}
