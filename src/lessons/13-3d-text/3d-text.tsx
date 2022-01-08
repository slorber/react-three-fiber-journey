import React, {
  ComponentProps,
  ComponentType,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import type { Vector3 } from "@react-three/fiber";

extend({ TextGeometry });

function Scene() {
  const font = useLoader(
    FontLoader,
    new URL("./fonts/helvetiker_regular.typeface.json", import.meta.url).href,
  );

  const matcapTexture = useLoader(
    TextureLoader,
    new URL("./textures/matcaps/1.png", import.meta.url).href,
  );

  const config = useMemo(
    () => ({
      font,
      size: 2,
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

  const text = "Hello";

  const textRef = useRef<any>();

  useLayoutEffect(() => {
    textRef.current.geometry.center();
  }, [text]);

  const geometry = <torusGeometry args={[0.3, 0.2, 20, 45]} />;
  //const material = <meshMatcapMaterial matcap={matcapTexture} />;
  const material = <meshNormalMaterial />;

  return (
    <>
      <mesh ref={textRef} position={[0, 0, 0]}>
        {material}
        <textGeometry args={[text, config]} />
      </mesh>
      {[...Array(200).keys()].map((index) => {
        return <Donut key={index} geometry={geometry} material={material} />;
      })}
    </>
  );
}

function Donut({
  material,
  geometry,
}: {
  material: JSX.Element;
  geometry: JSX.Element;
}) {
  const position: Vector3 = useMemo(
    () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    [],
  );

  const rotation: Vector3 = useMemo(
    () => [Math.random() * Math.PI, Math.random() * Math.PI, 0],
    [],
  );

  const scale: Vector3 = useMemo(() => {
    const randomScale = Math.random() * 0.4;
    return [randomScale, randomScale, randomScale];
  }, []);

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      {material}
      {geometry}
    </mesh>
  );
}

export default function ThreeDText() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
}
