import { Room } from "./Room";
import { degToRad } from "three/src/math/MathUtils";
import { Float, Environment } from "@react-three/drei";

export const FloatingRoom = () => {
  const floatingRoomPosition = [-0.5, -1.2, 0];
  const floatingRoomRotation = [degToRad(15), degToRad(45), 0];

  return (
    <>
      <color attach="background" args={["#fff"]} />
      <Environment preset="sunset" environmentIntensity={0.5} />
      <Float speed={1} rotationIntensity={3} floatIntensity={5}>
        <Room
          scale={0.25}
          position={floatingRoomPosition}
          rotation={floatingRoomRotation}
        />
      </Float>
    </>
  );
};
