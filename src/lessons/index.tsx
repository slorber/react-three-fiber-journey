import React from "react";

export type Lesson = {
  index: number;
  name: string;
  path: string;
  sourceDir: string;
  Component: React.ComponentType<{}>;
};

const Lessons: Lesson[] = [
  {
    name: "Webpack",
    path: "webpack",
    index: 4,
    sourceDir: "04-webpack",
    Component: React.lazy(() => import("./04-webpack/webpack")),
  },
  {
    name: "Transform Objects",
    path: "transform-objects",
    index: 5,
    sourceDir: "05-transform-objects",
    Component: React.lazy(
      () => import("./05-transform-objects/transform-objects"),
    ),
  },
];

export default Lessons;
