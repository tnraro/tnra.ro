import React from "https://esm.sh/react@17.0.2";
import type { Project } from "../contents.ts"
import { Time } from "./Time.tsx";
import ReactMarkdown from "https://esm.sh/react-markdown@8.0.0?no-check";

type ProjectProps = Project;
export function Project(props: ProjectProps) {
  return (
    <article className="project">
      <header>
        <h3><a href={props.link} target="_blank">{props.title}</a></h3>
        <Time date={props.date} />
        <div className="spacer" />
        <a className="printonly" href={props.link} target="_blank">{props.link}</a>
      </header>
      {props.image ? (
        <figure className="screenonly">
          <a href={props.image} target="_blank" tabIndex={-1}>
            <img src={props.image} alt={props.title} loading="lazy" />
          </a>
        </figure>
      ) : null}
      <ReactMarkdown>
        {props.content}
      </ReactMarkdown>
      <aside>
        <ul className="stack">
          {props.stack.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      </aside>
    </article>
  );
}