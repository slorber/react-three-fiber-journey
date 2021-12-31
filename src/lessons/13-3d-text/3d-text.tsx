import React, { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

extend({ TextGeometry });

function Scene() {
  const fontUrl = new URL(
    "./fonts/helvetiker_regular.typeface.json",
    import.meta.url,
  ).href;

  const font = useLoader(FontLoader, fontUrl);

  const config = useMemo(
    () => ({
      font,
      size: 4,
      height: 1,

      curveSegments: 3,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    [font],
  );

  const text = "hello world";

  const textRef = useRef<any>();

  useLayoutEffect(() => {
    textRef.current.geometry.center();
  }, [text]);

  return (
    <mesh ref={textRef} position={[0, 0, 0]}>
      <meshBasicMaterial wireframe={true} />
      <textGeometry args={[text, config]} />
    </mesh>
  );
}

export default function Webpack() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
}
