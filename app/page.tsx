import React from 'react'
import Header from './Header/header'
import Home from './Home/home'
import Experience from './Experience/experience'
// import Projects from './Projects/Projects'
import { Review } from './Reviews/Review'
// import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

export default function App() {
  return (
    <div className='bg-[#161925] text-white/90 px-10 md:px-60 pb-60'>
      <Header />
      <Home />
      <div className="pt-20" id='experience'></div>
      <Experience />
      {/* <Quote quote='“Programmer: A machine that turns coffee into code.”' /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Review />
      <Contact />
    </div>
  )
}
