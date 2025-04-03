import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { currentPageAtom } from "./Experience";

export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (currentPage === "home") {
      setOpacity(0);

      const intervalId = setInterval(() => {
        setOpacity((prev) => {
          const newOpacity = prev + 0.01;
          if (newOpacity >= 1) {
            clearInterval(intervalId);
            return 1;
          }
          return newOpacity;
        });
      }, 10);

      return () => clearInterval(intervalId);
    } else {
      setOpacity(0);
    }
  }, [currentPage]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => setCurrentPage("room")}
          className="pointer-events-auto py-4 px-8 bg-blue-300 text-white font-medium rounded-full hover:bg-blue-500 cursor-pointer font-sans transition-colors duration-150"
          style={{ opacity }}
        >
          Hello
        </button>
      </section>
    </div>
  );
};
