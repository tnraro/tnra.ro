import React from "https://esm.sh/react@17.0.2";
import { Contents } from "../contents.ts";
import { Profile } from "../layouts/Profile.tsx";

export interface AppProps {
  contents: Contents;
}
export function App({ contents }: AppProps) {
  return (
    <main className="app">
      <Profile contents={contents} />
    </main>
  )
}

export default App
