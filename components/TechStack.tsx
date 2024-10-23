"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { techStackData } from "@/data";

export function TechStack() {
    return (
        <div id='techs' className='mt-8 relative flex flex-col justify-center'>
            <h1 className='heading pb-8'>
                My {' '}
                <span className='text-purple'>Tech Stack</span>
            </h1>
            <div className="">


                <InfiniteMovingCards
                    items={techStackData}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    );
}


