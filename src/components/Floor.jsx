import { MeshReflectorMaterial } from "@react-three/drei";
import { useAtom } from "jotai";
import { qualityAtom } from "./Experience";
import { useState, useEffect } from "react";

export const Floor = () => {
  const floorPosition = [0, -1, 0];
  const floorRotation = [-Math.PI / 2, 0, 0];
  const [quality] = useAtom(qualityAtom);
  
  const [resolution, setResolution] = useState(quality === "high" ? 2048 : 512);
  const [mixStrength, setMixStrength] = useState(quality === "high" ? 10 : 2);
  
  useEffect(() => {
    setResolution(quality === "high" ? 2048 : 512);
    
    const targetStrength = quality === "high" ? 10 : 2;
    const duration = 1000;
    const startStrength = mixStrength;
    const startTime = performance.now();
    let animationFrame;
    
    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setMixStrength(startStrength + (targetStrength - startStrength) * eased);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [quality]);

  return (
    <>
      <mesh position={floorPosition} rotation={floorRotation}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={resolution}
          mixBlur={1}
          mixStrength={mixStrength}
          roughness={1}
          depthScale={1}
          opacity={1}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
    </>
  );
};
