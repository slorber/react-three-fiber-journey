import React from "react";

export type Exercice = {
  index: number;
  name: string;
  path: string;
  Component: React.ComponentType<{}>;
};

const Exercices: Exercice[] = [
  {
    name: "Webpack",
    path: "webpack",
    index: 4,
    Component: React.lazy(() => import("./04-webpack/webpack")),
  },
];

export default Exercices;
