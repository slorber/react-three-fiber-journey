import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { useErrorBoundary } from "use-error-boundary";
import { Global, Page as PageImpl } from "./styles";
import Exercices, { Exercice } from "./exercices";

function ErrorBoundary({ children, fallback, name }: any) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  return didCatch ? (
    fallback(error)
  ) : (
    <ErrorBoundary key={name}>{children}</ErrorBoundary>
  );
}

function ExerciceRoute({ exercice }: { exercice: Exercice }) {
  const { Component, name } = exercice;
  return (
    <ErrorBoundary
      key={name}
      fallback={(e: any) => (
        <>
          <span style={{ border: "2px solid #ff5050", color: "#ff5050" }}>
            Failed to render exercice {name}
          </span>
          <span style={{ border: "2px solid #ff5050", color: "#ff5050" }}>
            Failed to render {e}
          </span>
        </>
      )}
    >
      <Suspense fallback={"..."}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}

function AppExercices() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <ExerciceRoute exercice={Exercices[0]} />;
        }}
      />
      <Route
        exact
        path="/exercice/:exercicePath"
        render={({ match }) => {
          const routeExercicePath = match.params.exercicePath;
          const exercice = Exercices.find(
            (ex) => ex.path === routeExercicePath,
          );
          if (!exercice) {
            return <div>Can't find exercice for path={routeExercicePath}</div>;
          }
          return <ExerciceRoute exercice={exercice} />;
        }}
      />
    </Switch>
  );
}

function AppExerciceList() {
  return (
    <div>
      <ul>
        {Exercices.map((ex) => {
          return (
            <li key={ex.path}>
              <Link to={ex.path}>
                {`${ex.index}`.padStart(2, "0")} {ex.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AppLayout() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <aside
        style={{
          flex: "0 0 250px",
          padding: 20,
          borderRight: "solid thick black",
          backgroundColor: "#f1f1f1",
        }}
      >
        <h1>Exercices</h1>
        <AppExerciceList />
      </aside>
      <main style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
        <AppExercices />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Global />
      <AppLayout />
    </BrowserRouter>
  );
}
