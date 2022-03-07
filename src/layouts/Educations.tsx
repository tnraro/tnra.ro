import React from "https://esm.sh/react@17.0.2";
import { Time } from "../components/Time.tsx";
import type { AppProps } from "../pages/App.tsx";
type EducationListProps = AppProps;
export function Educations(props: EducationListProps) {
  return (
    <article>
      <h2>교육</h2>
      <ul>
        {props.contents.educations.map((education) => (
          <li key={education.univercity} className="education">
            <span>{education.univercity}</span>
            <span>{education.degree}</span>
            <Time date={education.date} />
          </li>
        ))}
      </ul>
    </article>
  );
}