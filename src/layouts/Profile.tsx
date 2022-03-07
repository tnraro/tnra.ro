import React from "https://esm.sh/react@17.0.2";
import { Avatar } from "../components/Avatar.tsx";
import type { AppProps } from "../pages/App.tsx";
import { Projects } from "./Projects.tsx";
import { Educations } from "./Educations.tsx";
type ProfileProps = AppProps;
export function Profile(props: ProfileProps) {
  return (
    <article>
      <aside className="profile">
        <Avatar src="assets/profile.webp" alt="profile" size={120} />
      </aside>
      <h1>양호진</h1>
      <address>
        <ul>
          <li>
            <a href="mailto:deokji53@gmail.com">deokji53@gmail.com</a>
          </li>
          <li>
            <a href="tel:010-2623-2702">010-2623-2702</a>
          </li>
          <li>
            <a href="https://tnra.ro" target="_blank">https://tnra.ro/</a>
          </li>
          <li>
            <a href="https://github.com/tnraro" target="_blank">github.com/tnraro</a>
          </li>
        </ul>
      </address>
      <Projects contents={props.contents} />
      <Educations contents={props.contents} />
    </article>
  );
}