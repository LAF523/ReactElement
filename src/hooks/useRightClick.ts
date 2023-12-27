import { useEffect, useState } from 'react';

const useRightClick = (fun: { (e: any): void; (arg0: EventTarget | null): void }) => {
  const [position, setPosition] = useState<{ x: number; y: number; target: any | undefined }>({
    x: 0,
    y: 0,
    target: undefined
  });

  useEffect(() => {
    const handleRightClick = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY, target: event.target });
    };

    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('mousedown', e => {
      fun(e.target);
    });

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  return position;
};
export default useRightClick;
