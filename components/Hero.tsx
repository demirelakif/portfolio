import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa";
import { Cover } from './ui/cover';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
    const words = [' Full Stack', ' Blockchain',' Backend', ' Frontend', ' Mobile'];
    return (
        <div className='pb-20 pt-32'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 
            md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2] items-center justify-center absolute top-0 left-0 ">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center text-center whitespace-normal'>
                        <TextGenerateEffect
                            className='text-center text-[40px] sm:text-2xl md:text-4xl lg:text-6xl text-3xl sm:text-nowrap whitespace-nowrap overflow-hidden text-ellipsis'
                            words='I&apos;m Akif, a'
                        />
                        <div className='flex flex-row items-center -mt-10'>
                            <FlipWords className='text-center text-[40px] md:text-4xl lg:text-6xl sm:text-2xl xl:text-6xl text-3xl  text-purple  sm:text-nowrap  whitespace-nowrap overflow-hidden text-ellipsis'  words={words} />
                            <TextGenerateEffect
                                className='text-center text-[40px] md:text-4xl lg:text-6xl sm:text-2xl text-3xl  sm:text-nowrap whitespace-normal overflow-hidden text-ellipsis'
                                words='Developer'
                            />
                        </div>
                    </div>


                    <h1 className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Experienced in project development, I take great pleasure in delivering results-driven projects with <Cover> lightning speed. </Cover></h1>
                    <a href='#projects'>
                        <MagicButton title="Show My Works" icon={<FaLocationArrow />} position={'right'} otherClasses={''} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Hero
