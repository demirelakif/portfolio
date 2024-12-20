import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experiance = () => {
    return (
        <div id='experiances' className='pb-20'>
            <h1 className='heading'>
                My
                <span className='text-purple'> Work Experiance</span>
            </h1>

            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card)=>(
                    <Button 
                    key={card.id}
                    duration={Math.floor(Math.random()*1000)+3000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16 rounded-3xl'/>
                             <div className='lg:ms-5'>
                                <h1 className='text-center lg:text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <h3 className='text-center lg:text-start font-semibold'>
                                    {card.date}
                                </h3>
                                <p className='text-center lg:text-start text-white-100 mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                             </div>
                        </div>
                    </Button>
                ))}
            </div>

        </div>
    )
}

export default Experiance