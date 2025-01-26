import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import FlipCard from "./ui/FlipCard";

const Approach = () => {
  return (
    <section className='py-20' id="approach">
      <TextGenerateEffect
        className='text-center text-[40px] md:text-5xl lg:text-6xl'
        words='An Insight Into My Work Approach'
        startOnView={true}
      />
      <>
        <div className="text-lg my-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
          <FlipCard image={'/avatartion.png'} title={"Always Asking Why"} description={"I’m driven by curiosity. I don’t just build things—I dig deeper to understand the 'why' behind every problem. This curiosity fuels my passion for exploring new technologies, experimenting with unconventional solutions, and continuously pushing boundaries to create meaningful impact."} width="300px" height="450px"/>
          <FlipCard image={'/avatartion.png'} title={"Code with a Story"} description={"To me, every project is a story waiting to be told. From the initial idea to the final product, I focus on creating seamless, intuitive experiences that resonate with users. I believe that great technology isn’t just functional—it tells a story that connects with people on a deeper level."} width="300px" height="450px"/>
          <FlipCard image={'/avatartion.png'} title={"Building for Tomorrow"} description={"I approach every project like an architect—meticulously planning, designing, and building robust systems that stand the test of time. My focus is on creating scalable, maintainable solutions that not only solve today’s problems but also pave the way for future innovation."} width="300px" height="450px"/>
          </div>
      </>
    </section>
  );
}
export default Approach;
