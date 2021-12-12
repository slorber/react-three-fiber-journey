import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import useConstant from "use-constant";

function Triangle() {
  const position = useMemo(
    () =>
      new Float32Array([
        // First vertex
        0, 0, 0,
        // Second vertex
        0, 1, 0,
        // Third vertex
        1, 0, 0,
      ]),
    [],
  );

  return (
    <bufferGeometry>
      <bufferAttribute attach="attributes-position" args={[position, 3]} />
    </bufferGeometry>
  );
}

function CustomGeometry() {
  const count = 20;
  const size = 1;

  const position = useMemo(() => {
    const values = [...Array(count * 3 * 3).keys()].flatMap((index) => {
      return (Math.random() - 0.5) * size;
    });
    return new Float32Array(values);
  }, [count, size]);

  return (
    <bufferGeometry>
      <bufferAttribute attach="attributes-position" args={[position, 3]} />
    </bufferGeometry>
  );
}

function Scene() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshBasicMaterial color={"red"} wireframe />
      </mesh>

      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[1, 10, 5]} />
        <meshBasicMaterial color={"green"} wireframe />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <Triangle />
        <meshBasicMaterial color={"blue"} wireframe />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <CustomGeometry />
        <meshBasicMaterial color={"lime"} wireframe />
      </mesh>
      <axesHelper />
    </>
  );
}

export default function Geometries() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}
