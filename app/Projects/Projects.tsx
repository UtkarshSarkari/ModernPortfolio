'use client'
import React, { useEffect, useState } from 'react'
import Safari from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectData } from '@/constants/projectData';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const images = [
    "/assets/chat.png",
    "/assets/codeeditor.png",
    "/assets/cognizantlogo.png",
    "/assets/covid.png",
    "/assets/knotnet.png",
  ];
  const numbers = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(1);
  const selectedProject = projectData[selected - 1];

  useEffect(() => {
    AOS.init({
      offset: -150,
      duration: 1000,
      easing: 'ease-in-out',
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <div className="relative sm:pt-20" data-aos="fade-up" id='projects'>
      {/* Background Boxes */}
      <div className="absolute inset-0 grid grid-cols-5 gap-6">
        {/* You can add more boxes here and adjust the number of columns */}
        {Array.from({ length: 150 }, (_, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-gradient-to-r from-purple-900 to-blue-800 opacity-30 animate-pulse rounded-lg"
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) scale(${Math.random() * 1.5})`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div data-aos="fade-up"
        data-aos-offset="-150"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" className="relative z-10 flex flex-col items-center justify-center">

        {/* <div className="absolute -rotate-90 top-80 -left-80 text-9xl font-bold tracking-widest z-10 opacity-50">PROJECTS</div> */}

        <div className="relative -mt-40">
          <div className="relative w-full flex items-center justify-center">
            <Safari url="magicui.design" className="w-[350px] sm:w-[900px]" />
            <div
              className="h-[210px] sm:h-[526px] w-[350px] sm:w-[900px] absolute top-[281px] sm:top-[133px] rounded-b-lg safari"
              style={{ backgroundImage: `url(${selectedProject.browserImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          <div className="absolute top-0 sm:top-3.5 -right-2 sm:-right-24">
            <div className="relative">
              <Iphone15Pro className="w-[50px] sm:w-[200px]" />
              <div
                className="h-[102px] sm:h-[404px] w-[50px] sm:w-[195px] absolute top-[390px] sm:top-[239px] sm:left-[2px] rounded-[10px] sm:rounded-[32px] phone shadow-2xl shadow-slate-800"
                style={{ backgroundImage: `url(${selectedProject.phoneImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
          </div>
        </div>

        {/* Number Selection */}
        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center justify-center gap-4 sm:gap-10 -mt-96 sm:-mt-10">
            {numbers.map((num) => (
              <div
                key={num}
                className={`px-7 sm:px-8 py-2 rounded-lg cursor-pointer transition-all z-10 font-semibold shadow-2xl text-sm sm:text-base
                  ${selected === num
                    ? 'bg-gradient-to-r from-purple-600 to-blue-400 text-white transition-all'
                    : 'bg-purple-300 text-black hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-300 transition-all'
                  }`}
                onClick={() => setSelected(num)}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="-mt-32 sm:mt-10 flex items-center justify-center">
          <Modal>
            <ModalTrigger className="bg-white text-black flex justify-center group/modal-btn tracking-widest">
              <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 tracking-widest">
                {
                  selectedProject.title
                }
              </span>
              <div className="-translate-x-96 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                </svg>

              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center mb-8 flex items-center justify-center gap-2">
                  {selectedProject.tagline}{" "}
                  {selectedProject.taglinesvg}
                </h4>
                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt="bali images"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="py-10 flex flex-wrap gap-x-8 gap-y-8 items-center justify-center">
                  {
                    selectedProject.features.map((feature,index) => (
                      <div key={index} className="flex items-center gap-2">{feature.icon}{feature.title}</div>
                    ))
                  }
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="px-1.5 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 hover:scale-105">
                  <a href={selectedProject.liveUrl} className='flex items-center gap-2 justify-center'>Live<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg></a>
                </button>
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-1.5 py-1 rounded-md border border-black w-28 hover:scale-105">
                  <a href={selectedProject.codeUrl} className='flex items-center justify-center gap-2'>Code<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>

                  </a>
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>

      </div>
    </div>
  );
}
