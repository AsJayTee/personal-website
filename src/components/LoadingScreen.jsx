import React, { useState, useEffect } from "react";

export const LoadingScreen = ({ isLoading }) => {
  const [opacity, setOpacity] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setOpacity(0);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#171720",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: opacity,
        transition: "opacity 0.5s ease",
        pointerEvents: opacity === 0 ? "none" : "auto",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "5px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          borderTop: "5px solid white",
          animation: "spin 1s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
