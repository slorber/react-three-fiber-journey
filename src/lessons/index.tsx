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
];

export default Lessons;
