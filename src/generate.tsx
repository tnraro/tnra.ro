import React from "https://esm.sh/react@17.0.2";
import ReactDOMServer from "https://esm.sh/react-dom@17.0.2/server";
import * as yaml from "https://deno.land/std@0.128.0/encoding/yaml.ts";
import * as fs from "https://deno.land/std@0.128.0/fs/mod.ts";

import App from "./pages/App.tsx";
import { Contents } from "./contents.ts";

interface Config {
  entrypoint: string;
  output: string;
  copies: string[];
}

async function getConfig(): Promise<Config> {
  const rawConfig = await Deno.readTextFile("config.yaml");
  const config = await yaml.parse(rawConfig) as Partial<Config>;

  return {
    entrypoint: "src/index.html",
    output: "dist",
    copies: [],
    ...config,
  };
}

async function render(config: Config) {
  const rawContent = await Deno.readTextFile("contents.yaml");
  const contents = await yaml.parse(rawContent) as Contents;
  const app = ReactDOMServer.renderToStaticMarkup(<App contents={contents} />);
  const html = await Deno.readTextFile(config.entrypoint);
  return html.replace(/<!--root-->/, app);
}

async function postRender(config: Config, html: string) {
  await fs.emptyDir(config.output);
  await Deno.writeTextFile(config.output + "/index.html", html);
  // copy files
  await Promise.all(
    config.copies.map(async (path) => {
      const filename = path.match(/([^/]+?)$/)?.[1];
      if (filename == null) {
        throw new Error(filename);
      }
      await fs.copy(path, `${config.output}/${filename}`);
    })
  );
}

// generate

const config = await getConfig();
const html = await render(config);
await postRender(config, html);


