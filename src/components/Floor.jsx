import { MeshReflectorMaterial } from "@react-three/drei";

export const Floor = () => {
  const floorPosition = [0, -1, 0];
  const floorRotation = [-Math.PI / 2, 0, 0];
  return (
    <>
      <mesh position={floorPosition} rotation={floorRotation}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
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
