import React from "https://esm.sh/react@17.0.2";
export interface AvatarProps {
  src: string,
  alt: string,
  size: number,
}
export function Avatar(props: AvatarProps) {
  return (
    <img
      className="avatar"
      src={props.src}
      alt={props.alt}
      width={props.size}
      height={props.size}
      loading="lazy"
    />
  );
}