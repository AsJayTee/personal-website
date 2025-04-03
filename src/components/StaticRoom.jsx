import { Room } from "./Room";
import { degToRad } from "three/src/math/MathUtils";

export const StaticRoom = ({ currentPageAtom }) => {
  const buildingPosition = [3.3, -1, -2.2];
  const buildingRotation = [0, degToRad(20), 0];

  return (
    <>
      <group position={buildingPosition} rotation={buildingRotation}>
        <Room scale={0.5} html={true} currentPageAtom={currentPageAtom} />
      </group>
    </>
  );
};
