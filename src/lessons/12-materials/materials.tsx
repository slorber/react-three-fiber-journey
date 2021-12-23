import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useCubeTexture } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { LinearFilter } from "three/src/constants";

import { Leva, folder, button, useControls } from "leva";

function useSceneControls() {
  return useControls({
    std: folder({
      metalness: {
        min: 0,
        max: 1,
        value: 0.8,
        step: 0.001,
      },
      roughness: {
        min: 0,
        max: 1,
        value: 0.2,
        step: 0.001,
      },
      aoMapIntensity: {
        min: 0,
        max: 1,
        value: 0.5,
        step: 0.001,
      },
      displacementScale: {
        min: 0,
        max: 1,
        value: 0.2,
        step: 0.001,
      },

      normalScaleX: {
        min: 0,
        max: 1,
        value: 0.2,
        step: 0.001,
      },
      normalScaleY: {
        min: 0,
        max: 1,
        value: 0.2,
        step: 0.001,
      },
    }),
  });
}

function Scene() {
  const sceneControls = useSceneControls();

  const planeRef = useRef<THREE.Mesh>();
  const sphereRef = useRef<THREE.Mesh>();
  const torusRef = useRef<THREE.Mesh>();

  useFrame(({ clock }, delta) => {
    planeRef.current!.rotation.y = 0.1 * clock.elapsedTime;
    sphereRef.current!.rotation.y = 0.1 * clock.elapsedTime;
    torusRef.current!.rotation.y = 0.1 * clock.elapsedTime;

    planeRef.current!.rotation.x = 0.15 * clock.elapsedTime;
    sphereRef.current!.rotation.x = 0.15 * clock.elapsedTime;
    torusRef.current!.rotation.x = 0.15 * clock.elapsedTime;
  });

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
    new URL("./textures/door/alpha.jpg", import.meta.url).href,
    new URL("./textures/door/height.jpg", import.meta.url).href,
    new URL("./textures/door/normal.jpg", import.meta.url).href,
    new URL("./textures/door/ambientOcclusion.jpg", import.meta.url).href,
    new URL("./textures/door/metalness.jpg", import.meta.url).href,
    new URL("./textures/door/roughness.jpg", import.meta.url).href,
  ]);

  /*  const material = (
    <meshBasicMaterial
      // color="lime"
      map={colorTexture}
      alphaMap={alphaTexture}
      toneMapped={false}
      // wireframe
      transparent
      // opacity={0.5}
      side={THREE.DoubleSide}
    />
  );*/

  /*
  const material = (
    <meshNormalMaterial
      flatShading
      // wireframe
    />
  );

     */
  const [matcapTexture] = useLoader(TextureLoader, [
    new URL("./textures/matcaps/1.png", import.meta.url).href,
  ]);
  // const material = <meshMatcapMaterial matcap={matcapTexture} />;

  // const material = <meshDepthMaterial />;

  // const material = <meshLambertMaterial />;

  /*
  const material = (
    <meshPhongMaterial shininess={100} specular={new THREE.Color(0xff0000)} />
  );
     */

  /*
  const [gradientTexture] = useLoader(TextureLoader, [
    new URL("./textures/gradients/5.jpg", import.meta.url).href,
  ]);
  useLayoutEffect(() => {
    gradientTexture.minFilter = THREE.NearestFilter;
    gradientTexture.magFilter = THREE.NearestFilter;
    gradientTexture.generateMipmaps = false;
  }, [gradientTexture]);
  const material = <meshToonMaterial gradientMap={gradientTexture} />;

     */

  /*const material = (
    <meshStandardMaterial
      map={colorTexture}
      // metalness={sceneControls.metalness}
      // roughness={sceneControls.roughness}
      metalnessMap={metalnessTexture}
      roughnessMap={roughnessTexture}
      aoMap={ambientOcclusionTexture}
      aoMapIntensity={sceneControls.aoMapIntensity}
      displacementScale={sceneControls.displacementScale}
      displacementMap={heightTexture}
      normalMap={normalTexture}
      normalScale={
        new THREE.Vector2(
          sceneControls.normalScaleX,
          sceneControls.normalScaleY,
        )
      }
      transparent
      alphaMap={alphaTexture}
    />
  );*/

  /*
  console.log([
    new URL("./textures/environmentMaps/0/px.jpg", import.meta.url).href,
    new URL("./textures/environmentMaps/0/nx.jpg", import.meta.url).href,
    new URL("./textures/environmentMaps/0/py.jpg", import.meta.url).href,
    new URL("./textures/environmentMaps/0/ny.jpg", import.meta.url).href,
    new URL("./textures/environmentMaps/0/pz.jpg", import.meta.url).href,
    new URL("./textures/environmentMaps/0/nz.jpg", import.meta.url).href,
  ]);

     */

  const envMap = useCubeTexture(
    ["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"],
    {
      path: new URL("./textures/environmentMaps/0/", import.meta.url).pathname,
    },
  );

  const material = (
    <meshStandardMaterial
      metalness={sceneControls.metalness}
      roughness={sceneControls.roughness}
      envMap={envMap}
    />
  );

  return (
    <>
      <mesh ref={planeRef} position={[0, 0, 0]}>
        {material}
        <planeGeometry
          // args={[1, 1, 1]}
          args={[1, 1, 100, 100]}
          // TODO not working ???
          /*
          attach={[
            (parent, self) => {
              self.setAttribute(
                "uv2",
                new THREE.BufferAttribute(self.attributes.uv.array, 2),
              );
              console.log("attach", { parent, self });
            },
            (parent, self) => {},
          ]}
             */
        />
      </mesh>

      <mesh ref={sphereRef} position={[1.5, 0, 0]}>
        {material}
        <sphereGeometry
          // args={[0.5, 16, 16]}
          args={[0.5, 64, 64]}
        />
      </mesh>

      <mesh ref={torusRef} position={[-1.5, 0, 0]}>
        {material}
        <torusGeometry
          // args={[0.3, 0.2, 16, 32]}
          args={[0.3, 0.2, 64, 128]}
        />
      </mesh>
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight args={[0xffffff, 0.5]} />
      <pointLight args={[0xffffff, 0.5]} />
    </>
  );
}

export default function Materials() {
  return (
    <Canvas>
      <Scene />
      <Lights />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
}
