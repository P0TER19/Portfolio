"use client"
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('rayenbenbetaieb@gmail.com');
    setCopied(true);
  }
  const gradients:Record<number,string>={
    1: "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(0,255,156,0.4) 100%)",
    2: "radial-gradient(circle,  rgba(255,255,255,1) 60%, rgba(63,90,185,0.4) 100%)",
    3: "radial-gradient(circle,  rgba(255,255,255,1) 60%, rgba(140,10,179,0.4) 100%)",
    4: "radial-gradient(circle,  rgba(255,255,255,1) 60%, rgba(247,37,79,0.4) 100%)",
    5: "radial-gradient(circle,  rgba(255,255,255,1) 60%, rgba(223,230,28,0.4) 100%)",
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4 border border-black/[0.1]",
        className
      )}
      style={{
background: gradients[id], 
      }}
    >
      <div className={`${id===6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
              />
          )}
      </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
          <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
              />
          )}
      </div>
        {id===6 && (
<BackgroundGradientAnimation>
</BackgroundGradientAnimation>
        )}
        <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
        <div className="font-Kode font-extralight text-black text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
        <div className="font-Kode font-bold text-lg lg:text-3xl max-w-96 z-10"> 
          {title}
        </div>
        {id===2 && <GlobeDemo />}
        {id===3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3">
              {['React.js', 'Next.js', 'TypeScript'].map((item)=> (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-gray-400">
              {item}
              </span>
              ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#5b5d70]"/>

            </div>
            <div className="flex flex-col gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#5b5d70]"/>
              {['Python', 'C', 'C++'].map((item)=> (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-gray-400">
              {item}
              </span>
              ))}
                

            </div>
        </div>
        )}
          {id===6 && (
          <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:'xMidYMid slice',
                  }
                }}/>
          </div>
              <MagicButton 
                title={copied ? 'Email Copied' : 'Copy my email'}
                icon={<IoCopyOutline/>}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
          </div>
          )}
      </div>
    </div>
    </div>
  );
};
