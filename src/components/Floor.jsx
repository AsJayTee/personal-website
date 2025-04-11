import { MeshReflectorMaterial } from "@react-three/drei";
import { useEffect, useState } from "react";

export const Floor = () => {
  const floorPosition = [0, -1, 0];
  const floorRotation = [-Math.PI / 2, 0, 0];
  
  const [quality, setQuality] = useState('high');
  
  useEffect(() => {
    const savedQuality = localStorage.getItem("preferredQuality");
    if (savedQuality === "low" || savedQuality === "high") {
      setQuality(savedQuality);
    }
  }, []);
  
  const resolution = quality === "high" ? 2048 : 256;
  const mixStrength = quality === "high" ? 10 : 2;

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
