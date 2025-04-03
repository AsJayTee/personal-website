export const InvisibleBoxRoom = ({ meshFitRef }) => {
  const boxSize = [4, 3, 4];
  const boxPosition = [3.2, 1, -0.5];
  const boxRotation = [-Math.PI / 2, 0, 0];

  return (
    <>
      <mesh ref={meshFitRef} position={boxPosition} rotation={boxRotation}>
        <boxGeometry args={boxSize} />
        <meshBasicMaterial
          color={"red"}
          transparent
          opacity={0.5}
          visible={false}
        />
      </mesh>
    </>
  );
};
