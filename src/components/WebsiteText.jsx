import { RenderTexture, Text, useFont } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { Color } from "three";
import { FloatingRoom } from "./FloatingRoom";
import { useAtom } from "jotai";
import { qualityAtom } from "./Experience";
import { useEffect, useRef } from "react";

export const WebsiteText = ({
  textMaterial1,
  textMaterial2,
  visible1,
  visible2,
}) => {
  const [quality] = useAtom(qualityAtom);
  const textPosition = [-1.5, -0.75, 0];
  const textRotation = [0, degToRad(30), 0];
  const renderTextureRef = useRef(null);

  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.5);

  return (
    <>
      <Text
        font={"fonts/Poppins-Black.ttf"}
        fontSize={1}
        position={textPosition}
        rotation={textRotation}
        textAlign="center"
        anchorY="bottom"
        lineHeight={0.8}
      >
        SIAH{"\n"}JIN THAU
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial1}
          visible={visible1}
        >
          <RenderTexture ref={renderTextureRef} attach={"map"}>
            {quality === "high" && <FloatingRoom />}
            {quality === "low" && (
              <color attach="background" args={["#ffffff"]} />
            )}
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <Text
        font={"fonts/Poppins-Light.ttf"}
        fontSize={0.2}
        position={textPosition}
        rotation={textRotation}
        textAlign="center"
        anchorY="top"
        lineHeight={1.2}
      >
        Data Science & Computer Science @ NUS
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial2}
          visible={visible2}
        />
      </Text>
    </>
  );
};

useFont.preload("fonts/Poppins-Black.ttf");
useFont.preload("fonts/Poppins-Light.ttf");
