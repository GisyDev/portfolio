import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div className='h-screen bg-neutral-900 text-white '>
        <Header/>

        <main className='space-y-10'>
            <About/>
            <Skills/>
        </main>
    </div>
  )
}

export default Home