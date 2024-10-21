import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer>
            <div className='w-full pt-20 pb-10' id='contact'>
                <div className='w-full absolute left-0 bottom-0 h-[80vh]'>
                    <img src='/footer-grid.svg' alt='grid' className='w-[90vw] h-[80vh] opacity-50 ' />
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='heading lg:max-w-[45vw]'>
                        Contact <span className='text-purple'>Me</span>
                    </h1>
                    <p className='text-white-200 md:mt-10 my-5'>Reach out to me today and let`&apos;s discuss how i can help you achieve your goals.</p>
                    <a href='mailto:demirel.akif@hotmail.com'>
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position='right'
                            otherClasses=''
                        />
                    </a>
                </div>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    Copyright © 2024 Akif Demirel
                </p>
                <div className='flex items-center md:gap-3 gap-6 py-2'>
                    {socialMedia.map((media) => (
                        <a key={media.id}>
                            <div key={media.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-200'>
                                <img src={media.img} alt={media.img} width={20} height={20} />
                            </div>
                        </a>

                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer