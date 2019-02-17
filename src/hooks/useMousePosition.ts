import { useEffect, useState } from 'react';

/**
 * Declaratively use the mouse position in the window
 */
const useMousePosition = () => {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setXY({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return xy;
};

export default useMousePosition;
