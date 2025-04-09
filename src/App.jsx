import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense, useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { UI } from "./components/UI";
import { ModalManager } from "./components/ModalManager";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Canvas shadows camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 30]} />
        <Suspense fallback={null} onLoad={() => setIsLoading(false)}>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur={1} intensity={0.5} />
        </EffectComposer>
      </Canvas>
      <UI />
      <ModalManager />
    </>
  );
}

export default App;
