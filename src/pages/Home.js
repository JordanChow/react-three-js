import React, { useState, useCallback } from "react";
import AnimatedCube from "../components/AnimatedCube";
import AnimatedSphere from "../components/AnimatedSphere";
import Particles from "../components/Particles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";

const styles = {
  canvas: {
    position: "absolute",
    background: "black",
    width: "100%",
    height: "100%",
  },
};

const EnvironmentSetup = () => {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        rotateSpeed={0.5}
        minDistance={2}
        maxDistance={20}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

export default function Home() {
  const sunColor = ["#D14009", "#FFCC33"];
  const cubeColor = ["#66EB73", "#649CD9"];
  const navigation = useNavigate();
  const [cubeHovered, setCubeHovered] = useState(false);

  const handleSphereClick = () => {
    navigation("/");
  };

  const handleCubeClick = () => {
    navigation("/about");
  };

  return (
    <>
      {
        <div
          style={{
            color: "red",
            visibility: cubeHovered ? "visible" : "hidden",
          }}
        >
          about
        </div>
      }
      <Canvas style={styles.canvas}>
        {cubeHovered && (
          <Text scale={[2, 2, 2]} position={[1, 2.5, 0]} color="white">
            about
          </Text>
        )}
        <EnvironmentSetup />
        <Particles count={5000} color={"#191919"} />
        <AnimatedCube
          color={cubeColor}
          handleCubeClick={handleCubeClick}
          cubeHovered={cubeHovered}
          setCubeHovered={setCubeHovered}
        />
        <AnimatedSphere
          handleSphereClick={handleSphereClick}
          args={[1, 100, 200]}
          position={[0, 0, 0]}
          color={sunColor}
          distort={0.2}
          speed={2}
        />
      </Canvas>
    </>
  );
}
