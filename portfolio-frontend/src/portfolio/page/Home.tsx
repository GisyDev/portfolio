import Header from '../components/Header'
import About from '../components/About'

const Home = () => {
  return (
    <div className='h-screen bg-neutral-900 text-white '>
        <Header/>

        <main>
            <About/>
        </main>
    </div>
  )
}

export default Home