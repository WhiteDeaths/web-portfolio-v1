import React, { useEffect, useRef } from "react";
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  useEffect(() => {
    let currentScroll = 0;
    let requestId;
    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      const scrollDelta = newScroll - currentScroll;
      currentScroll = newScroll;
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        const initialPos = initialPositions[index];
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340;
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;
        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;
        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.transition = "transform 1.4s ease-out";
      });
      requestId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="animated-bg-root">
      <div className="animated-bg-blobs">
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="animated-bg-blob purple"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="animated-bg-blob cyan hide-sm"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="animated-bg-blob blue left"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="animated-bg-blob blue right hide-sm"
        ></div>
      </div>
      <div className="animated-bg-grid"></div>
    </div>
  );
};

export default AnimatedBackground;
