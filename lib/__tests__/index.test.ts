import { beforeAll, describe, test } from "vitest";
import esbuild from "esbuild";
import path from "node:path";
import { webglPlugin } from "../src";

describe("WebGL plugins", () => {
  beforeAll(async () => {
    await esbuild.build({
      format: "cjs",
      target: "es2019",
      sourcemap: false,
      bundle: true,
      minify: true,
      entryPoints: [path.resolve(__dirname, "shaders/render-frag.glsl")],
      outdir: "dist",
      treeShaking: true,
      plugins: [webglPlugin()],
    });
  });
  test("test comments removal", async ({ expect }) => {});
});
