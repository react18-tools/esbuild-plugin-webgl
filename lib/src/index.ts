import type { Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";

const uuid = () => (Date.now() * Math.random()).toString(36).slice(0, 8);

const name = `webgl-${uuid()}`;

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
        // remove white spaces around =
        .replace(/ = /g, "=")
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);
      const contents = `export default \`${lines[0]}\n${lines.slice(1).join("")}\``;
      return { contents, loader: "ts" };
    });
  },
});
