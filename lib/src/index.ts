import type { Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";

/** generate randmo id */
const uuid = () => (Date.now() * Math.random()).toString(36).slice(0, 8);

/** generate randmo name to avoid collision among the plugins */
const name = `webgl-${uuid()}`;

/** Plugin to load `.glsl` files as minified strings */
export const webglPlugin: () => Plugin = () => ({
  name,
  setup(build: PluginBuild) {
    build.onLoad({ filter: /\.glsl$/, namespace: "file" }, args => {
      const text = fs.readFileSync(args.path, "utf8");
      const lines = text
        // remove block comments
        .replace(/\/\*.*\*\//gm, "")
        // remove line comments
        .replace(/\/\/.*/g, "")
        // remove white spaces around operators
        .replace(/ ([=+*-/%><&^|]|[=!><+*-/]=|&&|\|\||\^\^) /g, m => m.trim())
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);
      const contents = `${lines[0]}\n${lines.slice(1).join("")}`;
      return { contents, loader: "text" };
    });
  },
});
