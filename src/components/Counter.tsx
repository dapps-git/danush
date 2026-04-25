import { useState, useEffect } from "react";

export const Counter = ({
  end,
  duration = 1000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Fast, snappy ease-out
      const easeOut = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end precisely
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};
