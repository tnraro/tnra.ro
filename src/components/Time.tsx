import React from "https://esm.sh/react@17.0.2";
import type { TDate } from "../contents.ts";
export interface TimeProps {
  date: TDate;
}
export function Time(props: TimeProps) {
  return (
    <time dateTime={props.date.join("/")}>{props.date.join("–")}</time>
  );
}