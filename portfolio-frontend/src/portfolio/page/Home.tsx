import Header from '../ui/Header'
import About from '../ui/About'
import Skills from '../ui/Skills'
import Experience from '../ui/Experience';
import Education from '../ui/Education';
import Footer from '../ui/Footer';
import { Background } from './Background';
import Projects from '../ui/Projects';
import MoreInformationModal from '../modals/MoreInformationModal';
import { useState } from 'react';

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
          {moreInfoEnable && <MoreInformationModal setMoreInfoEnable={setMoreInfoEnable}/>}
        </main>
      </div>
    </>

  )
}

export default Home