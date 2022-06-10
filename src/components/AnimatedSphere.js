import React, { useRef } from "react";
import {
  Sphere,
  GradientTexture,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function AnimatedSphere({
  args,
  position,
  color,
  distort,
  speed,
  handleSphere,
}) {
  const sun = useRef();
  useFrame(() => {
    sun.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={sun} onClick={handleSphere}>
      <Sphere visible args={args} position={position}>
        <MeshDistortMaterial distort={distort} speed={speed}>
          <GradientTexture stops={[0, 1]} colors={color} size={1024} />
        </MeshDistortMaterial>
      </Sphere>
    </mesh>
  );
}
