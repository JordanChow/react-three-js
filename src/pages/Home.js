import React from "react";
import AnimatedCube from "../components/AnimatedCube";
import AnimatedSphere from "../components/AnimatedSphere";
import Particles from "../components/Particles";

export default function Home() {
  return (
    <>
      <Particles count={2000} />
      <AnimatedCube />
      <AnimatedSphere />;
    </>
  );
}
