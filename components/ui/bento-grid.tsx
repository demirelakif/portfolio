'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { FaCopy } from "react-icons/fa";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
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
  exClassname
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
  exClassname?:string
}) => {
  const [copied, setCopied] = useState(false);

  const handleShowCV = () => {
    const cvUrl = "/AkifDemirelCv.pdf";  // CV PDF dosyanın URL'si
    window.open(cvUrl, "_blank");  // Yeni bir sekmede açar
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{ background: "rgb(2,0,36);", backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);" }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              className={cn(imgClassName, ' object-cover object-center')}
              src={img}
              alt={img}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              className={'object-cover object-center w-full h-full'}
              src={spareImg}
              alt={spareImg}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation containerClassName="absolute h-full w-full">

          </BackgroundGradientAnimation>
        )}


        {id === 2 && (
          <GlobeDemo />
        )}

        {/* {id === 3 && (
          <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
              {['React.js', 'Next.js', 'TypeScript'].map((tech, index) => (
                <span key={index} className="py-2 lg:py-5 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10123E]">{tech}</span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>

            <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              {['Python', 'React-Native', 'Express.js'].map((tech, index) => (
                <span key={index} className="py-2 lg:py-5 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10123E]">{tech}</span>
              ))}

            </div>
            <div />
          </div>
        )} */}


        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm dark:text-neutral-300 md:text-xs lg:text-base z-10 ">
            {description}
          </div>
          <div className={cn(exClassname,'font-sans font-bold text-lg lg:text-3xl z-10')}>
            {title}
          </div>


          {id === 6 && (
            <div className="mt-5 relative">
              {/* <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div> */}
              <MagicButton
                title={copied ? "CV Viewed" : "View My CV"}
                icon={<FaCopy />}
                position="right"
                otherClasses=""
                handleClick={handleShowCV}
              />
            </div>

          )}


        </div>
      </div>
    </div>
  );
};
