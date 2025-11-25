import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export const Counter = ({ value }: { value: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, Number(value), {
        duration: 2.5,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = roundedValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = String(latest);
      }
    });

    return () => unsubscribe();
  }, [roundedValue]);

  return <span ref={nodeRef}>0</span>;
};
// -------------------------------
