import React, { useEffect, useState } from 'react'

const CursorFollower = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", moveCursor);
    return () => window.addEventListener("mousemove", moveCursor);
  });


  return (
    <div style={{
        position: "fixed",
        top: position.y + 10,
        left: position.x + 10,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        transition: "transform 0.1s ease-out"
    }}>
      😊
    </div>
  )
}

export default CursorFollower
