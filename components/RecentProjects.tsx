import { projects } from '@/data'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import Image from 'next/image'

const RecentProjects = () => {
    return (
        <div id='projects' className='py-20'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center  gap-x-12 mt-10'>
                {projects.map((project) => (
                    <div key={project.id} className='flex items-center justify-center'>
                        <CardContainer className="inter-var">
                            
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.5] dark:bg-[rgb(2,0,36)] dark:border-white/[0.1] border-black/[0.1] w-auto sm:w-[30rem] lg:w-[30vw] md:w-[40vw] h-auto rounded-xl p-6 border ">
                                <a href='github.com'>
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        {project.title}
                                    </CardItem>
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white absolute right-5 top-5"
                                    >
                                        <FaArrowRight />
                                    </CardItem>


                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {project.des}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src={project.img}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className='flex items-center justify-between mt-7 mb-3'>
                                        <div className='flex items-center'>
                                            {project.iconLists.map((icon, index) => (
                                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                                    <img src={icon} alt={icon} className='p-2' />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    </a>
                                </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects