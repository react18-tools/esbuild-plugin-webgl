import vertexShaderText from "./vertex.glsl?raw";
import fragmentShaderText from "./fragment.glsl?raw";
import { mat4, glMatrix } from "gl-matrix";

/** Create rotating Cube */
export const createCube = (canvas: HTMLCanvasElement, gl: WebGLRenderingContext) => {
  gl.clearColor(2.55, 2.55, 2.55, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.frontFace(gl.CCW);
  gl.cullFace(gl.BACK);

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  /** Create shader */
  const createShader = (type: number, source: string): WebGLShader => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("Failed to create shader");
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      /* v8 ignore next */
      const info = gl.getShaderInfoLog(shader);
      /* v8 ignore next */
      gl.deleteShader(shader);
      /* v8 ignore next */
      throw new Error("Could not compile WebGL shader. \n\n" + info); // skipcq: JS-0246
      /* v8 ignore next */
    }
    return shader;
  };

  /** Create webGL program */
  const createProgram = (
    vertexShaderSource: string,
    fragmentShaderSource: string,
  ): WebGLProgram => {
    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();
    if (!program) throw new Error("Failed to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      /* v8 ignore next */
      // eslint-disable-next-line no-console -- error handling
      console.error(gl.getProgramInfoLog(program));
      /* v8 ignore next */
      throw new Error("Failed to link program");
      /* v8 ignore next */
    }
    return program;
  };

  const rotatingCubeProgram = createProgram(vertexShaderText, fragmentShaderText);

  //Buffers

  const boxVertices = [
    //top
    -1.0, 1.0, -1.0, 0.5, 0.5, 0.5, -1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5,
    1.0, 1.0, -1.0, 0.5, 0.5, 0.5,
    //left
    -1.0, 1.0, 1.0, 0.75, 0.25, 0.5, -1.0, -1.0, 1.0, 0.75, 0.25, 0.5, -1.0, -1.0, -1.0, 0.75, 0.25,
    0.5, -1.0, 1.0, -1.0, 0.75, 0.25, 0.5,
    //right
    1.0, 1.0, 1.0, 0.25, 0.25, 0.75, 1.0, -1.0, 1.0, 0.25, 0.25, 0.75, 1.0, -1.0, -1.0, 0.25, 0.25,
    0.75, 1.0, 1.0, -1.0, 0.25, 0.25, 0.75,
    //front
    1.0, 1.0, 1.0, 1.0, 0.0, 0.15, 1.0, -1.0, 1.0, 1.0, 0.0, 0.15, -1.0, -1.0, 1.0, 1.0, 0.0, 0.15,
    -1.0, 1.0, 1.0, 1.0, 0.0, 0.15,
    //back
    1.0, 1.0, -1.0, 0.0, 1.0, 0.15, 1.0, -1.0, -1.0, 0.0, 1.0, 0.15, -1.0, -1.0, -1.0, 0.0, 1.0,
    0.15, -1.0, 1.0, -1.0, 0.0, 1.0, 0.15,
    //bottom
    -1.0, -1.0, -1.0, 0.5, 0.5, 1.0, -1.0, -1.0, 1.0, 0.5, 0.5, 1.0, 1.0, -1.0, 1.0, 0.5, 0.5, 1.0,
    1.0, -1.0, -1.0, 0.5, 0.5, 1.0,
  ];

  const boxIndices = [
    //top
    0, 1, 2, 0, 2, 3,
    //left
    5, 4, 6, 6, 4, 7,
    // right
    8, 9, 10, 8, 10, 11,
    //front
    13, 12, 14, 15, 14, 12,
    //back
    16, 17, 18, 16, 18, 19,
    //bottom
    21, 20, 22, 22, 20, 23,
  ];

  const boxVertexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

  const boxIndexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

  const positionAttribLocation = gl.getAttribLocation(rotatingCubeProgram, "vertPosition");
  const colorAttribLocation = gl.getAttribLocation(rotatingCubeProgram, "vertColor");

  gl.vertexAttribPointer(
    positionAttribLocation,
    3,
    gl.FLOAT,
    false,
    6 * Float32Array.BYTES_PER_ELEMENT,
    0,
  );
  gl.vertexAttribPointer(
    colorAttribLocation,
    3,
    gl.FLOAT,
    false,
    6 * Float32Array.BYTES_PER_ELEMENT,
    3 * Float32Array.BYTES_PER_ELEMENT,
  );
  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  //Program used
  gl.useProgram(rotatingCubeProgram);

  const matWorldUniformLocation = gl.getUniformLocation(rotatingCubeProgram, "mWorld");
  const matViewUniformLocation = gl.getUniformLocation(rotatingCubeProgram, "mView");
  const matProjUniformLocation = gl.getUniformLocation(rotatingCubeProgram, "mProj");

  const worldMatrix = new Float32Array(16);
  const viewMatrix = new Float32Array(16);
  const projMatrix = new Float32Array(16);

  mat4.identity(worldMatrix);
  mat4.lookAt(viewMatrix, [0, 0, -8], [0, 0, 0], [0, 1, 0]);
  mat4.perspective(projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

  gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix);
  gl.uniformMatrix4fv(matViewUniformLocation, false, viewMatrix);
  gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix);

  const xRotationMatrix = new Float32Array(16);
  const yRotationMatrix = new Float32Array(16);

  //Render loop

  const identityMatrix = new Float32Array(16);
  mat4.identity(identityMatrix);

  let angle = 0;

  /** Render loop */
  const loop = function () {
    angle = (performance.now() / 1000 / 6) * 2 * Math.PI;
    mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
    mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0]);
    mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
    gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix);

    gl.clearColor(2.55, 2.55, 2.55, 1.0);
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

    gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};
