import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { UI } from "./components/UI";
import { ModalManager } from "./components/ModalManager";
import { QualityToggle } from "./components/QualityToggle";
import { AdaptiveEffects } from "./components/AdaptiveEffects";
import { detectDeviceCapabilities } from "./utils/deviceDetection";
import { useAtom } from "jotai";
import { qualityAtom } from "./components/Experience";
import { PerformanceMonitor } from "./components/PerformanceMonitor";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [, setQuality] = useAtom(qualityAtom);
  
  useEffect(() => {
    const recommendedQuality = detectDeviceCapabilities();
    console.log(`Setting initial quality to: ${recommendedQuality}`);
    setQuality(recommendedQuality);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setQuality]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Canvas shadows camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 30]} />
        <Suspense fallback={null} onLoad={() => setIsLoading(false)}>
          <Experience />
        </Suspense>
        <AdaptiveEffects />
      </Canvas>
      <UI />
      <ModalManager />
      <QualityToggle />
      <PerformanceMonitor />
    </>
  );
}

export default App;
