import { useState } from 'react';
import './MovingDot.css';

function MovingDot() {
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
          position.x = e.clientX;
          position.y = e.clientY;
      }}
      className="board">
      <div 
        className="dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  )
}

export default MovingDot;