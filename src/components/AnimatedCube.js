import React, { useState, useRef, useEffect } from "react";

export default function AnimatedCube() {
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState([1, 1, 1]);
  const mesh = useRef();

  return (
    <mesh
      ref={mesh}
      rotation={[90, 0, 15]}
      position={[1, 2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.5 : 1}
    >
      <boxBufferGeometry args={size} />
      <meshBasicMaterial color={hovered ? "lightblue" : "green"} />
    </mesh>
  );
}
