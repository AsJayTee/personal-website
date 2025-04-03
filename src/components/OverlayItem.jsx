import { useAtom } from "jotai";
import { Html } from "@react-three/drei";

export const OverlayItem = ({
  className = "",
  title,
  description,
  price,
  bgColor,
  currentPageAtom,
  ...props
}) => {
  const [currentPage] = useAtom(currentPageAtom);
  console.log(currentPage);
  return (
    <Html
      transform
      distanceFactor={5}
      center
      className={`w-48 rounded-md overflow-hidden ${
        currentPage === "room" ? "" : "opacity-0"
      } transition-opacity duration-1000 ${className}`}
      {...props}
    >
      <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <button
        className={`${bgColor} hover:bg-opacity-50 transition-colors duration-500 px-4 py-2 font-bold text-white w-full text-xs`}
      >
        Add to cart ${price}
      </button>
    </Html>
  );
};
