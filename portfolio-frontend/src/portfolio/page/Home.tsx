import Header from '../ui/Header'
import About from '../ui/About'
import Experience from '../ui/Experience';
import Education from '../ui/Education';
import Footer from '../ui/Footer';
import { Background } from './Background';
import MoreInformationModal from '../modals/MoreInformationModal';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Skills from '../ui/Skills';

const Home = () => {

  const [moreInfoEnable, setMoreInfoEnable] = useState(false);

  return (
    <>
      {/* <Background />  */}
      <div className='text-white relative z-10'>
        <Header />
        <main className='max-w-page m-auto mt-34'>
          <About moreInfoEnable={moreInfoEnable} setMoreInfoEnable={setMoreInfoEnable} />
          <div className='flex flex-col gap-30 z-50'>
            <Experience />
            {/* <Projects/> */}
            <Skills />
            <Education />

          </div>
          <Outlet />
          {moreInfoEnable && <MoreInformationModal setMoreInfoEnable={setMoreInfoEnable} />}
        </main>
        <Footer />
      </div>
    </>

  )
}

export default Home