import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

function Scene() {
  const material = <meshStandardMaterial roughness={0.4} />;

  const sphereRef = useRef<Mesh>();
  const boxRef = useRef<Mesh>();
  const torusRef = useRef<Mesh>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    sphereRef.current!.rotation.y = 0.1 * elapsedTime;
    boxRef.current!.rotation.y = 0.1 * elapsedTime;
    torusRef.current!.rotation.y = 0.1 * elapsedTime;

    sphereRef.current!.rotation.x = 0.15 * elapsedTime;
    boxRef.current!.rotation.x = 0.15 * elapsedTime;
    torusRef.current!.rotation.x = 0.15 * elapsedTime;
  });

  return (
    <>
      <mesh position={[-1.5, 0, 0]} ref={sphereRef}>
        {material}
        <sphereGeometry args={[0.5, 32, 32]} />
      </mesh>
      <mesh position={[0, 0, 0]} ref={boxRef}>
        {material}
        <boxGeometry args={[0.75, 0.75, 0.75]} />
      </mesh>
      <mesh position={[1.5, 0, 0]} ref={torusRef}>
        {material}
        <torusGeometry args={[0.3, 0.2, 32, 64]} />
      </mesh>

      <mesh position={[0, -0.65, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
        {material}
        <planeGeometry args={[5, 5]} />
      </mesh>
    </>
  );
}

export default function Lights() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
      <ambientLight args={[0xffffff, 0.5]} />
      <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} />
      <axesHelper />
    </Canvas>
  );
}
