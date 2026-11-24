import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'
import PageBackground from '../components/PageBackground'

const PortfolioLayout = () => {
    return (
        <>
            <PageBackground>
                <Header />
                <main className='mt-25 md:mt-25 flex flex-col gap-20 '>
                    <Outlet />
                </main>
                <Footer />
            </PageBackground>
        </>
    )
}

export default PortfolioLayout