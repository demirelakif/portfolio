import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className='w-full'>
            {gridItems.map((item)=>(
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
                exClassname={item.exClassName}
                imgClassName={item.imgClassName}
                />
            ))
            
            }
        </BentoGrid>
    </section>
  )
}

export default Grid