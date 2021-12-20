import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import useConstant from "use-constant";
import gsap from "gsap";

import { Leva, folder, button, useControls } from "leva";

import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
  const [
    colorTexture,
    alphaTexture,
    heightTexture,
    normalTexture,
    ambientOcclusionTexture,
    metalnessTexture,
    roughnessTexture,
  ] = useLoader(TextureLoader, [
    new URL("./textures/door/color.jpg", import.meta.url).href,
    // new URL("./textures/checkerboard-1024x1024.png", import.meta.url).href,
    // new URL("./textures/checkerboard-8x8.png", import.meta.url).href,
    // new URL("./textures/minecraft.png", import.meta.url).href,

    new URL("./textures/door/alpha.jpg", import.meta.url).href,
    new URL("./textures/door/height.jpg", import.meta.url).href,
    new URL("./textures/door/normal.jpg", import.meta.url).href,
    new URL("./textures/door/ambientOcclusion.jpg", import.meta.url).href,
    new URL("./textures/door/metalness.jpg", import.meta.url).href,
    new URL("./textures/door/roughness.jpg", import.meta.url).href,
  ]);

  useLayoutEffect(() => {
    /*colorTexture.repeat.x = 2;
    colorTexture.repeat.y = 3;
    colorTexture.wrapS = THREE.RepeatWrapping;
    colorTexture.wrapT = THREE.MirroredRepeatWrapping;
    colorTexture.offset.x = 0.5;
    colorTexture.offset.y = 0.5;
    */
    /*
    colorTexture.center.x = 0.5;
    colorTexture.center.y = 0.5;
    colorTexture.rotation = Math.PI / 4;
       */
    // colorTexture.minFilter = THREE.NearestFilter;
    // colorTexture.magFilter = THREE.NearestFilter;
    // colorTexture.generateMipmaps = false;
  }, [colorTexture]);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        {/*<sphereGeometry args={[1, 32, 32]} />
        <coneGeometry args={[1, 1, 32]} />
        <torusGeometry args={[1, 0.35, 32, 100]} />*/}

        <meshBasicMaterial
          map={colorTexture}
          // Without toneMapped=false, texture render lighter than on Three.js Journey
          // Paul Henschel: "It renders lighter because standard three handles colors incorrectly. R3f puts you in sRGB color space by default"
          toneMapped={false}
        />
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
