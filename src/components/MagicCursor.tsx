import React, { useState, useEffect } from "react";

interface MagicCursorProps {
  children: React.ReactNode;
  image?: string;
  text?: string;
  color?: string;
  imageWidth?: string;
  imageHeight?: string;
  transitionDuration?: string;
}

const MagicCursor: React.FC<MagicCursorProps> = ({
  children,
  image,
  text,
  color = "black",
  imageWidth = "200px",
  imageHeight = "200px",
  transitionDuration = "0.3s",
}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
    opacity: hovered ? 1 : 0,
    transition: `left ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1),
    top ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1),
    opacity ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1)`,
    cursor: "none",
  };

  const cursorWrapperStyle: React.CSSProperties = {
    position: "relative",
  };

  const childrenWithCursor = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement<any>, {
      style: { cursor: "pointer" },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    })
  );

  return (
    <div style={cursorWrapperStyle}>
      {childrenWithCursor}
      <div style={cursorStyle}>{text}</div>
    </div>
  );
};

export default MagicCursor;

