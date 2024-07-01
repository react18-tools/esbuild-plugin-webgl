#version 300 es
precision mediump float;

in vec2 p;

void main() {
  gl_PointSize = 1.f;
  gl_Position = vec4(p, 0.f, 1.f);
}
