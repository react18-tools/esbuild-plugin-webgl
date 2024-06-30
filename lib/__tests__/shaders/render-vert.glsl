#version 300 es
precision mediump float;

in vec2 p;

void main() {
  gl_PointSize = 1.0;
  gl_Position = vec4(p, 0.0, 1.0);
}
