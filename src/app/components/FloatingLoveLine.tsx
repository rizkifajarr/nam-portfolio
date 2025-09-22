"use client";

const FloatingLoveLine = () => {
  const line = Array(100).fill("💖").join("  "); // spasi antar ikon

  return (
    <div className="love-marquee-container mt-10">
      <div className="love-marquee-track">{line}</div>
    </div>
  );
};

export default FloatingLoveLine;
