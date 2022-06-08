import "./App.css";
import Home from "./pages/Home";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const styles = {
  canvas: {
    position: "absolute",
    background: "black",
    width: "100%",
    height: "100%",
  },
};

function App() {
  return (
    <Canvas style={styles.canvas}>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Home />
    </Canvas>
  );
}

export default App;
