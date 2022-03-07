import React from "https://esm.sh/react@17.0.2";
import { Avatar } from "../components/Avatar.tsx";
import type { AppProps } from "../pages/App.tsx";
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
            <a href={`mailto:${props.contents.profile.email}`}>{props.contents.profile.email}</a>
          </li>
          <li>
            <a href={`tel:${props.contents.profile.tel}`}>{props.contents.profile.tel}</a>
          </li>
          <li>
            <a href={props.contents.profile.link} target="_blank">{props.contents.profile.link}</a>
          </li>
          <li>
            <a href={`https://github.com/${props.contents.profile.github}`} target="_blank">github.com/{props.contents.profile.github}</a>
          </li>
        </ul>
      </address>
    </article>
  );
}