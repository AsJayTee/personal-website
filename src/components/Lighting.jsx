import { Environment } from "@react-three/drei";

export const Lighting = () => {
  return (
    <>
      <Environment preset="sunset" environmentIntensity={0.5} />
    </>
  );
};
