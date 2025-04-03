export const InvisibleBoxHome = ({ meshFitRef }) => {
  const boxSize = [7.1, 0.5, 2];
  const boxPosition = [0, 0, 1];
  const boxRotation = [-Math.PI / 2, 0, 0];

  return (
    <>
      <mesh ref={meshFitRef} position={boxPosition} rotation={boxRotation}>
        <boxGeometry args={boxSize} />
        <meshBasicMaterial
          color={"orange"}
          transparent
          opacity={0.5}
          visible={false}
        />
      </mesh>
    </>
  );
};
