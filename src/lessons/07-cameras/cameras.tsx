import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import useConstant from "use-constant";

function Scene() {
  const { clock, camera, size } = useThree();

  const mesh = useRef<THREE.Mesh>();

  /*
  useEffect(() => {
    function handleMouseEvent(e: MouseEvent) {
      // const x = e.clientX / size.width - 0.5;
      // const y = e.clientY / size.height - 0.5;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = -(e.clientY / window.innerHeight - 0.5);
      console.log({ x, y });
      camera.position.x = Math.sin(x * Math.PI * 2) * 3;
      camera.position.z = Math.cos(x * Math.PI * 2) * 3;
      camera.position.y = y * 5;

      camera.lookAt(mesh.current!.position);
    }

    window.addEventListener("mousemove", handleMouseEvent);
    return () => window.removeEventListener("mousemove", handleMouseEvent);
  }, []);
   */

  return (
    <>
      <mesh position={[0, 0, 0]} ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <axesHelper />
    </>
  );
}

export function Cameras() {
  /*
  const camera = useConstant(() => {
    const cam = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
    cam.position.z = 5;
    return cam;
  });
     */

  /*
  const camera = useConstant(() => {
      // TODO approximate value...
      const aspectRatio = window.innerWidth / window.innerHeight;

      const cam = new THREE.OrthographicCamera(
      -2 * aspectRatio,
      2 * aspectRatio,
      2,
      -2,
      0.1,
      100,
    );
    cam.position.z = 5;
    return cam;
  });

     */

  return (
    <Canvas
    // camera={camera}
    >
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}

export function CamerasDrei() {
  return (
    <Canvas>
      <PerspectiveCamera position={[0, 0, 5]} fov={70} aspect={1} makeDefault />
      <Scene />
    </Canvas>
  );
}

export default Cameras;
