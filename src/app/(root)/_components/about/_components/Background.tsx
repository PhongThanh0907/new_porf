"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Background = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="h-full w-full relative flex items-center">
        <div
          className="absolute inset-x-0 -inset-y-4 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgb(0 12 18 / 6%) 0%, rgba(11, 0, 18, 0.07) 50%, rgb(11 0 18 / 6%) 100%), linear-gradient(90deg, rgba(11, 0, 18, 0.18) 0%, rgb(11 0 18 / 4%) 50%, rgb(11 0 18 / 9%) 100%)",
            backdropFilter: "blur(50px)",
          }}
        />
        <div className="h-full w-1/2">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 200, 400]} scale={2.8}>
                <MeshDistortMaterial
                  color={`#70befa`}
                  attach="material"
                  distort={0.5}
                  speed={1.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </div>
        <div className="h-3/4 w-1/2 relative -left-24">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[1, 2, 3]} />
              <Sphere args={[1, 100, 300]} scale={2.5}>
                <MeshDistortMaterial
                  color={`#70befa`}
                  attach="material"
                  distort={0.8}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Background;
