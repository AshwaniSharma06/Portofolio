import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      // Add trail point for spiderweb trail effect
      setTrail((prevTrail) => [
        ...prevTrail.slice(-8), // Keep last 8 trail points
        { x, y, id: Math.random(), size: Math.random() * 6 + 4, opacity: 0.6 }
      ]);
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Hide cursor on touch screens or when off window
  if (position.x < 0 || position.y < 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Spiderweb Trail Particles */}
      {trail.map((point) => (
        <div
          key={point.id}
          className="absolute rounded-full bg-brand-red pointer-events-none transition-opacity duration-500"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            transform: 'translate(-50%, -50%)',
            opacity: point.opacity,
            boxShadow: '0 0 8px rgba(229, 9, 20, 0.6)',
          }}
        />
      ))}

      {/* Main Cursor Outer Ring */}
      <div
        className={`absolute rounded-full border-2 border-brand-red pointer-events-none transition-transform duration-150 ease-out ${
          isHovered ? 'scale-150 bg-brand-red/10 border-brand-red' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '32px',
          height: '32px',
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.5)' : 'scale(1)'}`,
          boxShadow: '0 0 12px rgba(229, 9, 20, 0.4)',
        }}
      />

      {/* Main Cursor Core Red Dot */}
      <div
        className="absolute rounded-full bg-brand-red pointer-events-none transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
