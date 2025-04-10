import { useAtom } from "jotai";
import { qualityAtom } from "./Experience";

export const QualityToggle = () => {
  const [quality, setQuality] = useAtom(qualityAtom);
  
  const toggleQuality = () => {
    setQuality(quality === "high" ? "low" : "high");
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      <span className="mr-2 text-white text-sm font-medium">Quality</span>
      <div className="flex items-center">
        <button 
          onClick={toggleQuality}
          className={`relative w-20 h-7 rounded-full transition-colors duration-200 ${
            quality === "high" ? "bg-blue-500" : "bg-gray-600"
          }`}
          aria-label={`Switch to ${quality === "high" ? "low" : "high"} quality`}
        >
          {/* Absolutely positioned text elements */}
          <span 
            className={`absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors ${
              quality === "low" ? "text-white" : "text-white/40"
            }`}
          >
            Low
          </span>
          <span 
            className={`absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors ${
              quality === "high" ? "text-white" : "text-white/40"
            }`}
          >
            High
          </span>
          
          {/* The sliding indicator */}
          <div 
            className={`absolute w-9 h-5 top-1 left-1 bg-white opacity-20 rounded-full transition-transform duration-200 ${
              quality === "high" ? "translate-x-8.75" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
