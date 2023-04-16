import React, { useState } from "react";

interface CustomCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  text?: string;
  color?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  children,
  image,
  text,
  color = "black",
  imageWidth = "200px",
  imageHeight = "200px",
  ...attr
}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setHidden(false);
  };

  const handleMouseLeave = () => {
    setHidden(true);
  };

  const cursorStyle: React.CSSProperties = {
    position: "fixed",
    left: position.x,
    top: position.y,
    zIndex: 9999,
    pointerEvents: "none",
    width: imageWidth,
    height: imageHeight,
    backgroundImage: image ? `url(${image})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: color,
    cursor: text ? "text" : "none",
  };

  const styles = `
    .custom-cursor-element {
      cursor: none;
    }
  `;

  return (
    <>
      {!hidden && (
        <div style={cursorStyle} {...attr}>
          {text}
        </div>
      )}
      <div
        className="custom-cursor-element"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      <style>{styles}</style>
    </>
  );
};

export default CustomCursor;

