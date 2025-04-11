import { useAtom } from "jotai";
import { qualityUIAtom } from "./Experience";

export const QualityToggle = () => {
  const [qualityUI, setQualityUI] = useAtom(qualityUIAtom);
  
  const toggleQuality = () => {
    const newQuality = qualityUI === "high" ? "low" : "high";
    
    // Only update the UI state atom, not the rendering quality atom
    setQualityUI(newQuality);
    
    // Save the quality preference to localStorage
    try {
      localStorage.setItem("preferredQuality", newQuality);
      
      // Wait for the animation to complete before refreshing
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error) {
      console.error("Failed to save quality setting:", error);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      <span className="mr-2 text-white text-sm font-medium">Quality</span>
      <div className="flex items-center">
        <button 
          onClick={toggleQuality}
          className={`relative w-20 h-7 rounded-full transition-colors duration-200 ${
            qualityUI === "high" ? "bg-blue-500" : "bg-gray-600"
          }`}
          aria-label={`Switch to ${qualityUI === "high" ? "low" : "high"} quality`}
        >
          {/* Absolutely positioned text elements */}
          <span 
            className={`absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors ${
              qualityUI === "low" ? "text-white" : "text-white/40"
            }`}
          >
            Low
          </span>
          <span 
            className={`absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors ${
              qualityUI === "high" ? "text-white" : "text-white/40"
            }`}
          >
            High
          </span>
          
          {/* The sliding indicator */}
          <div 
            className={`absolute w-9 h-5 top-1 left-1 bg-white opacity-20 rounded-full transition-transform duration-200 ${
              qualityUI === "high" ? "translate-x-8.75" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
