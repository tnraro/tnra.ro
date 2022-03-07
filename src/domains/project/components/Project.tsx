import classes from "./Project.module.css";
export interface ProjectProps {
  title: string,
  link: string,
  date: string[],
  text: string[],
  stack: string[],
  image?: string,
}
export function Project(props: ProjectProps) {
  return (
    <article className={classes.project}>
      <header>
        <h3><a href={props.link} target="_blank">{props.title}</a></h3>
        <time dateTime={props.date.join("/")}>{props.date.join("–")}</time>
        <div className="spacer" />
        <a className="printonly" href={props.link} target="_blank">{props.link}</a>
      </header>
      {props.image ? (
        <figure className="screenonly">
          <a href={props.image} target="_blank" tabIndex={-1}>
            <img src={props.image} alt={props.title} />
          </a>
        </figure>
      ) : null}
      <ul>
        {props.text.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <aside>
        <ul className={classes.stack}>
          {props.stack.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      </aside>
    </article>
  );
}