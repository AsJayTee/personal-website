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
import { degToRad } from "three/src/math/MathUtils.js";

export const currentPageAtom = atom("intro");
export const qualityAtom = atom("high");

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraRoom = useRef();
  const textMaterial1 = useRef();
  const textMaterial2 = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [showText, setShowText] = useState(true);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useFrame((_, delta) => {
    if (!showText) return; 
    
    if (currentPage === "home" || currentPage === "intro") {
      textMaterial1.current.opacity = lerp(
        textMaterial1.current.opacity,
        1,
        delta * 1.5
      );
      textMaterial2.current.opacity = lerp(
        textMaterial2.current.opacity,
        1,
        delta * 1.5
      );
    } else {
      textMaterial1.current.opacity = lerp(
        textMaterial1.current.opacity,
        0,
        delta * 1.5
      );
      textMaterial2.current.opacity = lerp(
        textMaterial2.current.opacity,
        0,
        delta * 1.5
      );
      
      if (textMaterial1.current.opacity < 0.001) {
        setShowText(false);
      }
    }
  });

  const intro = () => {
    controls.current.dolly(-40);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage("home");
      setTimeout(() => {
        setIsIntroComplete(true);
      }, 1000);
    }, 3500);
    fitCamera();
  };

  const fitCamera = () => {
    if (!controls.current) return;
    
    const targetMesh = currentPage === "room" 
      ? meshFitCameraRoom.current 
      : meshFitCameraHome.current;
    
    if (targetMesh) {
      controls.current.fitToBox(targetMesh, true);
    }
  };

  useEffect(() => {
    if (currentPage === "home" || currentPage === "intro") {
      setShowText(true);
    }
  }, [currentPage]);

  useEffect(() => {
    intro();
    
    const handleResize = () => {
      fitCamera();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fitCamera();
  }, [currentPage]);

  return (
    <>
      <CameraControls 
        ref={controls} 
        maxPolarAngle={degToRad(100)} 
        minDistance={2} 
        maxDistance={isIntroComplete ? 20 : 50} 
      />
      <InvisibleBoxHome meshFitRef={meshFitCameraHome} />
      <InvisibleBoxRoom meshFitRef={meshFitCameraRoom} />
      
      {showText && (
        <WebsiteText
          textMaterial1={textMaterial1}
          textMaterial2={textMaterial2}
          visible1={true}
          visible2={true}
        />
      )}
      
      <StaticRoom currentPageAtom={currentPageAtom} />
      <Floor />
      <Lighting />
    </>
  );
};
