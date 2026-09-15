import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import { Background } from './Background';

const Home = () => {
  return (
    <>
    <Background/>
      <div className='text-white'>
        <Header />
        <main className='space-y-10'>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Footer />
        </main>
      </div>
    </>

  )
}

export default Home