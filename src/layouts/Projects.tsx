import React from "https://esm.sh/react@17.0.2";
import { Project } from "../components/Project.tsx";
import type { AppProps } from "../pages/App.tsx";
type ProjectListProps = AppProps;
export function Projects(props: ProjectListProps) {
  return (
    <article>
      <h2>프로젝트</h2>
      {props.contents.projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </article>
  );
}