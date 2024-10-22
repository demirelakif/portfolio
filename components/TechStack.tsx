"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TechStack() {
    return (
        <div id='projects' className='py-32'>
            <h1 className='heading'>
                My {' '}
                <span className='text-purple'>Tech Stack</span>
            </h1>
            <div className="">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="fast"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
        image:"/dotnet.svg"
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
        image:"/twit.svg"
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
        image:"/dotnet.svg"
    },
];
