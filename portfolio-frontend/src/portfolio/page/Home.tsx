import Header from '../ui/Header'
import About from '../ui/About'
import Experience from '../ui/Experience';
import Education from '../ui/Formations';
import Footer from '../ui/Footer';
import { Background } from './Background';
import MoreInformationModal from '../modals/MoreInformationModal';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';


const Home = () => {

  const [moreInfoEnable, setMoreInfoEnable] = useState(false);


  return (
    <>
      {/* <Background />  */}
      <div className='text-white relative z-10'>
        <Header />
        <main className='max-w-page m-auto mt-34 flex flex-col gap-30'>
          <About moreInfoEnable={moreInfoEnable} setMoreInfoEnable={setMoreInfoEnable} />
          <Experience />
          {/* <Projects/> */}
          {/* <Skills /> */}
          <Education />
          <Outlet />
          {moreInfoEnable && <MoreInformationModal setMoreInfoEnable={setMoreInfoEnable} />}
        </main>
        <Footer />
      </div>
    </>

  )
}

export default Home