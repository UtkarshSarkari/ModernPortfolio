'use client'
import { menuData } from '@/constants/menuData';
import React, { useState } from 'react'

export default function Header() {
    const [selectedMenu, setSelectedMenu] = useState('Home');
    return (
        <div className='w-full flex items-center justify-center font-semibold py-8 z-50 gap-10'>
            <div className="left-header logofont text-4xl text-white/90 cursor-pointer z-50">
                US
            </div>
            <div className="hidden md:flex mid-header z-50">
                <ul className='flex gap-16 text-white/90 bg-white/20 z-50 px-5 py-3 rounded-md'>
                    {
                        menuData.map((item) => (
                            <li key={item.name}><a href={item.url} className={`tracking-wider cursor-pointer z-50  px-4 py-1 rounded-md transition-all ${selectedMenu == item.name ? "bg-white/40" : ""}`} onClick={() => { setSelectedMenu(item.name) }}>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="right-header flex gap-5 items-center z-50">
            <div className="bg-gradient-to-br from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 px-4 py-2.5 rounded-md flex items-center gap-2 tracking-wide text-white cursor-pointer">
                Contact
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>

                </div>
            {/* <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" className="size-7 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>

                </div> */}
            </div>
        </div>
    )
}