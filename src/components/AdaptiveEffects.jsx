import { useEffect, useState } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const AdaptiveEffects = () => {
  const [quality, setQuality] = useState('high');
  
  useEffect(() => {
    const savedQuality = localStorage.getItem("preferredQuality");
    if (savedQuality === "low" || savedQuality === "high") {
      setQuality(savedQuality);
    }
  }, []);
  
  const bloomIntensity = quality === 'high' ? 0.5 : 0;

  return (
    <EffectComposer multisampling={0}>
      <Bloom 
        mipmapBlur={1} 
        intensity={bloomIntensity} 
        luminanceThreshold={0.8}
        luminanceSmoothing={0.8}
      />
    </EffectComposer>
  );
};
