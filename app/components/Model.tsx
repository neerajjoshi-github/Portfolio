"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Statue } from "./Statue";
import { OrbitControls, Sparkles } from "@react-three/drei";

const model = () => {
  return (
    <Canvas shadows className=" cursor-grab active:cursor-grabbing ">
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableZoom={false}
        />
        <Sparkles size={1} scale={4} color={"rgb(224,46,133)"} />
        <Sparkles count={15} size={3} scale={6} color={"rgb(224,46,133)"} />
        <Statue castShadow scale={1} position={[0, -3, 0]} />
        <pointLight position={[-4, 2, 0]} intensity={0.5} />
        <ambientLight color="#D14D72" intensity={1.2} />
      </Suspense>
    </Canvas>
  );
};

export default model;
