import { useState } from 'react';
import './ShapeEditor.css';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'circle') {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
      
      return shape;
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          className = 'shape'
          style={{
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            left: shape.x,
            top: shape.y,
          }}
        />
      ))}
    </>
  );
}

export default ShapeEditor;