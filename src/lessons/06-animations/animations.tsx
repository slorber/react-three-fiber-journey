import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

function Scene() {
  const { clock, camera } = useThree();

  const mesh = useRef<THREE.Mesh>();

  /*
  useFrame((state, delta) => {
    mesh.current!.position.x = Math.sin(clock.elapsedTime);
    mesh.current!.position.y = Math.cos(clock.elapsedTime);
  });
   */

  /*
  useFrame((state, delta) => {
    camera.position.x = Math.sin(clock.elapsedTime);
    camera.position.y = Math.cos(clock.elapsedTime);
    camera.lookAt(mesh.current!.position);
  });
    */

  useEffect(() => {
    gsap.to(mesh.current!.position, { x: 2, duration: 1, delay: 1 });
    gsap.to(mesh.current!.position, { x: 0, duration: 1, delay: 2 });
  }, []);

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

export default function Animations() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
