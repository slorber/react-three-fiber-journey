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

export default function Cameras() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;

    function handleDoubleClick() {
      if (!document.fullscreenElement) {
        canvas.requestFullscreen && canvas.requestFullscreen();
      } else {
        document.exitFullscreen && document.exitFullscreen();
      }
    }

    canvas.addEventListener("dblclick", handleDoubleClick);
    return () => canvas.removeEventListener("dblclick", handleDoubleClick);
  }, []);

  return (
    <Canvas
      dpr={[
        1, // min pixel ratio
        2, // max pixel ratio
      ]}
      ref={canvasRef}
    >
      <Scene />
    </Canvas>
  );
}
