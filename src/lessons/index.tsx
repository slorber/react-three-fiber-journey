import React from "react";

export type Lesson = {
  index: number;
  name: string;
  path: string;
  sourceDir: string;
  Component: React.ComponentType<{}>;
};

function sourceDirFor(lessonDir: string): string {
  return `https://github.com/slorber/react-three-fiber-journey/tree/main/src/lessons/${lessonDir}`;
}

const Lessons: Lesson[] = [
  {
    name: "Webpack",
    path: "webpack",
    index: 4,
    sourceDir: sourceDirFor("04-webpack"),
    Component: React.lazy(() => import("./04-webpack/webpack")),
  },
  {
    name: "Transform Objects",
    path: "transform-objects",
    index: 5,
    sourceDir: sourceDirFor("05-transform-objects"),
    Component: React.lazy(
      () => import("./05-transform-objects/transform-objects"),
    ),
  },
  {
    name: "Animations",
    path: "animations",
    index: 6,
    sourceDir: sourceDirFor("06-animations"),
    Component: React.lazy(() => import("./06-animations/animations")),
  },
  {
    name: "Cameras",
    path: "cameras",
    index: 7,
    sourceDir: sourceDirFor("07-cameras"),
    Component: React.lazy(() => import("./07-cameras/cameras")),
  },
  {
    name: "Fullscreen and resizing",
    path: "fullscreen-and-resizing",
    index: 8,
    sourceDir: sourceDirFor("08-fullscreen-and-resizing"),
    Component: React.lazy(
      () => import("./08-fullscreen-and-resizing/fullscreen-and-resizing"),
    ),
  },
  {
    name: "Geometries",
    path: "geometries",
    index: 9,
    sourceDir: sourceDirFor("09-geometries"),
    Component: React.lazy(() => import("./09-geometries/geometries")),
  },
  {
    name: "Debug-UI",
    path: "debug-ui",
    index: 10,
    sourceDir: sourceDirFor("10-debug-ui"),
    Component: React.lazy(() => import("./10-debug-ui/debug")),
  },
  {
    name: "Textures",
    path: "textures",
    index: 11,
    sourceDir: sourceDirFor("11-textures"),
    Component: React.lazy(() => import("./11-textures/textures")),
  },
];

export default Lessons;
