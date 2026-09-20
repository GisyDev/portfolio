import Header from '../ui/Header'
import About from '../ui/About'
import Experience from '../ui/Experience';
import Formation from '../ui/Formations';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router-dom';
import useAnimationInterceptionObserver from '../hooks/useAnimationInterceptionObserver';
import LanguageModal from '../modals/LanguajeModal';
import { useState } from 'react';



const Home = () => {

  useAnimationInterceptionObserver()




  return (
    <>
      {/* <Background />  */}
      <About/>
      <Experience />
      {/* <Projects/> */}
      {/* <Skills /> */}
      <Formation/>
      
    </>

  )
}

export default Home