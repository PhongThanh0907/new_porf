"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full w-1/2 relative">
        <div
          style={{
            filter: `blur(75px)`,
          }}
          className="absolute inset-0 z-10 bg-black"
        />
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 400]} scale={2.5}>
              <MeshDistortMaterial
                color={`#70befa`}
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Background;
