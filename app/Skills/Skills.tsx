'use client'
import React, { useEffect, useState } from 'react'
import IconCloud from "@/components/ui/icon-cloud";
import { skillsData } from '@/constants/skillsData';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define skill type categories
const slugs = [
    "typescript",
    "javascript",
    "cplusplus",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "mongodb",
    "vercel",
    "sql",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "linux",
    "redux",
];

// Define valid skill categories
const skillType: string[] = ['Frontend', 'Backend', 'Database', 'Others', 'Programming Language'];

// Define the types for your skills data
interface Skill {
    name: string;
    tech: string;
}

export default function Skills() {
    const [currentSelected, setCurrentSelected] = useState<string>('');  // State to track selected category

    useEffect(() => {
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: -150, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <div className='flex flex-col sm:flex-row items-center justify-between pt-40 sm:pt-60' id='skills' data-aos="fade-up"
            data-aos-offset="-150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <div className="text-5xl sm:text-6xl font-bold text-white/60 flex flex-col gap-10">
                <div>Development Stack</div>

                {/* Skill Type Selection */}
                <div className="flex flex-wrap gap-5">
                    {skillType.map((type) => (
                        <div
                            key={type}
                            className="text-sm font-semibold text-white hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white transition-all cursor-pointer bg-gradient-to-r from-purple-500 to-blue-400 px-4 py-2.5 rounded-md tracking-wider"
                            onMouseEnter={(e) => { setCurrentSelected(type); e.preventDefault() }}  // Highlight on hover
                            onMouseLeave={(e) => { setCurrentSelected(''); e.preventDefault() }}    // Reset on hover out
                        >
                            {type}
                        </div>
                    ))}
                </div>

                {/* Skills Display */}
                <div className="flex gap-3 flex-wrap">
                    {skillsData.map((tech: Skill) => (
                        <div
                            key={tech.name}
                            className={`text-sm tracking-wide hover:scale-105 cursor-pointer transition-all bg-white/15 font-normal text-white px-4 py-2.5 rounded-md ${currentSelected === tech.tech ? 'bg-white text-black' : ''
                                }`}
                        >
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Icon Cloud Display */}
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-[#161925] sm:px-20 sm:pb-20 pt-8 ">
                <IconCloud iconSlugs={slugs} />
            </div>
        </div>
    );
}
