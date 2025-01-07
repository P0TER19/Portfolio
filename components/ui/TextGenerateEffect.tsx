"use client";

import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  startOnView = false,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  startOnView?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!startOnView); 

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (isVisible) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [animate, filter, duration, isVisible]);

  const renderWords = () => {
    const wordsArray = words.split(" ");
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${idx > 3 ? "text-blue-800" : "dark:text-white text-black"} opacity-0`}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      ref={textRef} 
      className={cn("font-bold ", className)}
    >
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
