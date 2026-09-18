import Header from '../ui/Header'
import About from '../ui/About'
import Experience from '../ui/Experience';
import Education from '../ui/Education';
import Footer from '../ui/Footer';
import { Background } from './Background';
import MoreInformationModal from '../modals/MoreInformationModal';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {

  const [moreInfoEnable, setMoreInfoEnable] = useState(false);

  return (
    <>
      <Background />
      <div className='text-white relative z-10'>
        <Header />
        <main className=''>
          <About moreInfoEnable={moreInfoEnable} setMoreInfoEnable={setMoreInfoEnable}/>
          {/* <Skills /> */}
          <div className='flex flex-col gap-12 z-50'>
            <Experience />
            {/* <Projects/> */}
            <Education />
            <Footer />
          </div>
          <Outlet />
          {moreInfoEnable && <MoreInformationModal setMoreInfoEnable={setMoreInfoEnable}/>}
        </main>
      </div>
    </>

  )
}

export default Home