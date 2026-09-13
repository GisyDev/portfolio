import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div className='text-white '>
      <Header />

      <main className='space-y-10'>
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  )
}

export default Home