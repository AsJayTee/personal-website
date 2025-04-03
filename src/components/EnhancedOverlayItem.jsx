import { useState } from "react";
import { Html, Billboard } from "@react-three/drei";
import { useAtom } from "jotai";

export const EnhancedOverlayItem = ({
  position = [0, 0, 0],
  title = "Title",
  description = "Description text goes here",
  bgColor = "bg-blue-500",
  bgColorHover = "bg-blue-600",
  textColor = "text-black",
  headerTextColor = "text-black",
  buttonTextColor = "text-white",
  buttonText = "View Details",
  width = "w-48",
  currentPageAtom,
  headerBgOpacity = "bg-opacity-20", 
  buttonBgOpacity = "bg-opacity-70", 
  useGlassEffect = true,
  onItemClick = () => {},
  className = "",
  ...props
}) => {
  const [currentPage] = useAtom(currentPageAtom);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Billboard position={position} follow={true} lockX={false} lockY={false} lockZ={false}>
      <Html
        transform
        distanceFactor={5}
        center
        className={`${width} ${
          currentPage === "room" ? "" : "opacity-0"
        } transition-opacity duration-1000 ${className}`}
        {...props}
      >
        {/* Wrapper div with padding to prevent clipping on hover */}
        <div className="p-2 -m-2 transition-transform duration-300" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
          <div 
            className={`overflow-hidden rounded-md shadow-lg transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onItemClick}
          >
            <div
              className={`bg-white ${isHovered ? 'bg-opacity-95' : headerBgOpacity} ${useGlassEffect && !isHovered ? 'backdrop-blur-sm' : ''} 
                p-2 w-full rounded-t-md transition-all duration-300 cursor-pointer`}
            >
              <h2 className={`font-bold text-sm ${isHovered ? 'text-black' : headerTextColor} ${!isHovered && 'text-shadow'}`}>{title}</h2>
              <p className={`text-xs ${isHovered ? 'text-black' : textColor} ${!isHovered && 'text-shadow'}`}>{description}</p>
            </div>
            <div 
              className={`${isHovered ? bgColorHover : bgColor} ${isHovered ? 'opacity-100' : buttonBgOpacity} 
              transition-all duration-300 px-4 py-2 font-bold ${buttonTextColor} w-full text-xs rounded-b-md cursor-pointer`}
            >
              {buttonText}
            </div>
          </div>
        </div>
      </Html>
    </Billboard>
  );
};
