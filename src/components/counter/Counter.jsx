import { useEffect, useState } from "react";

function Counter({ end }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 3000; 
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.floor(progress * end);

      setValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return <span>{value}</span>;
}

export default Counter;