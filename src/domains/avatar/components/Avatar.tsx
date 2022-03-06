import classes from "./Avatar.module.css";
export interface AvatarProps {
  src: string,
  alt: string,
  size: number,
}
export function Avatar(props: AvatarProps) {
  return (
    <img
      className={classes.avatar}
      src={props.src}
      alt={props.alt}
      width={props.size}
      height={props.size}
      loading="lazy"
    />
  );
}