import React from 'react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FadeText } from "@/components/magicui/fade-text";
import { BackgroundLines } from "@/components/ui/background-lines";
import * as motion from "framer-motion/client"

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Home() {
    return (
        <BackgroundLines className='py-10 sm:py-60 flex items-center justify-center flex-col gap-10 sm:gap-16'>
            <div className="flex flex-col">
                <GradualSpacing
                    className="hidden sm:flex font-display text-center text-4xl font-bold tracking-[-0.06em] text-white/70 md:text-7xl md:leading-[5rem] z-50 text-wrap
                    "
                    text="Converting Thoughts Into Code."
                />
                {/* <div className="font-bold text-6xl text-center leading-[70px] tracking-wide bg-gradient-to-r from-purple-400 to-blue-200 bg-clip-text text-transparent">Converting Thoughts Into Code</div> */}
                {/* <GradualSpacing
                    className="font-display text-center text-[53px] font-extrabold tracking-[-0.06em] text-transparent bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text md:text-7xl md:leading-[5rem] z-50 text-wrap
                    "
                    text="Converting"
                />
                <GradualSpacing
                    className="font-display text-center text-[53px] font-extrabold tracking-[-0.06em] text-transparent bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text md:text-7xl md:leading-[5rem] z-50 text-wrap
                    "
                    text="Thoughts"
                />
                <GradualSpacing
                    className="font-display text-center text-[53px] font-extrabold tracking-[-0.06em] text-transparent bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text md:text-7xl md:leading-[5rem] z-50 text-wrap
                    "
                    text="Into Code"
                /> */}
                <div className="font-extrabold text-5xl tracking-wide leading-[60px] text-transparent bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text sm:hidden">Converting Thoughts Into Code</div>
            </div>
            <FadeText
                className="text-xl text-white italic sm:text-center flex z-50 font-extrabold sm:font-light"
                direction="up"
                framerProps={{
                    show: { transition: { delay: 1.6, duration: 1 } },
                }}
                text="As a Software Engineer with a strong development background, I deliver high-quality web solutions that drive impactful outcomes. Proficient in the MERN Stack, I expertly develop robust and user-centric applications as a skilled Full-Stack Developer."
            />
            <motion.div className="">
                <div className="relative z-50">
                    <Dock direction="middle">
                        <DockIcon>
                            <Icons.gitHub className="size-7" />
                        </DockIcon>
                        <DockIcon>
                            <Icons.linkedin />
                        </DockIcon>
                        <DockIcon>
                            <Icons.code />
                        </DockIcon>
                        <DockIcon>
                            <Icons.mail />
                        </DockIcon>
                        <DockIcon>
                            <Icons.insta />
                        </DockIcon>
                        <DockIcon>
                            <Icons.twitter />
                        </DockIcon>
                    </Dock>
                </div>
            </motion.div>
            {/* <BlurIn
                word="Scroll to know more 👇"
                className="text-sm animate-bounce text-white/90"
            /> */}
            <div className="animate-bounce mt-10 text-white/70"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>
        </BackgroundLines >
    )
}


const Icons = {
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    code: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="visualstudio" height='35' width='35'>
            <path fill='#e8e8e8' d="M28.12 5.8 15.34 18.19l-7.69-5.92-1.65.9v13.66l1.65.9 7.69-5.92L28.12 34.2 34 31.82V8.18ZM8.49 23.18v-6.36L12 20Zm18.65 2.17L20 20l7.14-5.35v10.7Z"></path>
        </svg>
    ),
    linkedin: () => (
        <svg height='32' width='32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="linkedin">
            <path fill='#e8e8e8' d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path>
        </svg>
    ),
    mail: () => (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100" id="email" height='30' width='30'>
            <path fill='#e8e8e8' d="M50,5C25.2,5,5,25.2,5,50c0,24.8,20.2,45,45,45c1.1,0,2-0.9,2-2s-0.9-2-2-2C27.4,91,9,72.6,9,50S27.4,9,50,9s41,18.4,41,41
	v10c0,5-4,9-9,9s-9-4-9-9V50c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,12.7,10.3,23,23,23c8.1,0,15.1-4.2,19.3-10.4
	C70.4,68.5,75.7,73,82,73c7.2,0,13-5.8,13-13V50C95,25.2,74.8,5,50,5z M50,69c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19
	S60.5,69,50,69z"></path>
        </svg>

    ),
    insta: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" id="instagram" width='35' height='35'>
            <path fill="#e8e8e8" d="M87.2 33.6c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-3.1-2.5-5.6-5.6-5.6zm-25 7.2c-13 0-23.6 10.6-23.6 23.6S49.2 88 62.2 88s23.6-10.6 23.6-23.6-10.6-23.6-23.6-23.6zm0 38.8c-8.4 0-15.1-6.8-15.1-15.1 0-8.4 6.8-15.1 15.1-15.1 8.4 0 15.1 6.8 15.1 15.1s-6.8 15.1-15.1 15.1zm47.7-34.8C109.9 28.9 97 16 81.1 16H43c-15.9 0-28.8 12.9-28.8 28.8v38.1c0 15.9 12.9 28.8 28.8 28.8h38c15.9 0 28.8-12.9 28.8-28.8V44.8zm-9.1 38c0 10.9-8.9 19.8-19.8 19.8H43c-10.9 0-19.8-8.9-19.8-19.8v-38C23.2 33.8 32 25 43 25h38c10.9 0 19.8 8.9 19.8 19.8v38z"></path>
        </svg>

    ),
    twitter: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" id="x">
            <path fill="#e8e8e8" fill-rule="evenodd" d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L13.348 9.23779L9.07342 3.40865C8.88504 3.15177 8.58555 3 8.267 3H4C3.62317 3 3.27833 3.21184 3.108 3.54798C2.93766 3.88412 2.97075 4.28747 3.19359 4.59135L9.45538 13.1304L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L10.652 14.7622L14.9266 20.5914C15.115 20.8482 15.4145 21 15.733 21H20C20.3768 21 20.7217 20.7882 20.892 20.452C21.0623 20.1159 21.0293 19.7125 20.8064 19.4086L14.5446 10.8696L20.7071 4.70711ZM12.3703 11.2865C12.4012 11.338 12.4371 11.3872 12.4781 11.4336L18.0266 19H16.2398L5.97338 5H7.76026L12.3703 11.2865Z" clip-rule="evenodd"></path>
        </svg>

    ),
};
