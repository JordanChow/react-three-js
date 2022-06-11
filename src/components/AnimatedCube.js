import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { GradientTexture, Text } from "@react-three/drei";

export default function AnimatedCube({
  color,
  handleCubeClick,
  cubeHovered,
  setCubeHovered,
}) {
  const mesh = useRef();
  const { scale } = useSpring({ scale: cubeHovered ? 1.2 : 1 });

  useEffect(() => {
    document.body.style.cursor = cubeHovered ? "pointer" : "auto";
  }, [cubeHovered]);

  return (
    <>
      <animated.mesh
        scale={scale}
        ref={mesh}
        rotation={[90, 0, 15]}
        position={[1, 2, 0]}
        onPointerOver={() => setCubeHovered(true)}
        onPointerOut={() => setCubeHovered(false)}
        onClick={handleCubeClick}
      >
        <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial>
          <GradientTexture stops={[0, 1]} colors={color} size={1024} />
        </meshBasicMaterial>
      </animated.mesh>
    </>
  );
}
