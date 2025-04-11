import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { qualityAtom } from './Experience';

// TEST MODE - Forces low FPS detection for testing the recommendation popup
const TEST_MODE = false;  // Set to true to force low FPS recommendations
const TEST_FPS = 22;    // Simulated FPS value for testing

export const PerformanceMonitor = () => {
  const [quality] = useAtom(qualityAtom);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [currentFps, setCurrentFps] = useState(TEST_MODE ? TEST_FPS : 60);
  const [dismissed, setDismissed] = useState(false);
  
  useEffect(() => {
    if (quality !== 'high') return;
    
    if (TEST_MODE) {
      console.log('⚠️ TEST MODE ACTIVE: Simulating low FPS');
      
      localStorage.removeItem('performanceRecommendationDismissed');
      
      const timer = setTimeout(() => {
        setShowRecommendation(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    
    let frameCount = 0;
    let lastTime = performance.now();
    let lowFpsCounter = 0;
    let active = true;
    let lastRecommendationTime = 0;
    
    const hasRecentlyDismissed = localStorage.getItem('performanceRecommendationDismissed');
    const dismissedTime = parseInt(hasRecentlyDismissed || '0');
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    
    if (dismissedTime > oneHourAgo) {
      setDismissed(true);
      return; 
    }
    
    const measurePerformance = () => {
      if (!active) return;
      
      frameCount++;
      const now = performance.now();
      
      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        console.log(`FPS: ${fps}`);
        setCurrentFps(fps);
        
        if (fps < 40) {
          lowFpsCounter++;
          
          if (lowFpsCounter >= 3 && now - lastRecommendationTime > 120000 && !dismissed) {
            setShowRecommendation(true);
            lastRecommendationTime = now;
          }
        } else {
          lowFpsCounter = 0;
        }
        
        frameCount = 0;
        lastTime = now;
      }
      
      requestAnimationFrame(measurePerformance);
    };
    
    requestAnimationFrame(measurePerformance);
    
    return () => {
      active = false;
    };
  }, [quality, dismissed]);
  
  const handleSwitchQuality = () => {
    try {
      localStorage.setItem('preferredQuality', 'low');
      
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error) {
      console.error('Failed to save quality setting:', error);
    }
  };
  
  const handleDismiss = () => {
    setShowRecommendation(false);
    setDismissed(true);
    
    try {
      localStorage.setItem('performanceRecommendationDismissed', Date.now().toString());
    } catch (error) {
      console.error('Failed to save dismissal state:', error);
    }
  };
  
  if (!showRecommendation) return null;
  
  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg z-50 animate-modalIn">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold">Performance Alert {TEST_MODE ? "(Test Mode)" : ""}</h3>
        <button 
          onClick={handleDismiss} 
          className="text-gray-400 hover:text-white"
          aria-label="Dismiss"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <p className="mb-3">
        We've detected your FPS is low ({currentFps}). For smoother performance, 
        we recommend switching to low quality mode.
      </p>
      
      <div className="flex space-x-3">
        <button
          onClick={handleSwitchQuality}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors"
        >
          Switch to Low Quality
        </button>
        <button
          onClick={handleDismiss}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};
