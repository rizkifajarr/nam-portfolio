"use client";

import { useEffect } from "react";

const LoveBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".love-background");

    const createLove = () => {
      if (!container) return;
      const heart = document.createElement("div");
      heart.className = "love";
      heart.innerText = "💖";

      // Random posisi X dan durasi animasi
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 3 + "s";
      heart.style.fontSize = 14 + Math.random() * 10 + "px";

      container.appendChild(heart);

      setTimeout(() => {
        container.removeChild(heart);
      }, 6000);
    };

    const interval = setInterval(createLove, 300); // 1 heart setiap 0.3 detik
    return () => clearInterval(interval);
  }, []);

  return <div className="love-background"></div>;
};

export default LoveBackground;
