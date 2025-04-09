import { useState, useEffect } from "react";
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
  width = "w-56",
  currentPageAtom,
  headerBgOpacity = "bg-opacity-20", 
  buttonBgOpacity = "bg-opacity-70", 
  useGlassEffect = true,
  onItemClick = () => {},
  className = "",
  modalTitle = "",
  modalContent = null,
  modalBgColor = "bg-white",
  modalBorderColor = "border-gray-200",
  ...props
}) => {
  const [currentPage] = useAtom(currentPageAtom);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkModalState = () => {
      setIsModalOpen(!!window.isModalOpen);
    };
    
    checkModalState();
    
    const intervalId = setInterval(checkModalState, 100);
    
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    if (window.openModal) {
      window.openModal({
        title: modalTitle || title,
        content: modalContent,
        bgColor: modalBgColor,
        borderColor: modalBorderColor
      });
    }
    onItemClick();
  };

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
        <div 
          className="p-3 -m-3" 
          style={{ 
            transform: isHovered && !isModalOpen 
              ? 'scale(1.15) translateY(-8px)' 
              : 'scale(1) translateY(0)',
            opacity: isModalOpen ? 0 : 1,
            transition: 'opacity 200ms ease-out, transform 300ms ease-out',
            pointerEvents: isModalOpen ? 'none' : 'auto',
            willChange: 'opacity, transform'
          }}
        >
          <div 
            className={`overflow-hidden rounded-md transition-all duration-300 ${
              isHovered && !isModalOpen
                ? 'shadow-xl ring-2 ring-white ring-opacity-50' 
                : 'shadow-md'
            }`}
            onMouseEnter={() => !isModalOpen && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            <div
              className={`${
                isHovered && !isModalOpen
                  ? 'bg-white bg-opacity-95' 
                  : `${useGlassEffect ? 'glass' : 'bg-white'} ${headerBgOpacity}`
              } p-3 w-full rounded-t-md transition-all duration-300 cursor-pointer`}
            >
              <h2 
                className={`font-bold text-base ${isHovered && !isModalOpen ? 'text-black' : headerTextColor}`}
                style={{ 
                  transform: isHovered && !isModalOpen ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out' 
                }}
              >
                {title}
              </h2>
              <p className={`text-sm ${isHovered && !isModalOpen ? 'text-black' : textColor}`}>{description}</p>
            </div>
            <div 
              className={`${isHovered && !isModalOpen ? bgColorHover : bgColor} ${
                isHovered && !isModalOpen ? 'opacity-100' : buttonBgOpacity
              } transition-all duration-300 px-4 py-3 font-bold ${buttonTextColor} w-full text-sm rounded-b-md cursor-pointer`}
            >
              {buttonText}
            </div>
          </div>
        </div>
      </Html>
    </Billboard>
  );
};
