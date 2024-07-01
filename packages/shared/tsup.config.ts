import { defineConfig, type Options } from "tsup";
import react18Plugin from "esbuild-plugin-react18";
import cssPlugin from "esbuild-plugin-react18-css";
import { webglPlugin } from "esbuild-plugin-webgl";

export default defineConfig(
  (options: Options) =>
    ({
      format: ["cjs", "esm"],
      target: "es2019",
      entry: ["./src"],
      sourcemap: false,
      clean: !options.watch,
      bundle: true,
      minify: !options.watch,
      esbuildPlugins: [
        webglPlugin(),
        react18Plugin(),
        cssPlugin({ generateScopedName: "[folder]__[local]" }),
      ],
      external: ["react"],
      ...options,
    }) as Options,
);
