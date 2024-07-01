# Esbuild Plugin Webgl <img src="https://github.com/react18-tools/esbuild-plugin-webgl/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/esbuild-plugin-webgl/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/esbuild-plugin-webgl/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/c2532ae011e53b1bf011/maintainability)](https://codeclimate.com/github/react18-tools/esbuild-plugin-webgl/maintainability) [![codecov](https://codecov.io/gh/react18-tools/esbuild-plugin-webgl/graph/badge.svg)](https://codecov.io/gh/react18-tools/esbuild-plugin-webgl) [![Version](https://img.shields.io/npm/v/esbuild-plugin-webgl.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-webgl) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/esbuild-plugin-webgl.svg)](https://www.npmjs.com/package/esbuild-plugin-webgl) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-webgl) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

ESBuild plugin to load WebGL shaders from `.glsl` files.

> <img src="https://github.com/react18-tools/esbuild-plugin-webgl/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider starring [this repository](https://github.com/react18-tools/esbuild-plugin-webgl) and sharing it with your friends.

## Overview

This ESBuild plugin streamlines the process of loading WebGL shaders in your JavaScript or TypeScript projects. By allowing you to import GLSL shader files directly into your project, it ensures a seamless development experience for WebGL applications. This approach promotes better separation of concerns by eliminating the need to hard code GLSL shader code into your JS or TS files. Additionally, it compresses the shader code, helping you to deliver a smaller minified bundle for your library.

### Key Features

- **Easy Integration**: Easily integrate GLSL shaders into your ESBuild workflow.
- **TypeScript Support**: Full support for TypeScript, making it easier to work with shaders in a type-safe environment.
- **Lightweight**: Minimal footprint, ensuring your build times remain fast.
- **Flexible Configuration**: Compatible with various build tools and configurations, including `tsup` and standard `esbuild` setups.

## Getting Started

Follow these steps to get started with the ESBuild Plugin WebGL:

### Installation

You can install the plugin using your preferred package manager:

Using `pnpm`:

```bash
$ pnpm add esbuild-plugin-webgl
```

Using `npm`:

```bash
$ npm install esbuild-plugin-webgl
```

Using `yarn`:

```bash
$ yarn add esbuild-plugin-webgl
```

> **Note**: If you are using a monorepo or workspaces, you can install this plugin at the root using the `-w` option or to a specific workspace using `--filter your-package` or `--scope your-package` for `pnpm` or `yarn` workspaces, respectively.

## Usage

### With `tsup`

To use the plugin with `tsup`, add it to your `tsup.config.ts` or `tsup.config.js` file:

```ts
// tsup.config.ts or tsup.config.js
import { defineConfig } from "tsup";
import { webglPlugin } from "esbuild-plugin-webgl";

export default defineConfig((options) => ({
    ...
    esbuildPlugins: [webglPlugin()],
}));
```

### With `esbuild`

To use the plugin directly with `esbuild`, include it in your build configuration:

```ts
import { webglPlugin } from "esbuild-plugin-webgl";

esbuild.build({
    ...
    plugins: [webglPlugin()],
});
```

### Example Usage

Here's a quick example of how you can import and use a GLSL shader in your project:

```ts
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

// Initialize WebGL context and use the imported shaders
const gl = canvas.getContext("webgl");
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);
```

![Alt](https://repobeats.axiom.co/api/embed/a1fadcf8aa3054acff5d430c970af9e61254da5c.svg "Repobeats analytics image")

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. For major changes, please open a discussion first to discuss what you would like to change.

## License

This library is licensed under the MPL-2.0 open-source license. See the [LICENSE](LICENSE) file for more details.

> <img src="https://github.com/react18-tools/esbuild-plugin-webgl/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
