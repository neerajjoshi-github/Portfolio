"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";

const SparklesBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas shadows>
        <Sparkles size={1} scale={12} count={1000} />
        <Sparkles size={2} scale={12} count={100} />
        <Sparkles size={3} scale={12} count={20} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default SparklesBackground;
