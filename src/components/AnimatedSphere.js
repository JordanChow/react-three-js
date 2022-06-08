import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]}>
      <MeshDistortMaterial
        color="#8352FD"
        distort={0.4}
        speed={2}
      ></MeshDistortMaterial>
    </Sphere>
  );
}
