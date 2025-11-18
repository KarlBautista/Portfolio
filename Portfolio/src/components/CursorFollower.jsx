import React, { useEffect, useRef } from 'react';
import Blue from "../assets/blue.png";

const CursorFollower = () => {
  const followerRef = useRef(null);
  const position = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const angle = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.05;
      position.current.y += (mouse.current.y - position.current.y) * 0.05;

      const bobX = Math.sin(angle.current) * 5; 
      const bobY = Math.cos(angle.current) * 5; 
      angle.current += 0.05;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${position.current.x + bobX}px, ${position.current.y + bobY}px, 0) rotate(${Math.sin(angle.current) * 10}deg)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        transform: "translate3d(0,0,0)",
      }}
    >
      <img src={Blue} alt="cursor" className="w-full h-full" />
    </div>
  );
};

export default CursorFollower;
