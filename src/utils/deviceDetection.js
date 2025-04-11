// src/utils/deviceDetection.js

/**
 * Detects device capabilities and recommends quality setting
 * @returns {'high'|'low'} Recommended quality setting
 */
export const detectDeviceCapabilities = () => {
    console.log("Detecting device capabilities...");
    
    // 1. Check if device is mobile
    const isMobile = detectMobile();
    console.log("Is mobile device:", isMobile);
    
    if (isMobile) {
      console.log("Mobile device detected, setting quality to low");
      return 'low';
    }
    
    // 2. Check for GPU capabilities
    const gpuInfo = detectGPU();
    console.log("GPU info:", gpuInfo);
    
    if (gpuInfo.isGood) {
      console.log("Good GPU detected, setting quality to high");
      return 'high';
    }
    
    // 3. Check for RAM
    const ramInfo = detectRAM();
    console.log("RAM info:", ramInfo);
    
    if (ramInfo.isEnough) {
      console.log("Sufficient RAM detected, setting quality to high");
      return 'high';
    } else {
      console.log("Limited RAM detected, setting quality to low");
      return 'low';
    }
  };
  
  /**
   * Detects if user is on a mobile device based on screen size and user agent
   * @returns {boolean} True if mobile device detected
   */
  const detectMobile = () => {
    // Check screen size (typical mobile breakpoint)
    const isMobileSize = window.innerWidth < 768;
    
    // Check user agent for mobile devices
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return isMobileSize || isMobileUA;
  };
  
  /**
   * Detects GPU capabilities using WebGL renderer information
   * @returns {{renderer: string, isGood: boolean}} GPU info and quality assessment
   */
  const detectGPU = () => {
    let renderer = "Unknown";
    let isGood = false;
    
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        return { renderer, isGood: false };
      }
      
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        
        // Keywords that typically indicate a good GPU
        const goodGPUKeywords = [
          'NVIDIA', 'RTX', 'GTX', 'AMD', 'Radeon', 'RX', 
          'Intel Iris', 'Apple M', 'Metal'
        ];
        
        isGood = goodGPUKeywords.some(keyword => 
          renderer.includes(keyword)
        );
      }
    } catch (e) {
      console.error("Error detecting GPU:", e);
    }
    
    return { renderer, isGood };
  };
  
  /**
   * Detects available RAM using navigator.deviceMemory API if available
   * @returns {{memory: string, isEnough: boolean}} RAM info and assessment
   */
  const detectRAM = () => {
    let memory = "Unknown";
    let isEnough = true; // Default to true if we can't detect
    
    // Check for deviceMemory API support
    if ('deviceMemory' in navigator) {
      memory = `${navigator.deviceMemory} GB`;
      isEnough = navigator.deviceMemory >= 8; // 8GB threshold as specified
    } else {
      console.log("deviceMemory API not supported, defaulting to 'isEnough: true'");
    }
    
    return { memory, isEnough };
  };
