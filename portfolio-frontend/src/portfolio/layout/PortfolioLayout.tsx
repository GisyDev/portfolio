import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'
import PageBackground from '../components/PageBackground'

const PortfolioLayout = () => {
    return (
        <>
            <PageBackground>
                <Header />
                <main className='max-w-page m-auto mt-25 md:mt-30 flex flex-col gap-30 px-x'>
                    <Outlet />
                </main>
                <Footer />
            </PageBackground>
        </>
    )
}

export default PortfolioLayout