import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import useConstant from "use-constant";
import gsap from "gsap";

import { Leva, folder, button, useControls } from "leva";

const axisControl = {
  value: 0,
  min: -5,
  max: 5,
  step: 0.1,
};

function useSceneControls() {
  return useControls({
    Positions: folder({
      x: axisControl,
      y: axisControl,
      z: axisControl,
    }),
    Mesh: folder({
      wireframe: true,
      size: {
        value: 1,
        min: 1,
        max: 5,
        step: 1,
      },
      color: "red",
    }),
  });
}

function Scene() {
  const { wireframe, size, color, x, y, z } = useSceneControls();

  const meshRef = useRef<THREE.Mesh>();
  useControls({
    Buttons: folder({
      spin: button(() => {
        const mesh = meshRef.current!;
        gsap.to(mesh.rotation, {
          duration: 1,
          y: mesh.rotation.y + Math.PI * 2,
        });
      }),
    }),
  });

  return (
    <>
      <mesh position={[x, y, z]} ref={meshRef}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={color} wireframe={wireframe} />
      </mesh>
      <axesHelper />
    </>
  );
}

export default function Debug() {
  return (
    <>
      <Canvas>
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
  );
}
