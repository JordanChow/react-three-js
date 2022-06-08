import React from "react";

export default function AnimatedCube() {
  return (
    <mesh rotation={[90, 0, 15]} position={[1, 2, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
