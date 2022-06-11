import React, { useRef } from "react";
import {
  Sphere,
  GradientTexture,
  MeshDistortMaterial,
} from "@react-three/drei";

export default function AnimatedSphere({
  args,
  position,
  color,
  distort,
  speed,
  handleSphereClick,
}) {
  return (
    <mesh onClick={handleSphereClick}>
      <Sphere visible args={args} position={position}>
        <MeshDistortMaterial distort={distort} speed={speed}>
          <GradientTexture stops={[0, 1]} colors={color} size={1024} />
        </MeshDistortMaterial>
      </Sphere>
    </mesh>
  );
}
