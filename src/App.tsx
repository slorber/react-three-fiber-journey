import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { useErrorBoundary } from "use-error-boundary";
import { GlobalStyle } from "./styles";
import Lessons, { Lesson } from "./lessons";

function ErrorBoundary({ children, fallback, name }: any) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  return didCatch ? (
    fallback(error)
  ) : (
    <ErrorBoundary key={name}>{children}</ErrorBoundary>
  );
}

function LessonRoute({ lesson }: { lesson: Lesson }) {
  const { Component, name } = lesson;
  return (
    <ErrorBoundary
      key={name}
      fallback={(e: any) => (
        <>
          <span style={{ border: "2px solid #ff5050", color: "#ff5050" }}>
            Failed to render lesson {name}
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

function AppLessons() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <LessonRoute lesson={Lessons[0]} />;
        }}
      />
      <Route
        exact
        path="/lessons/:lessonPath"
        render={({ match }) => {
          const { lessonPath } = match.params;
          const lesson = Lessons.find((lesson) => lesson.path === lessonPath);
          if (!lesson) {
            return <div>Can't find lesson for path={lessonPath}</div>;
          }
          return <LessonRoute lesson={lesson} />;
        }}
      />
    </Switch>
  );
}

function AppLessonList() {
  return (
    <div>
      <ul>
        {Lessons.map((lesson) => {
          return (
            <li key={lesson.path}>
              <Link to={`/lessons/${lesson.path}`}>
                {`${lesson.index}`.padStart(2, "0")} {lesson.name}
              </Link>{" "}
              (
              <a href={lesson.sourceDir} target={"_blank"}>
                source
              </a>
              )
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
        <h1>Lessons</h1>
        <AppLessonList />
      </aside>
      <main style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
        <AppLessons />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppLayout />
    </BrowserRouter>
  );
}
