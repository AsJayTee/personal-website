import { useState, useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useAtom } from 'jotai';
import { qualityAtom } from './Experience';

export const AdaptiveEffects = () => {
  const [quality] = useAtom(qualityAtom);
  const [intensity, setIntensity] = useState(quality === 'high' ? 0.5 : 0);

  useEffect(() => {
    const targetIntensity = quality === 'high' ? 0.5 : 0;
    
    if (intensity === targetIntensity) return;
    
    const duration = 3000; 
    const startIntensity = intensity;
    const startTime = performance.now();
    let animationFrame;
    
    const animateIntensity = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic ease-out for smooth transition
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setIntensity(startIntensity + (targetIntensity - startIntensity) * eased);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateIntensity);
      }
    };
    
    animationFrame = requestAnimationFrame(animateIntensity);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [quality]);

  return (
    <EffectComposer>
      <Bloom mipmapBlur={1} intensity={intensity} />
    </EffectComposer>
  );
};
