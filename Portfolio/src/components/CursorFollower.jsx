import React, { useEffect, useRef } from 'react';
import Cat from "../assets/cat.gif";

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
      position.current.x += (mouse.current.x - position.current.x) * 0.01;
      position.current.y += (mouse.current.y - position.current.y) * 0.01;

      const bobX = Math.sin(angle.current) * 1; 
      const bobY = Math.cos(angle.current) * 1; 
        angle.current += 0.01;

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
        width: "120px",
        height: "70px",
        transform: "translate3d(0,0,0)",
      }}
    >
      <img src={Cat} alt="cursor" className="w-full h-full" />
    </div>
  );
};

export default CursorFollower;
