import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

export const BlurShaderMaterial = shaderMaterial(
  { color: new THREE.Color("#70befa"), time: 0 },
  // Vertex Shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform vec3 color;
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec3 col = color;

    // Simple blur effect
        float blur = 0.02;
    vec3 blurredColor = vec3(0.0);
    for (float x = -blur; x <= blur; x += blur / 2.0) {
      for (float y = -blur; y <= blur; y += blur / 2.0) {
        blurredColor += texture2D(texture, uv + vec2(x, y)).rgb;
      }
    }
    blurredColor /= (blur * 2.0) * (blur * 2.0);

    gl_FragColor = vec4(blurredColor * col, 1.0);
  }
  `
);

extend({ BlurShaderMaterial });
