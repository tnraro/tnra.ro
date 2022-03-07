import React from "https://esm.sh/react@17.0.2";
import { Contents } from "../contents.ts";
import { Educations } from "../layouts/Educations.tsx";
import { Profile } from "../layouts/Profile.tsx";
import { Projects } from "../layouts/Projects.tsx";

export interface AppProps {
  contents: Contents;
}
export function App({ contents }: AppProps) {
  return (
    <main className="app">
      <Profile contents={contents} />
      <Projects contents={contents} />
      <Educations contents={contents} />
    </main>
  )
}

export default App
