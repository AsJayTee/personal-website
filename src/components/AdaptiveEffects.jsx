import { useEffect, useState } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const AdaptiveEffects = () => {
  // Use local state that's only set on mount
  const [quality, setQuality] = useState('high');
  
  // Read from localStorage only on mount, not on every render
  useEffect(() => {
    const savedQuality = localStorage.getItem("preferredQuality");
    if (savedQuality === "low" || savedQuality === "high") {
      setQuality(savedQuality);
    }
  }, []);
  
  // Set bloom intensity based on the local quality state
  const bloomIntensity = quality === 'high' ? 0.5 : 0;

  return (
    <EffectComposer>
      <Bloom mipmapBlur={1} intensity={bloomIntensity} />
    </EffectComposer>
  );
};
