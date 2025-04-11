import { CameraControls } from "@react-three/drei";
import { WebsiteText } from "./WebsiteText";
import { StaticRoom } from "./StaticRoom";
import { Floor } from "./Floor";
import { Lighting } from "./Lighting";
import { useEffect, useRef, useState, useCallback } from "react";
import { InvisibleBoxHome } from "./InvisibleBoxHome";
import { InvisibleBoxRoom } from "./InvisibleBoxRoom";
import { useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";
import { atom } from "jotai";
import { degToRad } from "three/src/math/MathUtils.js";

export const currentPageAtom = atom("intro");
export const qualityAtom = atom("high");
export const qualityUIAtom = atom("high");

const useAnimatedOpacity = (initialValue = 1, threshold = 0.001) => {
  const value = useRef(initialValue);
  const target = useRef(initialValue);
  const isAnimating = useRef(false);
  const lastTime = useRef(0);
  
  const set = useCallback((newTarget, onComplete) => {
    target.current = newTarget;
    isAnimating.current = true;
    
    if (Math.abs(value.current - target.current) < threshold) {
      value.current = target.current;
      isAnimating.current = false;
      onComplete?.();
    }
  }, [threshold]);
  
  const update = useCallback((delta) => {
    if (!isAnimating.current) return value.current;
    
    const speed = 5 * delta;
    const diff = target.current - value.current;
    
    if (Math.abs(diff) < threshold) {
      value.current = target.current;
      isAnimating.current = false;
      return value.current;
    }
    
    value.current += diff * speed;
    return value.current;
  }, [threshold]);
  
  return [value, target, set, update, isAnimating];
};

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraRoom = useRef();
  const textMaterial1 = useRef();
  const textMaterial2 = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [quality, setQuality] = useAtom(qualityAtom);
  const [, setQualityUI] = useAtom(qualityUIAtom);
  const [showText, setShowText] = useState(true);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  
  const [opacityValue, opacityTarget, setOpacityTarget, updateOpacity, isAnimating] = useAnimatedOpacity(1);
  
  useEffect(() => {
    const savedQuality = localStorage.getItem("preferredQuality");
    if (savedQuality === "low" || savedQuality === "high") {
      setQuality(savedQuality);
      setQualityUI(savedQuality);
    }
  }, []); 

  useFrame((_, delta) => {
    if (!textMaterial1.current || !textMaterial2.current) return;
    
    if (isAnimating.current) {
      const opacity = updateOpacity(delta);
      textMaterial1.current.opacity = opacity;
      textMaterial2.current.opacity = opacity;
      
      if (opacity < 0.001 && opacityTarget.current === 0 && showText) {
        setShowText(false);
      }
    }
  });

  useEffect(() => {
    if (currentPage === "home" || currentPage === "intro") {
      setShowText(true);
      setOpacityTarget(1);
    } else {
      setOpacityTarget(0);
    }
  }, [currentPage, setOpacityTarget]);

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
