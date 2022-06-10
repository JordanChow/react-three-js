import React, { useState } from "react";
import AnimatedCube from "../components/AnimatedCube";
import AnimatedSphere from "../components/AnimatedSphere";
import Particles from "../components/Particles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import randomColor from "randomcolor";

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
  const [sphereColor, setSphereColor] = useState([
    randomColor({ luminosity: "dark" }),
    randomColor({ luminosity: "dark" }),
  ]);

  const handleSphere = () => {
    setSphereColor([
      randomColor({ luminosity: "dark" }),
      randomColor({ luminosity: "dark" }),
    ]);
  };

  return (
    <Canvas style={styles.canvas}>
      <EnvironmentSetup />
      <Particles count={5000} color={"#191919"} />
      <AnimatedCube />
      <AnimatedSphere
        handleSphere={handleSphere}
        args={[1, 100, 200]}
        position={[0, 0, 0]}
        color={sphereColor}
        distort={0.2}
        speed={2}
      />
    </Canvas>
  );
}
