import Header from '../ui/Header'
import About from '../ui/About'
import Skills from '../ui/Skills'
import Experience from '../ui/Experience';
import Education from '../ui/Education';
import Footer from '../ui/Footer';
import { Background } from './Background';
import Projects from '../ui/Projects';

const Home = () => {
  return (
    <>
      <Background />
      <div className='text-white relative z-10'>
        <Header />
        <main className=''>
          <About />
          {/* <Skills /> */}
          <div className='flex flex-col gap-12 z-50'>
            <Experience />
            {/* <Projects/> */}
            <Education />
            <Footer />
          </div>

        </main>
      </div>
    </>

  )
}

export default Home