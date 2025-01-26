"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothText() {
  const words = [
    {
      text: "Will",
    },
    {
      text: "post",
    },
    {
      text: "something",
    },
    {
      text: "soon",
    },
    {
      text: "...",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
