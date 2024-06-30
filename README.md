# Esbuild Plugin Webgl <img src="https://github.com/react18-tools/esbuild-plugin-webgl/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/esbuild-plugin-webgl/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/esbuild-plugin-webgl/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/react18-tools/esbuild-plugin-webgl/maintainability) [![codecov](https://codecov.io/gh/react18-tools/esbuild-plugin-webgl/graph/badge.svg)](https://codecov.io/gh/react18-tools/esbuild-plugin-webgl) [![Version](https://img.shields.io/npm/v/esbuild-plugin-webgl.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-webgl) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/esbuild-plugin-webgl.svg)](https://www.npmjs.com/package/esbuild-plugin-webgl) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-webgl) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

ESBuild plugin to load webGL shaders from `.glsl` files.

> <img src="https://github.com/react18-tools/esbuild-plugin-webgl/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider starring [this repository](https://github.com/react18-tools/esbuild-plugin-webgl) and sharing it with your friends.

## Getting Started

### Installation

```bash
$ pnpm add esbuild-plugin-webgl
```

**_or_**

```bash
$ npm install esbuild-plugin-webgl
```

**_or_**

```bash
$ yarn add esbuild-plugin-webgl
```

> If you are using `monorepo` or `workspaces`, you can install this plugin to the root using `-w` or to a specific workspace using `--filter your-package` or `--scope your-package` for `pnpm` or `yarn` workspaces, respectively.

## Use with `tsup`

```ts
// tsup.config.ts or tsup.config.js
import { defineConfig } from "tsup";
import { webglPlugin } from "esbuild-plugin-webgl";

export default defineConfig(options => ({
    ...
    esbuildPlugins:[webglPlugin()]
}));
```

## Use with `esbuild`

```ts
import { webglPlugin } from "esbuild-plugin-webgl";

esbuild.build({
	...
	plugins: [webglPlugin()],
});
```

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://github.com/react18-tools/esbuild-plugin-webgl/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
