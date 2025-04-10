import { CameraControls } from "@react-three/drei";
import { WebsiteText } from "./WebsiteText";
import { StaticRoom } from "./StaticRoom";
import { Floor } from "./Floor";
import { Lighting } from "./Lighting";
import { useEffect, useRef, useState } from "react";
import { InvisibleBoxHome } from "./InvisibleBoxHome";
import { InvisibleBoxRoom } from "./InvisibleBoxRoom";
import { useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils.js";
import { atom } from "jotai";

export const currentPageAtom = atom("intro");
export const qualityAtom = atom("high");

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraRoom = useRef();
  const textMaterial1 = useRef();
  const textMaterial2 = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [textVisible1, setTextVisible1] = useState(true);
  const [textVisible2, setTextVisible2] = useState(true);

  useFrame((_, delta) => {
    if (currentPage === "home" || currentPage === "intro") {
      if (!textVisible1) setTextVisible1(true);
      textMaterial1.current.opacity = lerp(
        textMaterial1.current.opacity,
        1,
        delta * 1.5
      );
    } else {
      textMaterial1.current.opacity = lerp(
        textMaterial1.current.opacity,
        0,
        delta * 1.5
      );
      if (textMaterial1.current.opacity < 0.001) {
        setTextVisible1(false);
      }
    }
  });

  useFrame((_, delta) => {
    if (currentPage === "home" || currentPage === "intro") {
      if (!textVisible2) setTextVisible2(true);
      textMaterial2.current.opacity = lerp(
        textMaterial2.current.opacity,
        1,
        delta * 1.5
      );
    } else {
      textMaterial2.current.opacity = lerp(
        textMaterial2.current.opacity,
        0,
        delta * 1.5
      );
      if (textMaterial2.current.opacity < 0.001) {
        setTextVisible2(false);
      }
    }
  });

  const intro = async () => {
    controls.current.dolly(-40);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage("home");
    }, 3500);
    // controls.current.dolly(40, true);
    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === "room") {
      controls.current.fitToBox(meshFitCameraRoom.current, true);
    } else {
      controls.current.fitToBox(meshFitCameraHome.current, true);
    }
  };

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  useEffect(() => {
    intro();
  }, []);

  return (
    <>
      <CameraControls ref={controls} />
      <InvisibleBoxHome meshFitRef={meshFitCameraHome} />
      <InvisibleBoxRoom meshFitRef={meshFitCameraRoom} />
      <WebsiteText
        textMaterial1={textMaterial1}
        textMaterial2={textMaterial2}
        visible1={textVisible1}
        visible2={textVisible2}
      />
      <StaticRoom currentPageAtom={currentPageAtom} />
      <Floor />
      <Lighting />
    </>
  );
};
